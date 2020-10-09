/*
 * @Author: Whzcorcd
 * @Date: 2020-09-29 19:28:49
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-09 12:33:33
 * @Description: file content
 */
import S3 from 'aws-sdk/clients/s3'

enum Access {
  'private',
  'public-read',
  'public-read-write',
}

interface UploaderOptions {
  accessKeyId: string
  secretAccessKey: string
  endpoint: string
  sslEnabled?: boolean
}

class Uploader {
  private _s3?: S3 = undefined
  private _bucket: string = 'gallery'
  private _options: UploaderOptions = {
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    sslEnabled: false,
  }
  private _input?: HTMLInputElement = undefined

  constructor(options: UploaderOptions) {
    const currentOptions = Object.assign(
      {},
      {
        apiVersion: '2006‐03‐01',
        accessKeyId: '',
        secretAccessKey: '',
        endpoint: '',
        s3ForcePathStyle: true,
        signatureVersion: 'v2',
        sslEnabled: false,
      },
      options
    )
    this._options = options
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
      return oldTarget
    }

    const input = window.document.createElement('input')
    input.setAttribute('id', 'file-chooser')
    input.setAttribute('type', 'file')
    input.setAttribute(
      'style',
      'visibility: hidden;position: absolute;width: 1px;height: 1px;'
    )
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
   *  移除 Input:file 元素
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
   * 上传
   * @date 2020-09-30
   * @param {Void}
   * @returns {Promise}
   */
  private _upload(): Promise<any> {
    if (!this._input) return Promise.reject('请先构造 Uploader')
    const file = this._input.files ? this._input.files[0] : null

    return new Promise((resolve, reject) => {
      if (!this._s3) return reject('SDK 加载失败')
      const $S = this._s3
      if (file) {
        const params = {
          Key: file.name,
          Bucket: this._bucket,
          Body: file,
          ACL: 'public-read',
        }
        $S.putObject(params, (err, data) => {
          if (err) {
            return reject(err)
          }

          return resolve(
            `${this._options.sslEnabled ? 'https' : 'http'}://${
              this._options.endpoint
            }/${this._bucket}/${file.name}`
          )
        })
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
          const res = await this._upload().catch(err => {
            this._removeUploader()
            reject(err)
          })
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
