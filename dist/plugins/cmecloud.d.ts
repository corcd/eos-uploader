import S3 from 'aws-sdk/clients/s3';
import { CmecloudClientOptions } from '../types';
export default class Cmecloud {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: CmecloudClientOptions);
    get getClientInstance(): S3 | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
}
