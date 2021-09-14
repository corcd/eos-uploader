/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:43:59
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-09-14 15:45:43
 * @Description: file content
 */
import ObsClient from '../libs/obs'
import hash from 'object-hash'
import dayjs from 'dayjs'

import { CmecloudClientOptions, IFileInfo } from '../types'

export default class Cmecloud {
  static readonly _bucket: string = 'g-gallery'

  private _client?: any = void 0
  private _options = {
    access_key_id: '',
    secret_access_key: '',
    endpoint: '',
    bucket: Cmecloud._bucket,
  }

  constructor(options: CmecloudClientOptions) {
    Object.assign(this._options, options)
    if (!options.bucket) {
      this._options.bucket = Cmecloud._bucket
    }

    const keys = Object.keys(this._options)
    if (!keys.includes('access_key_id') || !keys.includes('secret_access_key'))
      throw new Error('缺少必要的配置信息')

    const entries = Object.entries(this._options)
    const integrity = entries.some(
      item =>
        item[0] !== 'bucket' &&
        (item[1] === '' || item[1] === null || item[1] === undefined)
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    this._client = new ObsClient({
      access_key_id: this._options.access_key_id,
      secret_access_key: this._options.secret_access_key,
      server: `https://${options.endpoint}`,
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
    return new Promise((resolve, reject) => {
      if (!this._client) return reject('SDK 加载失败')
      if (!files) return reject('无上传内容')

      const filesListLength = files.length
      const urls: string[] = []

      for (const item of files) {
        const { fileHash, fileSuffix } = this._formatFileName(item)

        const params = {
          Key: `${fileHash}.${fileSuffix}`,
          Bucket: this._options.bucket,
          SourceFile: item
        }
        this._client.putObject(params, (err: string, result: any) => {
          if (err) {
            return reject(err)
          }

          const url = `https://${this._options.bucket}.${this._options.endpoint}/${fileHash}.${fileSuffix}`

          // TODO 超时设置
          if (filesListLength === 1) {
            // 单文件
            return resolve(url)
          } else {
            // 多文件
            urls.push(url)
            if (urls.length === filesListLength) return resolve(urls)
          }
        })
      }
    })
  }

  /**
   * 关闭客户端
   * @date 2021-09-04
   * @param {Void} files
   * @returns {Void}
   */
   public close(): void {
    this._client.close()
  }
}
