/*
 * @Author: Whzcorcd
 * @Date: 2020-10-10 09:44:32
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-12-10 12:20:46
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
  bucket?: string
  accept?: string
  multiFiles?: boolean
}

export interface CmecloudClientOptions {
  accessKeyId: string
  secretAccessKey: string
  endpoint: string
  bucket?: string
  sslEnabled: boolean
}

export interface AliyunClientOptions {
  accessKeyId: string
  accessKeySecret: string
  endpoint: string
  bucket?: string
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
