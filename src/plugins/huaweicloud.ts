/*
 * @Author: Whzcorcd
 * @Date: 2021-02-04 10:01:45
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-02-04 17:58:18
 * @Description: file content
 */
// @ts-ignore
import ObsClient from '../libs/obs'
import hash from 'object-hash'
import dayjs from 'dayjs'

import { HuaweicloudClientOptions, IFileInfo } from '../types'

export default class Huaweicloud {
  static readonly _bucket: string = 'g-gallery'

  private _client?: any = void 0
  private _options = {
    access_key_id: '',
    secret_access_key: '',
    server: '',
    region: '',
    bucket: Huaweicloud._bucket,
  }

  constructor(options: HuaweicloudClientOptions) {
    Object.assign(this._options, options)
    if (!options.bucket) {
      this._options.bucket = Huaweicloud._bucket
    }

    const keys = Object.keys(this._options)
    if (!keys.includes('access_key_id') || !keys.includes('secret_access_key'))
      throw new Error('缺少必要的配置信息')

    const { server, region } = this._options
    const hasParam = Object.values({ server, region }).every(
      item => item === '' || item === null || item === undefined
    )
    if (hasParam) {
      throw new Error('必须提供 endpoint 或者 region 其中一个配置参数')
    }

    const entries = Object.entries(this._options)
    const integrity = entries.some(
      item =>
        item[0] !== 'server' &&
        item[0] !== 'region' &&
        item[0] !== 'bucket' &&
        (item[1] === '' || item[1] === null || item[1] === undefined)
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    if (options.server) {
      this._options.server = `https://${options.server}`
    } else {
      this._options.server = `https://obs.dualstack.${options.region}.myhuaweicloud.com`
    }
    this._client = new ObsClient({
      access_key_id: this._options.access_key_id,
      secret_access_key: this._options.secret_access_key,
      server: this._options.server,
    })
  }

  /**
   * 获取客户端实例
   * @date 2020-10-10
   * @param {Void}
   * @returns {any | undefined}
   */
  get getClientInstance(): any | undefined {
    return this._client
  }

  /**
   * 文件名处理
   * @date 2020-10-10
   * @param {File} file
   * @returns {IFileInfo}
   */
  private _formatFileName(file: File): IFileInfo {
    const fileHash: string = hash(
      {
        name: file.name,
        timestamp: dayjs().format('{YYYY} MM-DD HH:mm:ss'),
        salt: Math.random(),
      },
      { algorithm: 'sha1' }
    )
    const fileSuffix: string = file.name.split('.').slice(-1)[0]
    return { fileHash, fileSuffix }
  }

  /**
   * 文件上传
   * @date 2020-09-30
   * @param {FileList | null} files
   * @returns {Promise}
   */
  public upload(files: FileList | null): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (!this._client) return reject('SDK 加载失败')
      if (!files) return reject('无上传内容')

      const filesListLength = files.length
      const urls: string[] = []

      for (const item of files) {
        const { fileHash, fileSuffix } = this._formatFileName(item)

        const params = {
          Bucket: this._options.bucket,
          Key: `${fileHash}.${fileSuffix}`,
          SourceFile: item,
        }
        this._client.putObject(params, (err: string, result: any) => {
          if (err) {
            return reject(err)
          }

          // TODO 超时设置
          if (filesListLength === 1) {
            // 单文件
            return resolve(
              `https://${this._options.bucket}.${this._options.server.replace(
                'https://',
                ''
              )}/${fileHash}.${fileSuffix}`
            )
          } else {
            // 多文件
            urls.push(
              `https://${this._options.bucket}.${this._options.server.replace(
                'https://',
                ''
              )}/${fileHash}.${fileSuffix}`
            )
            if (urls.length === filesListLength) return resolve(urls)
          }
        })
      }
    })
  }

  /**
   * 关闭客户端
   * @date 2021-02-04
   * @param {Void} files
   * @returns {Void}
   */
  public close(): void {
    this._client.close()
  }
}
