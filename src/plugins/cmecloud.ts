/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:43:59
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-10 16:53:51
 * @Description: file content
 */
import S3 from 'aws-sdk/clients/s3'
import hash from 'object-hash'
import dayjs from 'dayjs'

import { CmecloudClientOptions, IFileInfo } from '../types'

export default class Cmecloud {
  static readonly _bucket: string = 'gallery'

  private _client?: S3 = undefined
  private _options = {
    apiVersion: '2006‐03‐01',
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    s3ForcePathStyle: true,
    signatureVersion: 'v2',
    sslEnabled: false,
  }

  constructor(options: CmecloudClientOptions) {
    Object.assign(this._options, options)

    const keys = Object.values(this._options)
    const integrity = keys.some(
      item => item === '' || item === null || item === undefined
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    this._client = new S3(this._options)
  }

  /**
   * 获取客户端实例
   * @date 2020-10-10
   * @param {Void}
   * @returns {S3 | undefined}
   */
  get getClientInstance(): S3 | undefined {
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
          Bucket: Cmecloud._bucket,
          Body: item,
          ACL: 'public-read',
        }
        this._client.putObject(params, err => {
          if (err) {
            return reject(err)
          }

          // TODO 超时设置
          if (filesListLength === 1) {
            // 单文件
            return resolve(
              `${this._options.sslEnabled ? 'https' : 'http'}://${
                this._options.endpoint
              }/${Cmecloud._bucket}/${fileHash}.${fileSuffix}`
            )
          } else {
            // 多文件
            urls.push(
              `${this._options.sslEnabled ? 'https' : 'http'}://${
                this._options.endpoint
              }/${Cmecloud._bucket}/${fileHash}.${fileSuffix}`
            )
            if (urls.length === filesListLength) return resolve(urls)
          }
        })
      }
    })
  }
}