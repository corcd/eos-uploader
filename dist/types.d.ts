export declare enum Access {
    'private' = 0,
    'public-read' = 1,
    'public-read-write' = 2
}
export declare type ServiceProviders = 'aliyun' | 'cmecloud';
export interface UploaderOptions {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint: string;
    cname?: boolean;
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
    cname?: boolean;
}
export declare type IFileInfo = {
    fileHash: string;
    fileSuffix: string;
};
