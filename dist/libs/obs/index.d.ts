export = ObsClient;
declare function ObsClient(param: any): void;
declare class ObsClient {
    constructor(param: any);
    getBucketDisPolicy(param: any, callback: any): void;
    setBucketDisPolicy(param: any, callback: any): void;
    deleteBucketDisPolicy(param: any, callback: any): void;
    putObject(param: any, callback: any): any;
    appendObject(param: any, callback: any): any;
    copyObject(param: any, callback: any): void;
    copyPart(param: any, callback: any): void;
    restoreObject(param: any, callback: any): void;
    initiateMultipartUpload(param: any, callback: any): void;
    uploadPart(param: any, callback: any): any;
    exec(funcName: any, param: any, callback: any): void;
    initLog(param: any): void;
    factory(param: any): void;
    log: import("./log") | undefined;
    util: import("./utils") | undefined;
    refresh(access_key_id: any, secret_access_key: any, security_token: any): void;
    createSignedUrlSync(param: any): {
        ActualSignedRequestHeaders: {};
        SignedUrl: string;
    };
    createV2SignedUrlSync(param: any): {
        ActualSignedRequestHeaders: {};
        SignedUrl: string;
    };
    createV4SignedUrlSync(param: any): {
        ActualSignedRequestHeaders: {
            Host: string;
        };
        SignedUrl: string;
    };
    createPostSignatureSync(param: any): {
        OriginPolicy: string;
        Policy: any;
        Algorithm: string;
        Credential: string;
        Date: string;
        Signature: any;
    } | {
        OriginPolicy: string;
        Policy: any;
        Signature: any;
        Token: string;
    };
    createV4PostSignatureSync(param: any): {
        OriginPolicy: string;
        Policy: any;
        Algorithm: string;
        Credential: string;
        Date: string;
        Signature: any;
    };
    enums: typeof import("./enums");
}
