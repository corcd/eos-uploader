interface UploaderOptions {
    accessKeyId: string;
    secretAccessKey: string;
    endpoint: string;
    sslEnabled: boolean;
    multiFiles?: boolean;
}
declare class Uploader {
    private _s3?;
    private _bucket;
    private _options;
    private _input?;
    constructor(options: UploaderOptions);
    private _createUploader;
    private _removeUploader;
    private _formatFileName;
    private _singleUpload;
    private _multiUpload;
    openUploader(): Promise<any>;
}
export default Uploader;
