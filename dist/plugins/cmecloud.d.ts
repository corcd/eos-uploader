import { CmecloudClientOptions } from '../types';
export default class Cmecloud {
    static readonly _bucket: string;
    private _client?;
    private _options;
    constructor(options: CmecloudClientOptions);
    get getClientInstance(): any | undefined;
    private _formatFileName;
    upload(files: FileList | null): Promise<any>;
    close(): void;
}
