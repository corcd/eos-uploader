import OSS from 'ali-oss';
import { AliyunClientOptions } from '../types';
export default class Aliyun {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: AliyunClientOptions);
    get getClientInstance(): OSS | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
}
