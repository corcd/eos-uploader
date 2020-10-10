import { ServiceProviders, UploaderOptions } from './types';
declare class Uploader {
    private _provider;
    private _options;
    private _input?;
    constructor(provider: ServiceProviders, options: UploaderOptions);
    private _createUploader;
    private _removeUploader;
    private _toggleUpload;
    openUploader(): Promise<any>;
    fillUploader(files: FileList): Promise<any>;
    dataUrlToFile(dataUrl: string, filename: string): File | null;
}
export default Uploader;
