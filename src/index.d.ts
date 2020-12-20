/*
 * @Author: Whzcorcd
 * @Date: 2020-12-21 00:33:39
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-12-21 00:51:54
 * @Description: file content
 */
import { WriteStream } from 'fs'
import { Stream } from 'stream'

export = COS
export as namespace COS

declare namespace COS {
  interface COSOptions {
    SecretId: string
    SecretKey: string
    FileParallelLimit?: number
    ChunkParallelLimit?: number
    ChunkSize?: number
    SliceSize?: number
    CopyChunkParallelLimit?: number
    CopyChunkSize?: number
    ProgressInterval?: number
    Protocol?: string
    ServiceDomain?: string
    Domain?: string
    UploadQueueSize?: number
    ForcePathStyle?: boolean
    UploadCheckContentMd5?: boolean
    Timeout?: number
    KeepAlive?: boolean
    StrictSsl?: boolean
    Proxy?: string
    getAuthorization?: (
      options: {
        Method: string
        Pathname: string
        Key: string
        Query: {
          [key: string]: string
        }
        Headers: {
          [key: string]: string
        }
      },
      cb: (data: {
        TmpSecretId: string
        TmpSecretKey: string
        XCosSecurityToken?: string
        StartTime?: string
        ExpiredTime?: string
      }) => void
    ) => void
  }

  interface BucketListOptions {
    Region: BucketRegion
  }

  interface COSResult {
    statusCode: number
    headers: {
      'content-type': string
      'content-length': string
      connection: string
      date: string
      server: string
      'x-cos-request-id': string
    }
  }

  interface COSError extends COSResult {
    error: string
  }

  interface BucketResult {
    Name: string
    Location: string
    CreationDate: string
  }

  interface BucketListResult extends COSResult {
    Owner: {
      ID: string
      DisplayName: string
    }
    Buckets: []
  }

  interface CreateBucketOptions {
    Bucket: string
    Region: BucketRegion
    ACL?: BucketACL
    GrantRead?: string
    GrantWrite?: string
    GrantReadAcp?: string
    GrantWriteAcp?: string
    GrantFullControl?: string
  }

  interface CreateBucketResult extends COSResult {
    Location: string
  }

  interface BucketOptions {
    Bucket: string
    Region: BucketRegion
  }

  interface BucketACLOptions {
    Bucket: string
    Region: BucketRegion
    ACL: BucketACL
    GrantRead?: string
    GrantWrite?: string
    GrantReadAcp?: string
    GrantWriteAcp?: string
    GrantFullControl?: string
    AccessControlPolicy?: object
  }

  interface BucketACLDetailResult extends COSResult {
    ACL: string
    GrantRead?: string
    GrantWrite?: string
    GrantReadAcp?: string
    GrantWriteAcp?: string
    GrantFullControl?: string
    Owner: {
      ID: string
      DisplayName: string
    }
    Grants: {
      Permission: string
      Grantee: {
        ID: string
        URI: string
        DisplayName: string
      }
    }[]
  }

  interface BucketContentsOptions {
    Bucket: string
    Region: BucketRegion
    Prefix?: string
    Delimiter?: string
    Marker?: string
    MaxKeys?: string
    EncodingType?: string
  }

  interface BucketObject {
    Key: string
    LastModified: string
    ETag: string
    Size: string
    Owner: {
      ID: string
      DisplayName: string
    }
    StorageClass: string
  }

  interface BucketContentsResult extends COSResult {
    Name: string
    Prefix: string
    Marker: string
    MaxKeys: string
    Delimiter: string
    IsTruncated: string
    NextMarker: string
    EncodingType: string
    CommonPrefixes: {
      Prefix: string
    }[]
    Contents: BucketObject[]
  }

