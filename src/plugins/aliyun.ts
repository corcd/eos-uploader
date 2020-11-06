/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:44:08
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-11-06 14:32:08
 * @Description: file content
 */
import OSS from 'ali-oss'
import hash from 'object-hash'
import dayjs from 'dayjs'

import { AliyunClientOptions, IFileInfo } from '../types'

export default class Aliyun {
  static readonly _bucket: string = 'guangdianyun'

  private _client?: OSS = void 0
  private _options = {
    accessKeyId: '',
    accessKeySecret: '',
    endpoint: '',
    bucket: '',
    secure: true,
  }

  constructor(options: AliyunClientOptions) {
    Object.assign(this._options, options)
    this._options.bucket = Aliyun._bucket

    const keys = Object.keys(this._options)
    if (
      !keys.includes('accessKeyId') ||
      !keys.includes('accessKeyId') ||
      !keys.includes('endpoint')
    )
      throw new Error('缺少必要的配置信息')

    const values = Object.values(this._options)
    const integrity = values.some(
      item => item === '' || item === null || item === undefined
    )
    if (integrity) throw new Error('请填写合法的配置信息')

    this._client = new OSS(this._options)
  }

  /**
   * 获取客户端实例
   * @date 2020-10-10
   * @param {Void}
   * @returns {OSS | undefined}
   */
  get getClientInstance(): OSS | undefined {
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

        const { url } = await this._client.put(
          `${fileHash}.${fileSuffix}`,
          item
        )

        // TODO 超时设置
        if (filesListLength === 1) {
          // 单文件
          return resolve(url)
        } else {
          // 多文件
          urls.push(url)
          if (urls.length === filesListLength) return resolve(urls)
        }
      }
    })
  }
}
