/*
 * @Author: Whzcorcd
 * @Date: 2020-09-29 19:28:49
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-12-10 12:31:24
 * @Description: index
 */
import Aliyun from './plugins/aliyun'
import Cmecloud from './plugins/cmecloud'
import Aws from './plugins/aws'

import { ServiceProviders, UploaderOptions } from './types'

class Uploader {
  private _provider: ServiceProviders = 'aliyun'
  private _options: UploaderOptions = {
    accessKeyId: '',
    accessKeySecret: '',
    endpoint: '',
    region: '',
    bucket: '',
    cname: '',
    accept: 'image/png, image/jpeg, image/gif',
    multiFiles: false,
  }
  private _input?: HTMLInputElement = void 0

  constructor(provider: ServiceProviders, options: UploaderOptions) {
    if (!provider || typeof provider !== 'string')
      throw new Error('请配置正确的云服务商')

    if (typeof options !== 'object') throw new Error('请填写正确的配置格式')

    const entries = Object.entries(options)
    const integrity = entries.some(
      item =>
        (item[1] === '' || item[1] === null || item[1] === undefined) &&
        item[0] !== 'bucket' &&
        item[0] !== 'cname' &&
        item[0] !== 'accept'
    )
    if (integrity) throw new Error('请填写完整的配置信息')

    this._provider = provider.toLowerCase() as ServiceProviders
    Object.assign(this._options, options)
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

    try {
      input.setAttribute('id', 'file-chooser')
      input.setAttribute('type', 'file')
      this._options.accept && input.setAttribute('accept', this._options.accept)
      input.setAttribute(
        'style',
        'visibility: hidden;position: absolute;width: 1px;height: 1px;'
      )
      if (this._options.multiFiles) {
        input.setAttribute('multiple', '')
      }
      document.getElementsByTagName('body')[0].appendChild(input)
    } catch (err) {
      console.error(err)
    }

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
    this._input = void 0
  }

  /**
   * 文件上传
   * @date 2020-09-30
   * @param {FileList | null} filesList
   * @returns {Promise}
   */
  private _toggleUpload(
    filesList: FileList | null = null,
    standalone: boolean = false
  ): Promise<any> {
    if (!this._input && !standalone) return Promise.reject('请先构造 Uploader')

    const files = filesList ? filesList : this._input ? this._input.files : null
    if (!files) return Promise.reject('无上传内容')

    switch (this._provider) {
      case 'aliyun': {
        const uploaderInstance = new Aliyun({
          accessKeyId: this._options.accessKeyId,
          accessKeySecret: this._options.accessKeySecret,
          endpoint: <string>this._options.endpoint,
          bucket: <string>this._options.bucket,
        })
        return uploaderInstance.upload(files)
      }
      case 'cmecloud': {
        const uploaderInstance = new Cmecloud({
          accessKeyId: this._options.accessKeyId,
          secretAccessKey: this._options.accessKeySecret,
          endpoint: <string>this._options.endpoint,
          bucket: <string>this._options.bucket,
          sslEnabled: true,
        })
        return uploaderInstance.upload(files)
      }
      case 'aws': {
        const uploaderInstance = new Aws({
          accessKeyId: this._options.accessKeyId,
          secretAccessKey: this._options.accessKeySecret,
          endpoint: <string>this._options.endpoint,
          region: <string>this._options.region,
          bucket: <string>this._options.bucket,
          cname: this._options.cname,
        })
        return uploaderInstance.upload(files)
      }
      default:
        return Promise.reject('请配置正确的云服务商')
    }
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
          const res = await this._toggleUpload().catch(err => {
            this._removeUploader()
            return reject(err)
          })

          this._removeUploader()
          return resolve(res)
        },
        false
      )
      this._input.click()
    })
  }

  /**
   * 装填器
   * @date 2020-10-10
   * @param {FileList} files
   * @returns {Promise}
   */
  public fillUploader(files: FileList): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const res = await this._toggleUpload(files, true).catch(err => {
        this._removeUploader()
        return reject(err)
      })

      this._removeUploader()
      return resolve(res)
    })
  }

  /**
   * 转换器
   * @date 2020-10-10
   * @param {String} dataUrl
   * @param {String} filename
   * @returns {File | null}
   */
  public dataUrlToFile(dataUrl: string, filename: string): File | null {
    const arr = dataUrl.split(',')
    if (!arr[0].match(/:(.*?);/)) return null

    const mime = (arr[0].match(/:(.*?);/) as RegExpMatchArray)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)

    let i = n
    while (i--) {
      u8arr[i] = bstr.charCodeAt(i)
    }
    return new File([u8arr], filename, { type: mime })
  }
}

export default Uploader
