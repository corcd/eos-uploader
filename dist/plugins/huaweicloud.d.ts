import { HuaweicloudClientOptions } from '../types';
export default class Huaweicloud {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: HuaweicloudClientOptions);
    get getClientInstance(): any | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
    close(): void;
}
