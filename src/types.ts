/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:44:32
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-09-14 15:26:54
 * @Description: ts types modules
 */
export enum Access {
  'private',
  'public-read',
  'public-read-write',
}

export type ServiceProviders =
  | 'aliyun'
  | 'tencent'
  | 'huaweicloud'
  | 'aws'
  | 'cmecloud'

export interface UploaderOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint?: string
  region?: string
  cname?: string
  bucket?: string
  accept?: string
  multiFiles?: boolean
}

export interface CmecloudClientOptions {
  access_key_id: string
  secret_access_key: string
  endpoint?: string
  bucket?: string
}

export interface HuaweicloudClientOptions {
  access_key_id: string
  secret_access_key: string
  server?: string
  region?: string
  bucket?: string
}

export interface AliyunClientOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint: string
  bucket?: string
}

export interface TencentClientOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint?: string
  region?: string
  bucket?: string
  cname?: string
}

export interface AwsClientOptions {
  accessKeyId: string
  secretAccessKey: string
  endpoint?: string
  region?: string
  bucket?: string
  cname?: string
}

export type IFileInfo = {
  fileHash: string
  fileSuffix: string
}
