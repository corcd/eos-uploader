/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:44:32
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-11-06 12:29:38
 * @Description: ts types modules
 */
export enum Access {
  'private',
  'public-read',
  'public-read-write',
}

export type ServiceProviders = 'aliyun' | 'cmecloud' | 'aws'

export interface UploaderOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint?: string
  region?: string
  cname?: string
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
}

export interface AwsClientOptions {
  accessKeyId: string
  secretAccessKey: string
  region: string
  cname?: string
}

export type IFileInfo = {
  fileHash: string
  fileSuffix: string
}
