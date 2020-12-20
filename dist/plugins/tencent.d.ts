import { TencentClientOptions } from '../types';
export default class Tencent {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: TencentClientOptions);
    get getClientInstance(): any | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
}
