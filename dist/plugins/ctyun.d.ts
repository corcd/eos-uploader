import { CtyunClientOptions } from '../types';
export default class Ctyun {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: CtyunClientOptions);
    get getClientInstance(): any | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
    close(): void;
}
