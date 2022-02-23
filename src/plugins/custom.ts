/*
 * @Author: Whzcorcd
 * @Date: 2021-10-11 10:10:04
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-10-12 11:05:36
 * @Description: file content
 */
import axios from 'axios'
import { SERVER_PATH, Status, UploadStatus, PENDING, SUCCESS, FAIL, UPLOAD_SUCCESS, UPLOAD_FAIL } from '../config'
import { TTask } from '../types'

const CHUNK_SIZE: number = 1024 * 1024 * 0.5 // 切片大小
const CONCURRENCY_LIMIT: number = 4 // 并发数量限制

// 异步任务调度器
class Scheduler {
  private status: string
  private max: number
  private tasks: Array<TTask>
  private promises: Array<Promise<any>>
  private settledCount: number
  private isAbort: boolean
  private retryTime: number
  private deferred: any
  private resolved: any

  constructor(maximumConcurrency = 4, retryTime = 3) {
    this.max = maximumConcurrency // 最大并发量
    this.retryTime = retryTime // 重试次数

    this.status = PENDING
    this.settledCount = 0 // 已经有结果的任务数量
    this.isAbort = false // 是否暂停

    this.tasks = [] // 任务数组
    this.promises = [] // 任务结果 promise 数组，顺序与任务添加顺序对应

    this.setDeferred()
  }

  // 添加任务
  append(handler: () => Promise<any>, index: number) {
    this.tasks.push({ handler, status: Status.Waiting, retryTime: 0, index })
  }

  async done() {
    await this.run()
    const res = await Promise.allSettled(this.promises)
    return ({
      status: this.status,
      res
    })
  }

  pause() {
    this.isAbort = true
  }

  resume() {
    this.isAbort = false
    this.resolve()
    this.setDeferred()
  }

  private setDeferred() {
    // 将 promise 的 resolve/reject 方法保存到外部，在外部控制 promise 的状态
    this.deferred = new Promise((resolve) => {
      this.resolved = resolve
    })
  }

  private resolve() {
    if (!this.resolved) {
      throw new Error('Method not implemented.')
    }
    this.resolved() // 放行 deferred
  }

  private run() {
    return new Promise((resolve) => {
      const start = async () => {
        if (this.isAbort) {
          // this.deferred 为 pending 状态时，后面的任务需要等待该 promise 被 resolved 才能继续，借此实现了任务暂停
          await this.deferred
        }

        const index = this.tasks.findIndex(
          ({ status }) => status === Status.Waiting || status === Status.Error
        )
        if (index === -1) return

        const task = this.tasks[index]
        task.status = Status.Running
        const promise = task.handler()
        this.promises[task.index] = promise

        promise
          .then(() => {
            task.status = Status.Success
            this.settledCount += 1

            if (this.settledCount >= this.tasks.length) {
              if (this.status === PENDING) {
                this.status = SUCCESS
              }
              resolve(void 0)
            } else {
              start()
            }
          })
          .catch(() => {
            if (task.retryTime >= this.retryTime) {
              task.status = Status.Fail
              this.settledCount += 1
              this.status = FAIL
            } else {
              task.status = Status.Error
              task.retryTime++
            }

            if (this.settledCount >= this.tasks.length) {
              resolve(void 0)
            } else {
              start()
            }
          })
      }

      // 一次性执行最大并行数量的任务，等待返回
      for (let i = 0; i < this.max; i++) {
        start()
      }
    })
  }
}

export default class CustomUploader {
  static readonly _serverPath: string = SERVER_PATH

  private file: File | null = null
  private hash: string = ''
  private worker: Worker | null = null
  private Scheduler: Scheduler | null = null
  private curStatus: string = UploadStatus.Waiting
  private hashPercent: number = 0 // hash 计算进度
  private uploadedLen: number = 0 // 已经上传过的切片数量
  private chunksLen: number = 0 // 总切片数量
  private fileChunks: Array<Blob> = []
  private showPreview: boolean = false // 本地文件预览

  constructor() {
    this.resetInitialState()
  }

  // hash 计算进度
  get hashPercentProgress() {
    return this.hashPercent
  }

  // 上传进度
  get uploadPercentProgress() {
    if (this.curStatus === UploadStatus.Waiting) return 0
    if (this.curStatus === UploadStatus.Success) return 100
    return Math.floor((100 * this.uploadedLen) / this.chunksLen)
  }

  // 预览状态
  get previewStatus() {
    return this.showPreview
  }

  // hash 计算状态
  get hashProgressStatus() {
    return this.hashPercent >= 100 ? UPLOAD_SUCCESS : null
  }

  // 上传状态
  get uploadProgressStatus() {
    if (this.curStatus === UploadStatus.Fail) {
      return UPLOAD_FAIL
    }
    return this.uploadPercentProgress >= 100 ? UPLOAD_SUCCESS : null
  }

  // 导入文件
  handleFileChange(e: HTMLInputElement) {
    this.resetInitialState()
    if (!e.files) {
      throw new Error('File is not existed.')
    }
    this.file = e.files[0]
    this.generatePreview()
  }

