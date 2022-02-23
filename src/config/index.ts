/*
 * @Author: Whzcorcd
 * @Date: 2021-10-11 10:33:53
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-10-12 11:10:47
 * @Description: file content
 */
export const SERVER_PATH = '//api.guangdianyun.tv'

export enum Status {
  Waiting = 'waiting', // 等待
  Running = 'running', // 进行中
  Error = 'error', // 错误，但是可以重试
  Success = 'success', // 成功
  Fail = 'fail' // 超过重试次数后仍然失败
}

export const PENDING = 'pending'
export const SUCCESS = 'success'
export const FAIL = 'fail'

export enum UploadStatus {
  CalculatingHash = "calculatingHash", // 正在计算 hash
  Waiting = "waiting", // 等待用户开始上传
  Uploading = "uploading", // 正在上传
  Abort = "abort", // 暂停上传
  Success = "success", // 后端文件合并完毕，文件秒传时也应该是这个状态
  Fail = "fail" // 上传失败
}

export const UPLOAD_SUCCESS = 'success'
export const UPLOAD_FAIL = 'failed'