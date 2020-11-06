export declare enum Access {
    'private' = 0,
    'public-read' = 1,
    'public-read-write' = 2
}
export declare type ServiceProviders = 'aliyun' | 'cmecloud' | 'aws';
export interface UploaderOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint?: string;
    region?: string;
    cname?: string;
    multiFiles?: boolean;
}
export interface CmecloudClientOptions {
    accessKeyId: string;
    secretAccessKey: string;
    endpoint: string;
    sslEnabled: boolean;
}
export interface AliyunClientOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint: string;
}
export interface AwsClientOptions {
    accessKeyId: string;
    secretAccessKey: string;
    endpoint?: string;
    region?: string;
    cname?: string;
}
export declare type IFileInfo = {
    fileHash: string;
    fileSuffix: string;
};