  // 点击上传
  async handleUpload() {
    if (!this.file) {
      // this.$message({
      //   type: "error",
      //   message: "请选择要上传的文件"
      // })
      return Promise.reject()
    }
    // 文件切片
    this.createFileChunks()
    // 计算文件hash
    await this.getFileHash()
    // 验证是否需要上传
    const { shouldUpload, uploadedList } = await this.verifyUpload()
    if (!shouldUpload) {
      // this.$message({
      //   type: "success",
      //   message: "文件秒传"
      // })
      this.curStatus = UploadStatus.Success
      return Promise.resolve()
    }
    // 过滤掉已上传的切片
    const chunksNeedUpload = this.fileChunks
      .map((chunk, index) => ({
        chunk,
        hash: `${this.hash}_${index}`,
        fileHash: this.hash
      }))
      .filter(({ hash }) => !uploadedList.includes(hash))
    this.uploadedLen = uploadedList.length
    this.uploadChunks(chunksNeedUpload)
  }

  // 暂停上传
  handlePause() {
    this.Scheduler && this.Scheduler.pause()
    this.curStatus = UploadStatus.Abort
  }

  // 继续上传
  handleResume() {
    this.Scheduler && this.Scheduler.resume()
    this.curStatus = UploadStatus.Uploading
  }

  // 出错重试
  async handleRetry() {
    const { uploadedList } = await this.verifyUpload()
    const chunksNeedUpload = this.fileChunks
      .map((chunk, index) => ({
        chunk,
        hash: `${this.hash}_${index}`,
        fileHash: this.hash
      }))
      .filter(({ hash }) => !uploadedList.includes(hash))
    this.uploadChunks(chunksNeedUpload)
  }

  // 初始化状态
  private resetInitialState() {
    this.file = null
    this.hash = ""
    this.worker = null
    this.Scheduler = null

    this.curStatus = UploadStatus.Waiting
    this.hashPercent = 0
    this.uploadedLen = 0

    this.chunksLen = 0
    this.fileChunks = []
  }

  // 文件预览
  private generatePreview() {
    const URLObject = window.URL.createObjectURL(this.file) // URL.createObjectURL 方法创建一个对于本地文件的引用 url
    // TODO 预览载入点
    // @ts-ignore
    const preview = this.$refs.preview
    preview.src = URLObject
    preview.oncanplay = () => {
      this.showPreview = true
    }
  }

  // 文件切片，直接利用 input 的 file 对象切片
  private createFileChunks() {
    const chunkList = [], file = this.file as File
    const size = file.size

    let cur = 0
    while (cur < size) {
      chunkList.push(file.slice(cur, cur + CHUNK_SIZE))
      cur += CHUNK_SIZE
    }
    // 记录总分片数量
    this.chunksLen = chunkList.length
    this.fileChunks = [...chunkList]
  }

  // 计算文件 hash
  private getFileHash(): Promise<void> {
    this.curStatus = UploadStatus.CalculatingHash
    return new Promise((resolve, reject) => {
      this.worker = new Worker("/worker/hash.js")
      this.worker.postMessage({ fileChunks: this.fileChunks })
      this.worker.onmessage = (e: { data: { hash: string; percent: number } }) => {
        const { hash, percent } = e.data
        this.hashPercent = Math.ceil(percent)
        if (hash) {
          this.hash = hash
          return resolve()
        }
        return reject()
      }
    })
  }

  // 验证是否需要上传
  private async verifyUpload(): Promise<any> {
    // TODO 修改服务器对应地址
    const { data } = await axios({
      url: "/verify",
      method: "post",
      data: { filename: (this.file as File).name, fileHash: this.hash }
    })
    return data
  }

  // 上传没有上传过的切片
  private async uploadChunks(chunksNeedUpload: Array<{ chunk: Blob; hash: string; fileHash: string }>): Promise<void> {
    this.curStatus = UploadStatus.Uploading
    this.Scheduler = new Scheduler(CONCURRENCY_LIMIT) // 新建调度器

    chunksNeedUpload
      .map(({ chunk, hash, fileHash }) => {
        const formData = new FormData()
        formData.append("chunk", chunk)
        formData.append("hash", hash)
        formData.append("fileHash", fileHash)
        formData.append("filename", (this.file as File).name)
        return formData
      })
      .forEach((formData: any, index: any) => {
        const taskFn = () =>
          axios({
            url: "/",
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData
          }).then(() => this.uploadedLen++)
        this.Scheduler && this.Scheduler.append(taskFn, index)
      })

    const { status } = await this.Scheduler.done()
    if (status === "success") {
      await this.mergeRequest()
      this.resetInitialState()
    } else {
      this.curStatus = UploadStatus.Fail
      // this.$message({
      //   type: "error",
      //   message: "文件上传失败，请重试"
      // })
    }
  }

  // 通知服务器合并切片
  private async mergeRequest(): Promise<void> {
    // TODO 修改服务器对应地址
    await axios({
      url: "/merge",
      method: "post",
      data: { hash: this.hash, suffix: (this.file as File).type.split("/")[1] }
    })
    this.curStatus = UploadStatus.Success
    // this.$message({
    //   type: "success",
    //   message: "文件上传成功"
    // })
  }
}