  interface UploadBucketObjectOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    Body: Stream | Buffer | string
    CacheControl?: string
    ContentDisposition?: string
    ContentEncoding?: string
    ContentLength?: string
    ContentType?: string
    Expires?: string
    Expect?: string
    ACL?: BucketObjectACL
    GrantRead?: string
    GrantReadAcp?: string
    GrantWriteAcp?: string
    GrantFullControl?: string
    StorageClass?: string
    // TODO: 允许用户自定义的头部信息，将作为对象的元数据保存，大小限制2KB
    // x-cos-meta-*
    onTaskReady?: (taskId: string) => void
    onProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
  }

  interface UploadBucketObjectResult extends COSResult {
    ETag: string
    Location: string
    VersionId: string
  }

  interface DownloadObjectOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    Output: string | WriteStream
    ResponseContentType?: string
    ResponseContentLanguage?: string
    ResponseExpires?: string
    ResponseCacheControl?: string
    ResponseContentDisposition?: string
    ResponseContentEncoding?: string
    Range?: string
    IfModifiedSince?: string
    IfUnmodifiedSince?: string
    IfMatch?: string
    IfNoneMatch?: string
    VersionId?: string
    onProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
  }

  interface DownloadObjectResult extends COSResult {
    CacheControl: string
    ContentDisposition: string
    ContentEncoding: string
    Expires: string
    // TODO: 用户自定义的元数据
    // x-cos-meta-*
    'x-cos-storage-class': string
    NotModified: boolean
    ETag: string
    VersionId: string
    Body: Buffer
  }

  interface CopyObjectOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    CopySource: string
    ACL?: BucketObjectACL
    GrantRead?: string
    GrantWrite?: string
    GrantFullControl?: string
    MetadataDirective?: string
    CopySourceIfModifiedSince?: string
    CopySourceIfUnmodifiedSince?: string
    CopySourceIfMatch?: string
    CopySourceIfNoneMatch?: string
    // TODO: 其他自定义的文件头部
    // x-cos-meta-*
  }

  interface CopyObjectResult extends COSResult {
    ETag: string
    LastModified: string
    VersionId: string
  }

  interface ObjectCrossDomainOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    Origin: string
    AccessControlRequestMethod: string
    AccessControlRequestHeaders?: string
  }

  interface ObjectCrossDomainResult extends COSResult {
    AccessControlAllowOrigin: string
    AccessControlAllowMethods: string
    AccessControlAllowHeaders: string
    AccessControlExposeHeaders: string
    AccessControlMaxAge: string
    OptionsForbidden: boolean
  }

  interface DeleteObjectOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    VersionId?: string
  }

  interface DeleteMultipleObjectOptions {
    Bucket: string
    Region: BucketRegion
    Objects: {
      Key: string
    }[]
    Quiet?: boolean
    VersionId?: string
  }

  interface DeleteMultipleObjectResult extends COSResult {
    Deleted: {
      Key: string
      VersionId: string
      DeleteMarker: string
      DeleteMarkerVersionId: string
    }[]
    Error: {
      Key: string
      Code: string
      Message: string
    }[]
  }

  interface SliceUploadFileOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    FilePath: string
    SliceSize?: string
    AsyncLimit?: string
    StorageClass?: string
    onTaskReady?: (taskId: string) => void
    onHashProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
    onProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
  }

  interface SliceUploadFileResult extends COSResult {
    Location: string
    Bucket: string
    Key: string
    ETag: string
    VersionId: string
  }

  interface SliceCopyFileOptions {
    Bucket: string
    Region: BucketRegion
    Key: string
    CopySource: string
    ChunkSize: number
    SliceSize: number
    onProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
  }

  interface SliceCopyFileResult extends COSResult {
    Location: string
    Bucket: string
    Key: string
    ETag: string
    VersionId: string
  }

  interface MultiFileUploadOptions {
    files: {
      Bucket: string
      Region: BucketRegion
      Key: string
      FilePath: string
    }[]
    SliceSize: number
    onProgress?: (progressData: {
      loaded: number
      total: number
      speed: number
      percent: number
    }) => void
    onFileFinish?: (err: object | null, data: object, options: object) => void
  }

  interface MultiFileUploadResult extends COSResult {
    files: {
      error: object | null
      data: object
      options: object
    }[]
  }

  type BucketACL =
    | 'private'
    | 'public-read'
    | 'public-read-write'
    | 'authenticated-read'

  type BucketRegion =
    | 'ap-beijing-1'
    | 'ap-beijing'
    | 'ap-nanjing'
    | 'ap-shanghai'
    | 'ap-guangzhou'
    | 'ap-chengdu'
    | 'ap-chongqing'

  type BucketObjectACL =
    | 'default'
    | 'private'
    | 'public-read'
    | 'authenticated-read'
    | 'bucket-owner-read'
    | 'bucket-owner-full-control'

  interface COS {
    options: COSOptions
  }

  interface COSConstructor {
    new (options: COSOptions): COS
  }
}

