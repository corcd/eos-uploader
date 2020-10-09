/*
 * @Author: Whzcorcd
 * @Date: 2020-09-29 19:28:49
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-09 19:37:25
 * @Description: file content
 */
import S3 from 'aws-sdk/clients/s3'
import hash from 'object-hash'
import dayjs from 'dayjs'

enum Access {
  'private',
  'public-read',
  'public-read-write',
}

interface UploaderOptions {
  accessKeyId: string
  secretAccessKey: string
  endpoint: string
  sslEnabled: boolean
  multiFiles?: boolean
}

type IFileInfo = {
  fileHash: string
  fileSuffix: string
}

class Uploader {
  private _s3?: S3 = undefined
  private _bucket: string = 'gallery'
  private _options: UploaderOptions = {
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    sslEnabled: false,
    multiFiles: false,
  }
  private _input?: HTMLInputElement = undefined

  constructor(options: UploaderOptions) {
    const currentOptions = {
      apiVersion: '2006‐03‐01',
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.secretAccessKey,
      endpoint: options.endpoint,
      s3ForcePathStyle: true,
      signatureVersion: 'v2',
      sslEnabled: options.sslEnabled,
    }

    const keys = Object.values(currentOptions)
    const integrity = keys.some(
      item => item === '' || item === null || item === undefined
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    Object.assign(this._options, options)
    this._s3 = new S3(currentOptions)
  }

  /**
   * 创建隐藏的 Input:file 元素
   * @date 2020-10-09
   * @param {Void}
   * @returns {HTMLInputElement}
   */
  private _createUploader(): HTMLInputElement {
    // 已存在的情况
    const oldTarget = document.getElementById(
      'file-chooser'
    ) as HTMLInputElement
    if (oldTarget) {
      if (this._options.multiFiles) {
        oldTarget.setAttribute('multiple', '')
      } else {
        oldTarget.removeAttribute('multiple')
      }
      return oldTarget
    }

    const input = window.document.createElement('input')
    input.setAttribute('id', 'file-chooser')
    input.setAttribute('type', 'file')
    input.setAttribute(
      'style',
      'visibility: hidden;position: absolute;width: 1px;height: 1px;'
    )
    if (this._options.multiFiles) {
      input.setAttribute('multiple', '')
    }
    document.getElementsByTagName('body')[0].appendChild(input)
    const target = document.getElementById('file-chooser') as HTMLInputElement
    target.addEventListener(
      'click',
      () => {
        input.click()
      },
      false
    )
    return target
  }

  /**
   * 移除 Input:file 元素
   * @date 2020-10-09
   * @param {Void}
   * @returns {Void}
   */
  private _removeUploader(): void {
    const target = document.getElementById('file-chooser') as HTMLInputElement
    if (target) {
      document.getElementsByTagName('body')[0].removeChild(target)
    }
    this._input = undefined
  }

  /**
   * 文件名哈希
   * @date 2020-10-09
   * @param {File}
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
   * 单文件上传
   * @date 2020-09-30
   * @param {Void}
   * @returns {Promise}
   */
  private _singleUpload(): Promise<any> {
    if (!this._input) return Promise.reject('请先构造 Uploader')
    const file = this._input.files ? this._input.files[0] : null

    return new Promise((resolve, reject) => {
      if (!this._s3) return reject('SDK 加载失败')
      const $S = this._s3
      if (file) {
        const { fileHash, fileSuffix } = this._formatFileName(file)

        const params = {
          Key: `${fileHash}.${fileSuffix}`,
          Bucket: this._bucket,
          Body: file,
          ACL: 'public-read',
        }
        $S.putObject(params, (err, data) => {
          if (err) {
            return reject(err)
          }

          // TODO 超时设置
          return resolve(
            `${this._options.sslEnabled ? 'https' : 'http'}://${
              this._options.endpoint
            }/${this._bucket}/${fileHash}.${fileSuffix}`
          )
        })
      } else {
        return reject('无上传内容')
      }
    })
  }

  /**
   * 多文件上传
   * @date 2020-09-30
   * @param {Void}
   * @returns {Promise}
   */
  private _multiUpload(): Promise<any> {
    if (!this._input) return Promise.reject('请先构造 Uploader')
    const files = this._input.files ? this._input.files : null

    console.log(files)

    return new Promise((resolve, reject) => {
      if (!this._s3) return reject('SDK 加载失败')
      const $S = this._s3
      const urls: string[] = []
      if (files) {
        const filesListLength = files.length
        for (const item of files) {
          const { fileHash, fileSuffix } = this._formatFileName(item)

          const params = {
            Key: `${fileHash}.${fileSuffix}`,
            Bucket: this._bucket,
            Body: item,
            ACL: 'public-read',
          }
          $S.putObject(params, (err, data) => {
            if (err) {
              return reject(err)
            }

            urls.push(
              `${this._options.sslEnabled ? 'https' : 'http'}://${
                this._options.endpoint
              }/${this._bucket}/${fileHash}.${fileSuffix}`
            )

            // TODO 超时设置
            if (urls.length === filesListLength) return resolve(urls)
          })
        }
      } else {
        return reject('无上传内容')
      }
    })
  }

  /**
   * 触发器
   * @date 2020-10-09
   * @param {Void}
   * @returns {Promise}
   */
  public openUploader(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._input = this._createUploader()
      this._input.addEventListener(
        'change',
        async e => {
          e.preventDefault()
          let res: string
          if (this._options.multiFiles) {
            res = await this._multiUpload().catch(err => {
              this._removeUploader()
              reject(err)
            })
          } else {
            res = await this._singleUpload().catch(err => {
              this._removeUploader()
              reject(err)
            })
          }
          this._removeUploader()
          return resolve(res)
        },
        false
      )
      this._input.click()
    })
  }
}

export default Uploader
