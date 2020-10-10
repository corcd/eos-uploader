/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:44:32
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-10 16:24:10
 * @Description: ts types modules
 */
export enum Access {
  'private',
  'public-read',
  'public-read-write',
}

export type ServiceProviders = 'aliyun' | 'cmecloud'

export interface UploaderOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint: string
  cname?: boolean
  multiFiles?: boolean
}

export interface CmecloudClientOptions {
  accessKeyId: string
  secretAccessKey: string
  endpoint: string
  sslEnabled: boolean
}

export interface AliyunClientOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint: string
  cname?: boolean
}

export type IFileInfo = {
  fileHash: string
  fileSuffix: string
}
