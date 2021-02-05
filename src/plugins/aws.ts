/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:43:59
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-02-04 17:59:54
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
    endpoint: '',
    region: '',
    bucket: Aws._bucket,
    cname: '',
  }

  constructor(options: AwsClientOptions) {
    Object.assign(this._options, options)
    if (!options.bucket) {
      this._options.bucket = Aws._bucket
    }

    const keys = Object.keys(this._options)
    if (
      !keys.includes('accessKeyId') ||
      !keys.includes('secretAccessKey') ||
      !keys.includes('cname')
    )
      throw new Error('缺少必要的配置信息')

    const { endpoint, region } = this._options
    const hasParam = Object.values({ endpoint, region }).every(
      item => item === '' || item === null || item === undefined
    )
    if (hasParam) {
      throw new Error('必须提供 endpoint 或者 region 其中一个配置参数')
    }

    const entries = Object.entries(this._options)
    const integrity = entries.some(
      item =>
        item[0] !== 'endpoint' &&
        item[0] !== 'region' &&
        item[0] !== 'bucket' &&
        (item[1] === '' || item[1] === null || item[1] === undefined)
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    const credentials = {
      apiVersion: '2014-06-30',
      accessKeyId: this._options.accessKeyId,
      secretAccessKey: this._options.secretAccessKey,
    }

    const _region = this._options.endpoint.match(
      /s3\.(\S*)\.amazonaws\.com\.cn/i
    )
    // console.log(_region)

    AWS.config.update(credentials)
    AWS.config.region = _region ? _region[1] : this._options.region

    this._client = new AWS.S3({
      params: { Bucket: this._options.bucket },
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
          Bucket: this._options.bucket,
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
