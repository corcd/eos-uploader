/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:43:59
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-11-06 14:33:01
 * @Description: file content
 */
import AWS from 'aws-sdk'
import hash from 'object-hash'
import dayjs from 'dayjs'

import { AwsClientOptions, IFileInfo } from '../types'

export default class Aws {
  static readonly _bucket: string = 'gallery-prod'

  private _client?: AWS.S3 = void 0
  private _options = {
    accessKeyId: '',
    secretAccessKey: '',
    region: '',
    cname: '',
  }

  constructor(options: AwsClientOptions) {
    Object.assign(this._options, options)

    const keys = Object.keys(this._options)
    if (
      !keys.includes('accessKeyId') ||
      !keys.includes('secretAccessKey') ||
      !keys.includes('region') ||
      !keys.includes('cname')
    )
      throw new Error('缺少必要的配置信息')

    const values = Object.values(this._options)
    const integrity = values.some(
      item => item === '' || item === null || item === undefined
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    const credentials = {
      apiVersion: '2014-06-30',
      accessKeyId: this._options.accessKeyId,
      secretAccessKey: this._options.secretAccessKey,
    }

    AWS.config.update(credentials)
    AWS.config.region = this._options.region

    this._client = new AWS.S3({
      params: { Bucket: Aws._bucket },
    })
  }

  /**
   * 获取客户端实例
   * @date 2020-10-10
   * @param {Void}
   * @returns {AWS.S3 | undefined}
   */
  get getClientInstance(): AWS.S3 | undefined {
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
          Key: `${fileHash}.${fileSuffix}`,
          Bucket: Aws._bucket,
          ContentType: item.type,
          Body: item,
          'Access-Control-Allow-Credentials': '*',
          ACL: 'public-read',
        }

        this._client.upload(params, (err: unknown, data: { Key: string }) => {
          if (err) {
            return reject(err)
          }

          // TODO 超时设置
          if (filesListLength === 1) {
            // 单文件
            return resolve(`https://${this._options.cname}/${data.Key}`)
          } else {
            // 多文件
            urls.push(`https://${this._options.cname}/${data.Key}`)
            if (urls.length === filesListLength) return resolve(urls)
          }
        })
      }
    })
  }
}
