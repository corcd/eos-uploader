import AWS from 'aws-sdk';
import { AwsClientOptions } from '../types';
export default class Aws {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: AwsClientOptions);
    get getClientInstance(): AWS.S3 | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
}
