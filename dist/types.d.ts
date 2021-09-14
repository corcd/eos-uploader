export declare enum Access {
    'private' = 0,
    'public-read' = 1,
    'public-read-write' = 2
}
export declare type ServiceProviders = 'aliyun' | 'tencent' | 'huaweicloud' | 'aws' | 'cmecloud';
export interface UploaderOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint?: string;
    region?: string;
    cname?: string;
    bucket?: string;
    accept?: string;
    multiFiles?: boolean;
}
export interface CmecloudClientOptions {
    access_key_id: string;
    secret_access_key: string;
    endpoint?: string;
    bucket?: string;
}
export interface HuaweicloudClientOptions {
    access_key_id: string;
    secret_access_key: string;
    server?: string;
    region?: string;
    bucket?: string;
}
export interface AliyunClientOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint: string;
    bucket?: string;
}
export interface TencentClientOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint?: string;
    region?: string;
    bucket?: string;
    cname?: string;
}
export interface AwsClientOptions {
    accessKeyId: string;
    secretAccessKey: string;
    endpoint?: string;
    region?: string;
    bucket?: string;
    cname?: string;
}
export declare type IFileInfo = {
    fileHash: string;
    fileSuffix: string;
};