declare class COS {
  constructor(options: COS.COSOptions)
  // 列出存储桶列表
  public getService(
    cb: (err: COS.COSError | null, data: COS.BucketListResult) => void
  ): void
  // 列出指定地域的存储桶列表。
  public getService(
    options: COS.BucketListOptions,
    cb: (err: COS.COSError | null, data: COS.BucketListResult) => void
  ): void
  // PUT Bucket 接口请求可以在指定账号下创建一个存储桶。
  public putBucket(
    options: COS.CreateBucketOptions,
    cb: (err: COS.COSError | null, data: COS.CreateBucketResult) => void
  ): void
  // 检索存储桶及其权限
  public headBucket(
    options: COS.BucketOptions,
    cb: (err: COS.COSError | null, data: COS.COSResult) => void
  ): void
  // 删除存储桶
  public deleteBucket(
    options: COS.BucketOptions,
    cb: (err: COS.COSError | null, data: COS.COSResult) => void
  ): void
  // 设置存储桶 ACL
  public putBucketAcl(
    options: COS.BucketACLOptions,
    cb: (err: COS.COSError | null, data: COS.COSResult) => void
  ): void
  // 查询存储桶 ACL
  public getBucketAcl(
    options: COS.BucketOptions,
    cb: (err: COS.COSError | null, data: COS.BucketACLDetailResult) => void
  ): void
  // 查询对象列表
  public getBucket(
    options: COS.BucketContentsOptions,
    cb: (err: COS.COSError | null, data: COS.BucketContentsResult) => void
  ): void
  // 简单上传对象
  public putObject(
    options: COS.UploadBucketObjectOptions,
    cb: (err: COS.COSError | null, data: COS.UploadBucketObjectResult) => void
  ): void
  // 下载对象
  public getObject(
    options: COS.DownloadObjectOptions,
    cb: (err: COS.COSError | null, data: COS.DownloadObjectResult) => void
  ): void
  // 复制对象
  public putObjectCopy(
    options: COS.CopyObjectOptions,
    cb: (err: COS.COSError | null, data: COS.CopyObjectResult) => void
  ): void
  // 预请求跨域配置
  public optionsObject(
    options: COS.ObjectCrossDomainOptions,
    cb: (err: COS.COSError | null, data: COS.ObjectCrossDomainResult) => void
  ): void
  // 删除单个对象
  public deleteObject(
    options: COS.DeleteObjectOptions,
    cb: (err: COS.COSError | null, data: COS.COSResult) => void
  ): void
  // 删除多个对象
  public deleteMultipleObject(
    options: COS.DeleteMultipleObjectOptions,
    cb: (err: COS.COSError | null, data: COS.DeleteMultipleObjectResult) => void
  ): void
  // 分块上传对象
  public sliceUploadFile(
    options: COS.SliceUploadFileOptions,
    cb: (err: COS.COSError | null, data: COS.SliceUploadFileResult) => void
  ): void
  // 复制对象 用于大文件
  public sliceCopyFile(
    options: COS.SliceCopyFileOptions,
    cb: (err: COS.COSError | null, data: COS.SliceCopyFileResult) => void
  ): void
  // 批量上传
  public uploadFiles(
    options: COS.MultiFileUploadOptions,
    cb: (err: COS.COSError | null, data: COS.MultiFileUploadResult) => void
  ): void
  // 获取任务列表
  public getTaskList(): any
  // 取消上传任务
  public cancelTask(taskId: string): void
  // 暂停上传任务
  public pauseTask(taskId: string): void
  // 重启上传任务
  public restartTask(taskId: string): void
  // 监听事件
  public on(eventName: string, cb: Function): void
}
