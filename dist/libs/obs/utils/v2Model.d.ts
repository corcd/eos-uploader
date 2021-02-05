declare const commonPrefixes: {
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            Prefix: {
                sentAs: string;
            };
        };
    };
};
declare const owner: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        ID: {
            sentAs: string;
        };
        Name: {
            sentAs: string;
        };
    };
};
declare const grants: {
    type: string;
    location: string;
    wrapper: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            Grantee: {
                data: {
                    xsiNamespace: string;
                    xsiType: string;
                };
                type: string;
                sentAs: string;
                parameters: {
                    Type: {
                        type: string;
                    };
                    ID: {
                        sentAs: string;
                    };
                    Name: {
                        sentAs: string;
                    };
                    URI: {
                        sentAs: string;
                        type: string;
                    };
                };
            };
            Permission: {
                sentAs: string;
            };
        };
    };
};
declare const loggingEnabled: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        TargetBucket: {
            sentAs: string;
        };
        TargetPrefix: {
            sentAs: string;
        };
        TargetGrants: {
            type: string;
            wrapper: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Grantee: {
                        data: {
                            xsiNamespace: string;
                            xsiType: string;
                        };
                        type: string;
                        sentAs: string;
                        parameters: {
                            Type: {
                                type: string;
                            };
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                            URI: {
                                sentAs: string;
                                type: string;
                            };
                        };
                    };
                    Permission: {
                        sentAs: string;
                    };
                };
            };
        };
    };
};
declare const rules: {
    required: boolean;
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            ID: {
                sentAs: string;
            };
            Prefix: {
                sentAs: string;
            };
            Status: {
                sentAs: string;
            };
            Transitions: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                    parameters: {
                        StorageClass: {
                            sentAs: string;
                            type: string;
                        };
                        Date: {
                            sentAs: string;
                        };
                        Days: {
                            type: string;
                            sentAs: string;
                        };
                    };
                };
            };
            Expiration: {
                type: string;
                sentAs: string;
                parameters: {
                    Date: {
                        sentAs: string;
                    };
                    Days: {
                        type: string;
                        sentAs: string;
                    };
                };
            };
            NoncurrentVersionTransitions: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                    parameters: {
                        StorageClass: {
                            sentAs: string;
                            type: string;
                        };
                        NoncurrentDays: {
                            type: string;
                            sentAs: string;
                        };
                    };
                };
            };
            NoncurrentVersionExpiration: {
                type: string;
                sentAs: string;
                parameters: {
                    NoncurrentDays: {
                        type: string;
                        sentAs: string;
                    };
                };
            };
        };
    };
};
declare const redirectAllRequestsTo: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        HostName: {
            sentAs: string;
        };
        Protocol: {
            sentAs: string;
        };
    };
};
declare const indexDocument: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        Suffix: {
            sentAs: string;
        };
    };
};
declare const errorDocument: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        Key: {
            sentAs: string;
        };
    };
};
declare const routingRules: {
    type: string;
    wrapper: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            Condition: {
                type: string;
                sentAs: string;
                parameters: {
                    HttpErrorCodeReturnedEquals: {
                        sentAs: string;
                    };
                    KeyPrefixEquals: {
                        sentAs: string;
                    };
                };
            };
            Redirect: {
                type: string;
                sentAs: string;
                parameters: {
                    HostName: {
                        sentAs: string;
                    };
                    HttpRedirectCode: {
                        sentAs: string;
                    };
                    Protocol: {
                        sentAs: string;
                    };
                    ReplaceKeyPrefixWith: {
                        sentAs: string;
                    };
                    ReplaceKeyWith: {
                        sentAs: string;
                    };
                };
            };
        };
    };
};
declare const corsRule: {
    required: boolean;
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            ID: {
                sentAs: string;
            };
            AllowedMethod: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                };
            };
            AllowedOrigin: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                };
            };
            AllowedHeader: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                };
            };
            MaxAgeSeconds: {
                type: string;
                sentAs: string;
            };
            ExposeHeader: {
                type: string;
                sentAs: string;
                items: {
                    type: string;
                };
            };
        };
    };
};
declare const topicConfiguration: {
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        location: string;
        parameters: {
            ID: {
                sentAs: string;
            };
            Filter: {
                type: string;
                parameters: {
                    FilterRules: {
                        wrapper: string;
                        type: string;
                        sentAs: string;
                        items: {
                            type: string;
                            parameters: {
                                Name: {};
                                Value: {};
                            };
                        };
                    };
                };
            };
            Topic: {};
            Event: {
                type: string;
                items: {
                    type: string;
                };
            };
        };
    };
};
declare const functionGraphConfiguration: {
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        location: string;
        parameters: {
            ID: {
                sentAs: string;
            };
            Filter: {
                type: string;
                parameters: {
                    FilterRules: {
                        wrapper: string;
                        type: string;
                        sentAs: string;
                        items: {
                            type: string;
                            parameters: {
                                Name: {};
                                Value: {};
                            };
                        };
                    };
                };
            };
            FunctionGraph: {};
            Event: {
                type: string;
                items: {
                    type: string;
                };
            };
        };
    };
};
declare const tagSet: {
    required: boolean;
    type: string;
    location: string;
    wrapper: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            Key: {
                sentAs: string;
            };
            Value: {
                sentAs: string;
            };
        };
    };
};
declare const replicationRules: {
    required: boolean;
    type: string;
    location: string;
    sentAs: string;
    items: {
        type: string;
        parameters: {
            ID: {
                sentAs: string;
            };
            Prefix: {
                sentAs: string;
            };
            Status: {
                sentAs: string;
            };
            Destination: {
                type: string;
                sentAs: string;
                parameters: {
                    Bucket: {
                        sentAs: string;
                        type: string;
                    };
                    StorageClass: {
                        sentAs: string;
                        type: string;
                    };
                };
            };
        };
    };
};
declare const initiator: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        ID: {
            sentAs: string;
        };
        Name: {
            sentAs: string;
        };
    };
};
declare const InventoryConfiguration: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        Id: {
            sentAs: string;
        };
        IsEnabled: {
            sentAs: string;
        };
        Filter: {
            type: string;
            sentAs: string;
            parameters: {
                Prefix: {
                    sentAs: string;
                };
            };
        };
        Destination: {
            type: string;
            sentAs: string;
            parameters: {
                Format: {
                    sentAs: string;
                };
                Bucket: {
                    sentAs: string;
                };
                Prefix: {
                    sentAs: string;
                };
                Encryption: {
                    type: string;
                    sentAs: string;
                    parameters: {
                        'SSE-KMS': {
                            type: string;
                            sentAs: string;
                            parameters: {
                                KeyId: {
                                    sentAs: string;
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        Schedule: {
            type: string;
            sentAs: string;
            parameters: {
                Frequency: {
                    sentAs: string;
                };
            };
        };
        IncludedObjectVersions: {
            sentAs: string;
        };
        OptionalFields: {
            type: string;
            location: string;
            sentAs: string;
            parameters: {
                Field: {
                    type: string;
                    sentAs: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
    };
};
declare const bucketEncryptionRule: {
    type: string;
    location: string;
    sentAs: string;
    parameters: {
        ApplyServerSideEncryptionByDefault: {
            type: string;
            sentAs: string;
            parameters: {
                SSEAlgorithm: {
                    sentAs: string;
                };
                KMSMasterKeyID: {
                    sentAs: string;
                };
            };
        };
    };
};
export declare namespace HeadBucket {
    export const httpMethod: string;
    export namespace parameters {
        export namespace Bucket {
            export const required: boolean;
            export const location: string;
        }
    }
}
export declare namespace HeadApiVersion {
    const httpMethod_1: string;
    export { httpMethod_1 as httpMethod };
    export const urlPath: string;
    export namespace parameters_1 {
        export namespace Bucket_1 {
            const location_1: string;
            export { location_1 as location };
        }
        export { Bucket_1 as Bucket };
    }
    export { parameters_1 as parameters };
}
export declare namespace HeadApiVersionOutput {
    export namespace parameters_2 {
        export namespace ApiVersion {
            const location_2: string;
            export { location_2 as location };
            export const sentAs: string;
        }
    }
    export { parameters_2 as parameters };
}
export declare namespace CreateBucket {
    const httpMethod_2: string;
    export { httpMethod_2 as httpMethod };
    export namespace data {
        export const xmlRoot: string;
    }
    export namespace parameters_3 {
        export namespace Bucket_2 {
            const required_1: boolean;
            export { required_1 as required };
            const location_3: string;
            export { location_3 as location };
        }
        export { Bucket_2 as Bucket };
        export namespace ACL {
            const location_4: string;
            export { location_4 as location };
            const sentAs_1: string;
            export { sentAs_1 as sentAs };
            export const withPrefix: boolean;
        }
        export namespace StorageType {
            const location_5: string;
            export { location_5 as location };
            const sentAs_2: string;
            export { sentAs_2 as sentAs };
        }
        export namespace FileInterface {
            const location_6: string;
            export { location_6 as location };
            const sentAs_3: string;
            export { sentAs_3 as sentAs };
            const withPrefix_1: boolean;
            export { withPrefix_1 as withPrefix };
        }
        export namespace MultiAz {
            const location_7: string;
            export { location_7 as location };
            const sentAs_4: string;
            export { sentAs_4 as sentAs };
        }
        export namespace GrantFullControl {
            const location_8: string;
            export { location_8 as location };
            const sentAs_5: string;
            export { sentAs_5 as sentAs };
            const withPrefix_2: boolean;
            export { withPrefix_2 as withPrefix };
        }
        export namespace GrantRead {
            const location_9: string;
            export { location_9 as location };
            const sentAs_6: string;
            export { sentAs_6 as sentAs };
            const withPrefix_3: boolean;
            export { withPrefix_3 as withPrefix };
        }
        export namespace GrantReadACP {
            const location_10: string;
            export { location_10 as location };
            const sentAs_7: string;
            export { sentAs_7 as sentAs };
            const withPrefix_4: boolean;
            export { withPrefix_4 as withPrefix };
        }
        export namespace GrantWrite {
            const location_11: string;
            export { location_11 as location };
            const sentAs_8: string;
            export { sentAs_8 as sentAs };
            const withPrefix_5: boolean;
            export { withPrefix_5 as withPrefix };
        }
        export namespace GrantWriteACP {
            const location_12: string;
            export { location_12 as location };
            const sentAs_9: string;
            export { sentAs_9 as sentAs };
            const withPrefix_6: boolean;
            export { withPrefix_6 as withPrefix };
        }
        export namespace ClusterType {
            const location_13: string;
            export { location_13 as location };
            const sentAs_10: string;
            export { sentAs_10 as sentAs };
            const withPrefix_7: boolean;
            export { withPrefix_7 as withPrefix };
        }
        export namespace MultiEnterprise {
            const location_14: string;
            export { location_14 as location };
            const sentAs_11: string;
            export { sentAs_11 as sentAs };
            const withPrefix_8: boolean;
            export { withPrefix_8 as withPrefix };
        }
        export namespace Location {
            const location_15: string;
            export { location_15 as location };
            const sentAs_12: string;
            export { sentAs_12 as sentAs };
        }
    }
    export { parameters_3 as parameters };
}
export declare namespace GetBucketMetadata {
    const httpMethod_3: string;
    export { httpMethod_3 as httpMethod };
    export namespace parameters_4 {
        export namespace Bucket_3 {
            const required_2: boolean;
            export { required_2 as required };
            const location_16: string;
            export { location_16 as location };
        }
        export { Bucket_3 as Bucket };
        export namespace Origin {
            const location_17: string;
            export { location_17 as location };
            const sentAs_13: string;
            export { sentAs_13 as sentAs };
        }
        export namespace RequestHeader {
            const location_18: string;
            export { location_18 as location };
            const sentAs_14: string;
            export { sentAs_14 as sentAs };
        }
    }
    export { parameters_4 as parameters };
}
export declare namespace GetBucketMetadataOutput {
    export namespace parameters_5 {
        export namespace StorageClass {
            const location_19: string;
            export { location_19 as location };
            const sentAs_15: string;
            export { sentAs_15 as sentAs };
        }
        export namespace ObsVersion {
            const location_20: string;
            export { location_20 as location };
            const sentAs_16: string;
            export { sentAs_16 as sentAs };
        }
        export namespace Location_1 {
            const location_21: string;
            export { location_21 as location };
            const sentAs_17: string;
            export { sentAs_17 as sentAs };
            const withPrefix_9: boolean;
            export { withPrefix_9 as withPrefix };
        }
        export { Location_1 as Location };
        export namespace FileInterface_1 {
            const location_22: string;
            export { location_22 as location };
            const sentAs_18: string;
            export { sentAs_18 as sentAs };
            const withPrefix_10: boolean;
            export { withPrefix_10 as withPrefix };
        }
        export { FileInterface_1 as FileInterface };
        export namespace MultiAz_1 {
            const location_23: string;
            export { location_23 as location };
            const sentAs_19: string;
            export { sentAs_19 as sentAs };
        }
        export { MultiAz_1 as MultiAz };
        export namespace MultiEnterprise_1 {
            const location_24: string;
            export { location_24 as location };
            const sentAs_20: string;
            export { sentAs_20 as sentAs };
            const withPrefix_11: boolean;
            export { withPrefix_11 as withPrefix };
        }
        export { MultiEnterprise_1 as MultiEnterprise };
        export namespace ClusterType_1 {
            const location_25: string;
            export { location_25 as location };
            const sentAs_21: string;
            export { sentAs_21 as sentAs };
            const withPrefix_12: boolean;
            export { withPrefix_12 as withPrefix };
        }
        export { ClusterType_1 as ClusterType };
        export namespace AllowOrigin {
            const location_26: string;
            export { location_26 as location };
            const sentAs_22: string;
            export { sentAs_22 as sentAs };
        }
        export namespace MaxAgeSeconds {
            const location_27: string;
            export { location_27 as location };
            const sentAs_23: string;
            export { sentAs_23 as sentAs };
        }
        export namespace ExposeHeader {
            const location_28: string;
            export { location_28 as location };
            const sentAs_24: string;
            export { sentAs_24 as sentAs };
        }
        export namespace AllowMethod {
            const location_29: string;
            export { location_29 as location };
            const sentAs_25: string;
            export { sentAs_25 as sentAs };
        }
        export namespace AllowHeader {
            const location_30: string;
            export { location_30 as location };
            const sentAs_26: string;
            export { sentAs_26 as sentAs };
        }
    }
    export { parameters_5 as parameters };
}
export declare namespace DeleteBucket {
    const httpMethod_4: string;
    export { httpMethod_4 as httpMethod };
    export namespace parameters_6 {
        export namespace Bucket_4 {
            const required_3: boolean;
            export { required_3 as required };
            const location_31: string;
            export { location_31 as location };
        }
        export { Bucket_4 as Bucket };
    }
    export { parameters_6 as parameters };
}
export declare namespace ListBuckets {
    const httpMethod_5: string;
    export { httpMethod_5 as httpMethod };
    export namespace parameters_7 {
        export namespace Type {
            const sentAs_27: string;
            export { sentAs_27 as sentAs };
            const location_32: string;
            export { location_32 as location };
        }
        export namespace Location_2 {
            const sentAs_28: string;
            export { sentAs_28 as sentAs };
            const location_33: string;
            export { location_33 as location };
            const withPrefix_13: boolean;
            export { withPrefix_13 as withPrefix };
        }
        export { Location_2 as Location };
    }
    export { parameters_7 as parameters };
}
export declare namespace ListBucketsOutput {
    const data_1: {
        type: string;
        xmlRoot: string;
    };
    export { data_1 as data };
    export namespace parameters_8 {
        export const Buckets: {
            location: string;
            sentAs: string;
            type: string;
            wrapper: string;
            items: {
                type: string;
                location: string;
                sentAs: string;
                parameters: {
                    Name: {
                        sentAs: string;
                    };
                    CreationDate: {
                        sentAs: string;
                    };
                    Location: {
                        sentAs: string;
                    };
                    ClusterType: {
                        sentAs: string;
                    };
                };
            };
        };
        export const Owner: {
            type: string;
            location: string;
            sentAs: string;
            parameters: {
                ID: {
                    sentAs: string;
                };
                DisplayName: {
                    sentAs: string;
                };
            };
        };
    }
    export { parameters_8 as parameters };
}
export declare namespace ListObjects {
    const httpMethod_6: string;
    export { httpMethod_6 as httpMethod };
    export namespace parameters_9 {
        export namespace Bucket_5 {
            const required_4: boolean;
            export { required_4 as required };
            const location_34: string;
            export { location_34 as location };
        }
        export { Bucket_5 as Bucket };
        export namespace Prefix {
            const location_35: string;
            export { location_35 as location };
            const sentAs_29: string;
            export { sentAs_29 as sentAs };
        }
        export namespace Marker {
            const location_36: string;
            export { location_36 as location };
            const sentAs_30: string;
            export { sentAs_30 as sentAs };
        }
        export const MaxKeys: {
            type: string;
            location: string;
            sentAs: string;
        };
        export namespace Delimiter {
            const location_37: string;
            export { location_37 as location };
            const sentAs_31: string;
            export { sentAs_31 as sentAs };
        }
    }
    export { parameters_9 as parameters };
}
export declare namespace ListObjectsOutput {
    const data_2: {
        type: string;
        xmlRoot: string;
    };
    export { data_2 as data };
    export namespace parameters_10 {
        export namespace Location_3 {
            const location_38: string;
            export { location_38 as location };
            const sentAs_32: string;
            export { sentAs_32 as sentAs };
            const withPrefix_14: boolean;
            export { withPrefix_14 as withPrefix };
        }
        export { Location_3 as Location };
        export namespace Bucket_6 {
            const location_39: string;
            export { location_39 as location };
            const sentAs_33: string;
            export { sentAs_33 as sentAs };
        }
        export { Bucket_6 as Bucket };
        export namespace Delimiter_1 {
            const location_40: string;
            export { location_40 as location };
            const sentAs_34: string;
            export { sentAs_34 as sentAs };
        }
        export { Delimiter_1 as Delimiter };
        export namespace IsTruncated {
            const location_41: string;
            export { location_41 as location };
            const sentAs_35: string;
            export { sentAs_35 as sentAs };
        }
        export namespace Prefix_1 {
            const location_42: string;
            export { location_42 as location };
            const sentAs_36: string;
            export { sentAs_36 as sentAs };
        }
        export { Prefix_1 as Prefix };
        export namespace Marker_1 {
            const location_43: string;
            export { location_43 as location };
            const sentAs_37: string;
            export { sentAs_37 as sentAs };
        }
        export { Marker_1 as Marker };
        export namespace NextMarker {
            const location_44: string;
            export { location_44 as location };
            const sentAs_38: string;
            export { sentAs_38 as sentAs };
        }
        export namespace MaxKeys_1 {
            const location_45: string;
            export { location_45 as location };
            const sentAs_39: string;
            export { sentAs_39 as sentAs };
        }
        export { MaxKeys_1 as MaxKeys };
        export const Contents: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    LastModified: {
                        sentAs: string;
                    };
                    ETag: {
                        sentAs: string;
                    };
                    Size: {
                        sentAs: string;
                    };
                    Type: {
                        sentAs: string;
                    };
                    StorageClass: {
                        sentAs: string;
                    };
                    Owner: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                        };
                    };
                };
            };
        };
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_10 as parameters };
}
export declare namespace ListVersions {
    const httpMethod_7: string;
    export { httpMethod_7 as httpMethod };
    const urlPath_1: string;
    export { urlPath_1 as urlPath };
    export namespace parameters_11 {
        export namespace Bucket_7 {
            const required_5: boolean;
            export { required_5 as required };
            const location_46: string;
            export { location_46 as location };
        }
        export { Bucket_7 as Bucket };
        export namespace Prefix_2 {
            const location_47: string;
            export { location_47 as location };
            const sentAs_40: string;
            export { sentAs_40 as sentAs };
        }
        export { Prefix_2 as Prefix };
        export namespace KeyMarker {
            const location_48: string;
            export { location_48 as location };
            const sentAs_41: string;
            export { sentAs_41 as sentAs };
        }
        const MaxKeys_2: {
            type: string;
            location: string;
            sentAs: string;
        };
        export { MaxKeys_2 as MaxKeys };
        export namespace Delimiter_2 {
            const location_49: string;
            export { location_49 as location };
            const sentAs_42: string;
            export { sentAs_42 as sentAs };
        }
        export { Delimiter_2 as Delimiter };
        export namespace VersionIdMarker {
            const location_50: string;
            export { location_50 as location };
            const sentAs_43: string;
            export { sentAs_43 as sentAs };
        }
    }
    export { parameters_11 as parameters };
}
export declare namespace ListVersionsOutput {
    const data_3: {
        type: string;
        xmlRoot: string;
    };
    export { data_3 as data };
    export namespace parameters_12 {
        export namespace Location_4 {
            const location_51: string;
            export { location_51 as location };
            const sentAs_44: string;
            export { sentAs_44 as sentAs };
            const withPrefix_15: boolean;
            export { withPrefix_15 as withPrefix };
        }
        export { Location_4 as Location };
        export namespace Bucket_8 {
            const location_52: string;
            export { location_52 as location };
            const sentAs_45: string;
            export { sentAs_45 as sentAs };
        }
        export { Bucket_8 as Bucket };
        export namespace Prefix_3 {
            const location_53: string;
            export { location_53 as location };
            const sentAs_46: string;
            export { sentAs_46 as sentAs };
        }
        export { Prefix_3 as Prefix };
        export namespace Delimiter_3 {
            const location_54: string;
            export { location_54 as location };
            const sentAs_47: string;
            export { sentAs_47 as sentAs };
        }
        export { Delimiter_3 as Delimiter };
        export namespace KeyMarker_1 {
            const location_55: string;
            export { location_55 as location };
            const sentAs_48: string;
            export { sentAs_48 as sentAs };
        }
        export { KeyMarker_1 as KeyMarker };
        export namespace VersionIdMarker_1 {
            const location_56: string;
            export { location_56 as location };
            const sentAs_49: string;
            export { sentAs_49 as sentAs };
        }
        export { VersionIdMarker_1 as VersionIdMarker };
        export namespace NextKeyMarker {
            const location_57: string;
            export { location_57 as location };
            const sentAs_50: string;
            export { sentAs_50 as sentAs };
        }
        export namespace NextVersionIdMarker {
            const location_58: string;
            export { location_58 as location };
            const sentAs_51: string;
            export { sentAs_51 as sentAs };
        }
        export namespace MaxKeys_3 {
            const location_59: string;
            export { location_59 as location };
            const sentAs_52: string;
            export { sentAs_52 as sentAs };
        }
        export { MaxKeys_3 as MaxKeys };
        export namespace IsTruncated_1 {
            const location_60: string;
            export { location_60 as location };
            const sentAs_53: string;
            export { sentAs_53 as sentAs };
        }
        export { IsTruncated_1 as IsTruncated };
        export const Versions: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    VersionId: {
                        sentAs: string;
                    };
                    IsLatest: {
                        sentAs: string;
                    };
                    LastModified: {
                        sentAs: string;
                    };
                    ETag: {
                        sentAs: string;
                    };
                    Size: {
                        sentAs: string;
                    };
                    Type: {
                        sentAs: string;
                    };
                    Owner: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                        };
                    };
                    StorageClass: {
                        sentAs: string;
                    };
                };
            };
        };
        export const DeleteMarkers: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    VersionId: {
                        sentAs: string;
                    };
                    IsLatest: {
                        sentAs: string;
                    };
                    LastModified: {
                        sentAs: string;
                    };
                    Owner: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                        };
                    };
                };
            };
        };
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_12 as parameters };
}
export declare namespace GetBucketLocation {
    const httpMethod_8: string;
    export { httpMethod_8 as httpMethod };
    const urlPath_2: string;
    export { urlPath_2 as urlPath };
    export namespace parameters_13 {
        export namespace Bucket_9 {
            const required_6: boolean;
            export { required_6 as required };
            const location_61: string;
            export { location_61 as location };
        }
        export { Bucket_9 as Bucket };
    }
    export { parameters_13 as parameters };
}
export declare namespace GetBucketLocationOutput {
    const data_4: {
        type: string;
        xmlRoot: string;
    };
    export { data_4 as data };
    export namespace parameters_14 {
        export namespace Location_5 {
            const location_62: string;
            export { location_62 as location };
            const sentAs_54: string;
            export { sentAs_54 as sentAs };
        }
        export { Location_5 as Location };
    }
    export { parameters_14 as parameters };
}
export declare namespace GetBucketStorageInfo {
    const httpMethod_9: string;
    export { httpMethod_9 as httpMethod };
    const urlPath_3: string;
    export { urlPath_3 as urlPath };
    export namespace parameters_15 {
        export namespace Bucket_10 {
            const required_7: boolean;
            export { required_7 as required };
            const location_63: string;
            export { location_63 as location };
        }
        export { Bucket_10 as Bucket };
    }
    export { parameters_15 as parameters };
}
export declare namespace GetBucketStorageInfoOutput {
    const data_5: {
        type: string;
        xmlRoot: string;
    };
    export { data_5 as data };
    export namespace parameters_16 {
        export namespace Size {
            const location_64: string;
            export { location_64 as location };
            const sentAs_55: string;
            export { sentAs_55 as sentAs };
        }
        export namespace ObjectNumber {
            const location_65: string;
            export { location_65 as location };
            const sentAs_56: string;
            export { sentAs_56 as sentAs };
        }
    }
    export { parameters_16 as parameters };
}
export declare namespace SetBucketQuota {
    const httpMethod_10: string;
    export { httpMethod_10 as httpMethod };
    const urlPath_4: string;
    export { urlPath_4 as urlPath };
    export namespace data_6 {
        const xmlRoot_1: string;
        export { xmlRoot_1 as xmlRoot };
    }
    export { data_6 as data };
    export namespace parameters_17 {
        export namespace Bucket_11 {
            const required_8: boolean;
            export { required_8 as required };
            const location_66: string;
            export { location_66 as location };
        }
        export { Bucket_11 as Bucket };
        export namespace StorageQuota {
            const required_9: boolean;
            export { required_9 as required };
            const location_67: string;
            export { location_67 as location };
            const sentAs_57: string;
            export { sentAs_57 as sentAs };
        }
    }
    export { parameters_17 as parameters };
}
export declare namespace GetBucketQuota {
    const httpMethod_11: string;
    export { httpMethod_11 as httpMethod };
    const urlPath_5: string;
    export { urlPath_5 as urlPath };
    export namespace parameters_18 {
        export namespace Bucket_12 {
            const required_10: boolean;
            export { required_10 as required };
            const location_68: string;
            export { location_68 as location };
        }
        export { Bucket_12 as Bucket };
    }
    export { parameters_18 as parameters };
}
export declare namespace GetBucketQuotaOutput {
    const data_7: {
        type: string;
        xmlRoot: string;
    };
    export { data_7 as data };
    export namespace parameters_19 {
        export namespace StorageQuota_1 {
            const location_69: string;
            export { location_69 as location };
            const sentAs_58: string;
            export { sentAs_58 as sentAs };
        }
        export { StorageQuota_1 as StorageQuota };
    }
    export { parameters_19 as parameters };
}
export declare namespace SetBucketAcl {
    const httpMethod_12: string;
    export { httpMethod_12 as httpMethod };
    const urlPath_6: string;
    export { urlPath_6 as urlPath };
    export namespace data_8 {
        const xmlRoot_2: string;
        export { xmlRoot_2 as xmlRoot };
    }
    export { data_8 as data };
    export namespace parameters_20 {
        export namespace Bucket_13 {
            const required_11: boolean;
            export { required_11 as required };
            const location_70: string;
            export { location_70 as location };
        }
        export { Bucket_13 as Bucket };
        const ACL_1: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_1 as ACL };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_20 as parameters };
}
export declare namespace GetBucketAcl {
    const httpMethod_13: string;
    export { httpMethod_13 as httpMethod };
    const urlPath_7: string;
    export { urlPath_7 as urlPath };
    export namespace parameters_21 {
        export namespace Bucket_14 {
            const required_12: boolean;
            export { required_12 as required };
            const location_71: string;
            export { location_71 as location };
        }
        export { Bucket_14 as Bucket };
    }
    export { parameters_21 as parameters };
}
export declare namespace GetBucketAclOutput {
    const data_9: {
        type: string;
        xmlRoot: string;
    };
    export { data_9 as data };
    export namespace parameters_22 {
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_22 as parameters };
}
export declare namespace SetBucketLoggingConfiguration {
    const httpMethod_14: string;
    export { httpMethod_14 as httpMethod };
    const urlPath_8: string;
    export { urlPath_8 as urlPath };
    export namespace data_10 {
        const xmlRoot_3: string;
        export { xmlRoot_3 as xmlRoot };
        export const xmlAllowEmpty: boolean;
    }
    export { data_10 as data };
    export namespace parameters_23 {
        export namespace Bucket_15 {
            const required_13: boolean;
            export { required_13 as required };
            const location_72: string;
            export { location_72 as location };
        }
        export { Bucket_15 as Bucket };
        export { loggingEnabled as LoggingEnabled };
    }
    export { parameters_23 as parameters };
}
export declare namespace GetBucketLoggingConfiguration {
    const httpMethod_15: string;
    export { httpMethod_15 as httpMethod };
    const urlPath_9: string;
    export { urlPath_9 as urlPath };
    export namespace parameters_24 {
        export namespace Bucket_16 {
            const required_14: boolean;
            export { required_14 as required };
            const location_73: string;
            export { location_73 as location };
        }
        export { Bucket_16 as Bucket };
    }
    export { parameters_24 as parameters };
}
export declare namespace GetBucketLoggingConfigurationOutput {
    const data_11: {
        type: string;
        xmlRoot: string;
    };
    export { data_11 as data };
    export namespace parameters_25 {
        export { loggingEnabled as LoggingEnabled };
    }
    export { parameters_25 as parameters };
}
export declare namespace SetBucketPolicy {
    const httpMethod_16: string;
    export { httpMethod_16 as httpMethod };
    const urlPath_10: string;
    export { urlPath_10 as urlPath };
    export namespace parameters_26 {
        export namespace Bucket_17 {
            const required_15: boolean;
            export { required_15 as required };
            const location_74: string;
            export { location_74 as location };
        }
        export { Bucket_17 as Bucket };
        export namespace Policy {
            const required_16: boolean;
            export { required_16 as required };
            const location_75: string;
            export { location_75 as location };
        }
    }
    export { parameters_26 as parameters };
}
export declare namespace GetBucketPolicy {
    const httpMethod_17: string;
    export { httpMethod_17 as httpMethod };
    const urlPath_11: string;
    export { urlPath_11 as urlPath };
    export namespace parameters_27 {
        export namespace Bucket_18 {
            const required_17: boolean;
            export { required_17 as required };
            const location_76: string;
            export { location_76 as location };
        }
        export { Bucket_18 as Bucket };
    }
    export { parameters_27 as parameters };
}
export declare namespace GetBucketPolicyOutput {
    const data_12: {
        type: string;
    };
    export { data_12 as data };
    export namespace parameters_28 {
        export namespace Policy_1 {
            const location_77: string;
            export { location_77 as location };
        }
        export { Policy_1 as Policy };
    }
    export { parameters_28 as parameters };
}
export declare namespace DeleteBucketPolicy {
    const httpMethod_18: string;
    export { httpMethod_18 as httpMethod };
    const urlPath_12: string;
    export { urlPath_12 as urlPath };
    export namespace parameters_29 {
        export namespace Bucket_19 {
            const required_18: boolean;
            export { required_18 as required };
            const location_78: string;
            export { location_78 as location };
        }
        export { Bucket_19 as Bucket };
    }
    export { parameters_29 as parameters };
}
export declare namespace SetBucketDisPolicy {
    const httpMethod_19: string;
    export { httpMethod_19 as httpMethod };
    export namespace parameters_30 {
        export namespace Bucket_20 {
            const required_19: boolean;
            export { required_19 as required };
            const location_79: string;
            export { location_79 as location };
        }
        export { Bucket_20 as Bucket };
        export namespace ApiPath {
            const location_80: string;
            export { location_80 as location };
        }
        export namespace OEFMarker {
            const location_81: string;
            export { location_81 as location };
            const sentAs_59: string;
            export { sentAs_59 as sentAs };
        }
        export namespace Rules {
            const required_20: boolean;
            export { required_20 as required };
            const location_82: string;
            export { location_82 as location };
        }
    }
    export { parameters_30 as parameters };
}
export declare namespace GetBucketDisPolicy {
    const httpMethod_20: string;
    export { httpMethod_20 as httpMethod };
    export namespace parameters_31 {
        export namespace Bucket_21 {
            const required_21: boolean;
            export { required_21 as required };
            const location_83: string;
            export { location_83 as location };
        }
        export { Bucket_21 as Bucket };
        export namespace ApiPath_1 {
            const location_84: string;
            export { location_84 as location };
        }
        export { ApiPath_1 as ApiPath };
        export namespace OEFMarker_1 {
            const location_85: string;
            export { location_85 as location };
            const sentAs_60: string;
            export { sentAs_60 as sentAs };
        }
        export { OEFMarker_1 as OEFMarker };
    }
    export { parameters_31 as parameters };
}
export declare namespace GetBucketDisPolicyOutput {
    const data_13: {
        type: string;
    };
    export { data_13 as data };
    export namespace parameters_32 {
        export namespace Rules_1 {
            const location_86: string;
            export { location_86 as location };
        }
        export { Rules_1 as Rules };
    }
    export { parameters_32 as parameters };
}
export declare namespace DeleteBucketDisPolicy {
    const httpMethod_21: string;
    export { httpMethod_21 as httpMethod };
    export namespace parameters_33 {
        export namespace Bucket_22 {
            const required_22: boolean;
            export { required_22 as required };
            const location_87: string;
            export { location_87 as location };
        }
        export { Bucket_22 as Bucket };
        export namespace ApiPath_2 {
            const location_88: string;
            export { location_88 as location };
        }
        export { ApiPath_2 as ApiPath };
        export namespace OEFMarker_2 {
            const location_89: string;
            export { location_89 as location };
            const sentAs_61: string;
            export { sentAs_61 as sentAs };
        }
        export { OEFMarker_2 as OEFMarker };
    }
    export { parameters_33 as parameters };
}
export declare namespace SetBucketLifecycleConfiguration {
    const httpMethod_22: string;
    export { httpMethod_22 as httpMethod };
    const urlPath_13: string;
    export { urlPath_13 as urlPath };
    export namespace data_14 {
        const xmlRoot_4: string;
        export { xmlRoot_4 as xmlRoot };
        export const md5: boolean;
    }
    export { data_14 as data };
    export namespace parameters_34 {
        export namespace Bucket_23 {
            const required_23: boolean;
            export { required_23 as required };
            const location_90: string;
            export { location_90 as location };
        }
        export { Bucket_23 as Bucket };
        export { rules as Rules };
    }
    export { parameters_34 as parameters };
}
export declare namespace GetBucketLifecycleConfiguration {
    const httpMethod_23: string;
    export { httpMethod_23 as httpMethod };
    const urlPath_14: string;
    export { urlPath_14 as urlPath };
    export namespace parameters_35 {
        export namespace Bucket_24 {
            const required_24: boolean;
            export { required_24 as required };
            const location_91: string;
            export { location_91 as location };
        }
        export { Bucket_24 as Bucket };
    }
    export { parameters_35 as parameters };
}
export declare namespace GetBucketLifecycleConfigurationOutput {
    const data_15: {
        type: string;
        xmlRoot: string;
    };
    export { data_15 as data };
    export namespace parameters_36 {
        export { rules as Rules };
    }
    export { parameters_36 as parameters };
}
export declare namespace DeleteBucketLifecycleConfiguration {
    const httpMethod_24: string;
    export { httpMethod_24 as httpMethod };
    const urlPath_15: string;
    export { urlPath_15 as urlPath };
    export namespace parameters_37 {
        export namespace Bucket_25 {
            const required_25: boolean;
            export { required_25 as required };
            const location_92: string;
            export { location_92 as location };
        }
        export { Bucket_25 as Bucket };
    }
    export { parameters_37 as parameters };
}
export declare namespace SetBucketWebsiteConfiguration {
    const httpMethod_25: string;
    export { httpMethod_25 as httpMethod };
    const urlPath_16: string;
    export { urlPath_16 as urlPath };
    export namespace data_16 {
        const xmlRoot_5: string;
        export { xmlRoot_5 as xmlRoot };
    }
    export { data_16 as data };
    export namespace parameters_38 {
        export namespace Bucket_26 {
            const required_26: boolean;
            export { required_26 as required };
            const location_93: string;
            export { location_93 as location };
        }
        export { Bucket_26 as Bucket };
        export { redirectAllRequestsTo as RedirectAllRequestsTo };
        export { indexDocument as IndexDocument };
        export { errorDocument as ErrorDocument };
        export { routingRules as RoutingRules };
    }
    export { parameters_38 as parameters };
}
export declare namespace GetBucketWebsiteConfiguration {
    const httpMethod_26: string;
    export { httpMethod_26 as httpMethod };
    const urlPath_17: string;
    export { urlPath_17 as urlPath };
    export namespace parameters_39 {
        export namespace Bucket_27 {
            const required_27: boolean;
            export { required_27 as required };
            const location_94: string;
            export { location_94 as location };
        }
        export { Bucket_27 as Bucket };
    }
    export { parameters_39 as parameters };
}
export declare namespace GetBucketWebsiteConfigurationOutput {
    const data_17: {
        type: string;
        xmlRoot: string;
    };
    export { data_17 as data };
    export namespace parameters_40 {
        export { redirectAllRequestsTo as RedirectAllRequestsTo };
        export { indexDocument as IndexDocument };
        export { errorDocument as ErrorDocument };
        export { routingRules as RoutingRules };
    }
    export { parameters_40 as parameters };
}
export declare namespace DeleteBucketWebsiteConfiguration {
    const httpMethod_27: string;
    export { httpMethod_27 as httpMethod };
    const urlPath_18: string;
    export { urlPath_18 as urlPath };
    export namespace parameters_41 {
        export namespace Bucket_28 {
            const required_28: boolean;
            export { required_28 as required };
            const location_95: string;
            export { location_95 as location };
        }
        export { Bucket_28 as Bucket };
    }
    export { parameters_41 as parameters };
}
export declare namespace SetBucketVersioningConfiguration {
    const httpMethod_28: string;
    export { httpMethod_28 as httpMethod };
    const urlPath_19: string;
    export { urlPath_19 as urlPath };
    export namespace data_18 {
        const xmlRoot_6: string;
        export { xmlRoot_6 as xmlRoot };
    }
    export { data_18 as data };
    export namespace parameters_42 {
        export namespace Bucket_29 {
            const required_29: boolean;
            export { required_29 as required };
            const location_96: string;
            export { location_96 as location };
        }
        export { Bucket_29 as Bucket };
        export namespace VersionStatus {
            const required_30: boolean;
            export { required_30 as required };
            const location_97: string;
            export { location_97 as location };
            const sentAs_62: string;
            export { sentAs_62 as sentAs };
        }
    }
    export { parameters_42 as parameters };
}
export declare namespace GetBucketVersioningConfiguration {
    const httpMethod_29: string;
    export { httpMethod_29 as httpMethod };
    const urlPath_20: string;
    export { urlPath_20 as urlPath };
    export namespace parameters_43 {
        export namespace Bucket_30 {
            const required_31: boolean;
            export { required_31 as required };
            const location_98: string;
            export { location_98 as location };
        }
        export { Bucket_30 as Bucket };
    }
    export { parameters_43 as parameters };
}
export declare namespace GetBucketVersioningConfigurationOutput {
    const data_19: {
        type: string;
        xmlRoot: string;
    };
    export { data_19 as data };
    export namespace parameters_44 {
        export namespace VersionStatus_1 {
            const location_99: string;
            export { location_99 as location };
            const sentAs_63: string;
            export { sentAs_63 as sentAs };
        }
        export { VersionStatus_1 as VersionStatus };
    }
    export { parameters_44 as parameters };
}
export declare namespace SetBucketCors {
    const httpMethod_30: string;
    export { httpMethod_30 as httpMethod };
    const urlPath_21: string;
    export { urlPath_21 as urlPath };
    export namespace data_20 {
        const xmlRoot_7: string;
        export { xmlRoot_7 as xmlRoot };
        const md5_1: boolean;
        export { md5_1 as md5 };
    }
    export { data_20 as data };
    export namespace parameters_45 {
        export namespace Bucket_31 {
            const required_32: boolean;
            export { required_32 as required };
            const location_100: string;
            export { location_100 as location };
        }
        export { Bucket_31 as Bucket };
        export { corsRule as CorsRules };
    }
    export { parameters_45 as parameters };
}
export declare namespace GetBucketCors {
    const httpMethod_31: string;
    export { httpMethod_31 as httpMethod };
    const urlPath_22: string;
    export { urlPath_22 as urlPath };
    export namespace parameters_46 {
        export namespace Bucket_32 {
            const required_33: boolean;
            export { required_33 as required };
            const location_101: string;
            export { location_101 as location };
        }
        export { Bucket_32 as Bucket };
    }
    export { parameters_46 as parameters };
}
export declare namespace GetBucketCorsOutput {
    const data_21: {
        type: string;
        xmlRoot: string;
    };
    export { data_21 as data };
    export namespace parameters_47 {
        export { corsRule as CorsRules };
    }
    export { parameters_47 as parameters };
}
export declare namespace DeleteBucketCors {
    const httpMethod_32: string;
    export { httpMethod_32 as httpMethod };
    const urlPath_23: string;
    export { urlPath_23 as urlPath };
    export namespace parameters_48 {
        export namespace Bucket_33 {
            const required_34: boolean;
            export { required_34 as required };
            const location_102: string;
            export { location_102 as location };
        }
        export { Bucket_33 as Bucket };
    }
    export { parameters_48 as parameters };
}
export declare namespace SetBucketNotification {
    const httpMethod_33: string;
    export { httpMethod_33 as httpMethod };
    const urlPath_24: string;
    export { urlPath_24 as urlPath };
    export namespace data_22 {
        const xmlRoot_8: string;
        export { xmlRoot_8 as xmlRoot };
        const xmlAllowEmpty_1: boolean;
        export { xmlAllowEmpty_1 as xmlAllowEmpty };
    }
    export { data_22 as data };
    export namespace parameters_49 {
        export namespace Bucket_34 {
            const required_35: boolean;
            export { required_35 as required };
            const location_103: string;
            export { location_103 as location };
        }
        export { Bucket_34 as Bucket };
        export { topicConfiguration as TopicConfigurations };
        export { functionGraphConfiguration as FunctionGraphConfigurations };
    }
    export { parameters_49 as parameters };
}
export declare namespace GetBucketNotification {
    const httpMethod_34: string;
    export { httpMethod_34 as httpMethod };
    const urlPath_25: string;
    export { urlPath_25 as urlPath };
    export namespace parameters_50 {
        export namespace Bucket_35 {
            const required_36: boolean;
            export { required_36 as required };
            const location_104: string;
            export { location_104 as location };
        }
        export { Bucket_35 as Bucket };
    }
    export { parameters_50 as parameters };
}
export declare namespace GetBucketNotificationOutput {
    const data_23: {
        type: string;
        xmlRoot: string;
    };
    export { data_23 as data };
    export namespace parameters_51 {
        export { topicConfiguration as TopicConfigurations };
        export { functionGraphConfiguration as FunctionGraphConfigurations };
    }
    export { parameters_51 as parameters };
}
export declare namespace SetBucketTagging {
    const httpMethod_35: string;
    export { httpMethod_35 as httpMethod };
    const urlPath_26: string;
    export { urlPath_26 as urlPath };
    export namespace data_24 {
        const xmlRoot_9: string;
        export { xmlRoot_9 as xmlRoot };
        const md5_2: boolean;
        export { md5_2 as md5 };
    }
    export { data_24 as data };
    export namespace parameters_52 {
        export namespace Bucket_36 {
            const required_37: boolean;
            export { required_37 as required };
            const location_105: string;
            export { location_105 as location };
        }
        export { Bucket_36 as Bucket };
        export { tagSet as Tags };
    }
    export { parameters_52 as parameters };
}
export declare namespace DeleteBucketTagging {
    const httpMethod_36: string;
    export { httpMethod_36 as httpMethod };
    const urlPath_27: string;
    export { urlPath_27 as urlPath };
    export namespace parameters_53 {
        export namespace Bucket_37 {
            const required_38: boolean;
            export { required_38 as required };
            const location_106: string;
            export { location_106 as location };
        }
        export { Bucket_37 as Bucket };
    }
    export { parameters_53 as parameters };
}
export declare namespace GetBucketTagging {
    const httpMethod_37: string;
    export { httpMethod_37 as httpMethod };
    const urlPath_28: string;
    export { urlPath_28 as urlPath };
    export namespace parameters_54 {
        export namespace Bucket_38 {
            const required_39: boolean;
            export { required_39 as required };
            const location_107: string;
            export { location_107 as location };
        }
        export { Bucket_38 as Bucket };
    }
    export { parameters_54 as parameters };
}
export declare namespace GetBucketTaggingOutput {
    const data_25: {
        type: string;
        xmlRoot: string;
    };
    export { data_25 as data };
    export namespace parameters_55 {
        export { tagSet as Tags };
    }
    export { parameters_55 as parameters };
}
export declare namespace SetBucketStoragePolicy {
    const httpMethod_38: string;
    export { httpMethod_38 as httpMethod };
    const urlPath_29: string;
    export { urlPath_29 as urlPath };
    export namespace data_26 {
        const xmlRoot_10: string;
        export { xmlRoot_10 as xmlRoot };
    }
    export { data_26 as data };
    export namespace parameters_56 {
        export namespace Bucket_39 {
            const required_40: boolean;
            export { required_40 as required };
            const location_108: string;
            export { location_108 as location };
        }
        export { Bucket_39 as Bucket };
        const StorageClass_1: {
            required: boolean;
            location: string;
            type: string;
            sentAs: string;
        };
        export { StorageClass_1 as StorageClass };
    }
    export { parameters_56 as parameters };
}
export declare namespace GetBucketStoragePolicy {
    const httpMethod_39: string;
    export { httpMethod_39 as httpMethod };
    const urlPath_30: string;
    export { urlPath_30 as urlPath };
    export namespace parameters_57 {
        export namespace Bucket_40 {
            const required_41: boolean;
            export { required_41 as required };
            const location_109: string;
            export { location_109 as location };
        }
        export { Bucket_40 as Bucket };
    }
    export { parameters_57 as parameters };
}
export declare namespace GetBucketStoragePolicyOutput {
    const data_27: {
        type: string;
        xmlRoot: string;
    };
    export { data_27 as data };
    export namespace parameters_58 {
        const StorageClass_2: {
            location: string;
            type: string;
            sentAs: string;
        };
        export { StorageClass_2 as StorageClass };
    }
    export { parameters_58 as parameters };
}
export declare namespace SetBucketReplication {
    const httpMethod_40: string;
    export { httpMethod_40 as httpMethod };
    const urlPath_31: string;
    export { urlPath_31 as urlPath };
    export namespace data_28 {
        const xmlRoot_11: string;
        export { xmlRoot_11 as xmlRoot };
        const md5_3: boolean;
        export { md5_3 as md5 };
    }
    export { data_28 as data };
    export namespace parameters_59 {
        export namespace Bucket_41 {
            const required_42: boolean;
            export { required_42 as required };
            const location_110: string;
            export { location_110 as location };
        }
        export { Bucket_41 as Bucket };
        export namespace Agency {
            const location_111: string;
            export { location_111 as location };
            const sentAs_64: string;
            export { sentAs_64 as sentAs };
        }
        export { replicationRules as Rules };
    }
    export { parameters_59 as parameters };
}
export declare namespace GetBucketReplication {
    const httpMethod_41: string;
    export { httpMethod_41 as httpMethod };
    const urlPath_32: string;
    export { urlPath_32 as urlPath };
    export namespace parameters_60 {
        export namespace Bucket_42 {
            const required_43: boolean;
            export { required_43 as required };
            const location_112: string;
            export { location_112 as location };
        }
        export { Bucket_42 as Bucket };
    }
    export { parameters_60 as parameters };
}
export declare namespace GetBucketReplicationOutput {
    const data_29: {
        type: string;
        xmlRoot: string;
    };
    export { data_29 as data };
    export namespace parameters_61 {
        export namespace Agency_1 {
            const location_113: string;
            export { location_113 as location };
            const sentAs_65: string;
            export { sentAs_65 as sentAs };
        }
        export { Agency_1 as Agency };
        export { replicationRules as Rules };
    }
    export { parameters_61 as parameters };
}
export declare namespace DeleteBucketReplication {
    const httpMethod_42: string;
    export { httpMethod_42 as httpMethod };
    const urlPath_33: string;
    export { urlPath_33 as urlPath };
    export namespace parameters_62 {
        export namespace Bucket_43 {
            const required_44: boolean;
            export { required_44 as required };
            const location_114: string;
            export { location_114 as location };
        }
        export { Bucket_43 as Bucket };
    }
    export { parameters_62 as parameters };
}
export declare namespace PutObject {
    const httpMethod_43: string;
    export { httpMethod_43 as httpMethod };
    export namespace parameters_63 {
        export namespace Bucket_44 {
            const required_45: boolean;
            export { required_45 as required };
            const location_115: string;
            export { location_115 as location };
        }
        export { Bucket_44 as Bucket };
        export namespace Key {
            const required_46: boolean;
            export { required_46 as required };
            const location_116: string;
            export { location_116 as location };
        }
        export namespace ContentMD5 {
            const location_117: string;
            export { location_117 as location };
            const sentAs_66: string;
            export { sentAs_66 as sentAs };
        }
        export namespace ContentType {
            const location_118: string;
            export { location_118 as location };
            const sentAs_67: string;
            export { sentAs_67 as sentAs };
        }
        export const Offset: {
            type: string;
        };
        export const ContentLength: {
            location: string;
            sentAs: string;
            type: string;
        };
        const ACL_2: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_2 as ACL };
        export namespace GrantRead_1 {
            const location_119: string;
            export { location_119 as location };
            const sentAs_68: string;
            export { sentAs_68 as sentAs };
            const withPrefix_16: boolean;
            export { withPrefix_16 as withPrefix };
        }
        export { GrantRead_1 as GrantRead };
        export namespace GrantReadAcp {
            const location_120: string;
            export { location_120 as location };
            const sentAs_69: string;
            export { sentAs_69 as sentAs };
            const withPrefix_17: boolean;
            export { withPrefix_17 as withPrefix };
        }
        export namespace GrantWriteAcp {
            const location_121: string;
            export { location_121 as location };
            const sentAs_70: string;
            export { sentAs_70 as sentAs };
            const withPrefix_18: boolean;
            export { withPrefix_18 as withPrefix };
        }
        export namespace GrantFullControl_1 {
            const location_122: string;
            export { location_122 as location };
            const sentAs_71: string;
            export { sentAs_71 as sentAs };
            const withPrefix_19: boolean;
            export { withPrefix_19 as withPrefix };
        }
        export { GrantFullControl_1 as GrantFullControl };
        const StorageClass_3: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { StorageClass_3 as StorageClass };
        export const Metadata: {
            type: string;
            location: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export namespace WebsiteRedirectLocation {
            const location_123: string;
            export { location_123 as location };
            const sentAs_72: string;
            export { sentAs_72 as sentAs };
            const withPrefix_20: boolean;
            export { withPrefix_20 as withPrefix };
        }
        export const Expires: {
            location: string;
            sentAs: string;
            type: string;
        };
        export const SseKms: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export namespace SseKmsKey {
            const location_124: string;
            export { location_124 as location };
            const sentAs_73: string;
            export { sentAs_73 as sentAs };
            const withPrefix_21: boolean;
            export { withPrefix_21 as withPrefix };
        }
        export namespace SseC {
            const location_125: string;
            export { location_125 as location };
            const sentAs_74: string;
            export { sentAs_74 as sentAs };
            const withPrefix_22: boolean;
            export { withPrefix_22 as withPrefix };
        }
        export const SseCKey: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export namespace Body {
            const location_126: string;
            export { location_126 as location };
        }
        export const SourceFile: {
            type: string;
        };
        export const ProgressCallback: {
            type: string;
        };
    }
    export { parameters_63 as parameters };
}
export declare namespace PutObjectOutput {
    export namespace parameters_64 {
        export namespace ETag {
            const location_127: string;
            export { location_127 as location };
            const sentAs_75: string;
            export { sentAs_75 as sentAs };
        }
        export namespace VersionId {
            const location_128: string;
            export { location_128 as location };
            const sentAs_76: string;
            export { sentAs_76 as sentAs };
            const withPrefix_23: boolean;
            export { withPrefix_23 as withPrefix };
        }
        export namespace StorageClass_4 {
            const location_129: string;
            export { location_129 as location };
            const sentAs_77: string;
            export { sentAs_77 as sentAs };
            const withPrefix_24: boolean;
            export { withPrefix_24 as withPrefix };
        }
        export { StorageClass_4 as StorageClass };
        export namespace SseKms_1 {
            const location_130: string;
            export { location_130 as location };
            const sentAs_78: string;
            export { sentAs_78 as sentAs };
            const withPrefix_25: boolean;
            export { withPrefix_25 as withPrefix };
        }
        export { SseKms_1 as SseKms };
        export namespace SseKmsKey_1 {
            const location_131: string;
            export { location_131 as location };
            const sentAs_79: string;
            export { sentAs_79 as sentAs };
            const withPrefix_26: boolean;
            export { withPrefix_26 as withPrefix };
        }
        export { SseKmsKey_1 as SseKmsKey };
        export namespace SseC_1 {
            const location_132: string;
            export { location_132 as location };
            const sentAs_80: string;
            export { sentAs_80 as sentAs };
            const withPrefix_27: boolean;
            export { withPrefix_27 as withPrefix };
        }
        export { SseC_1 as SseC };
        export namespace SseCKeyMd5 {
            const location_133: string;
            export { location_133 as location };
            const sentAs_81: string;
            export { sentAs_81 as sentAs };
            const withPrefix_28: boolean;
            export { withPrefix_28 as withPrefix };
        }
    }
    export { parameters_64 as parameters };
}
export declare namespace AppendObject {
    const httpMethod_44: string;
    export { httpMethod_44 as httpMethod };
    const urlPath_34: string;
    export { urlPath_34 as urlPath };
    export namespace parameters_65 {
        export namespace Bucket_45 {
            const required_47: boolean;
            export { required_47 as required };
            const location_134: string;
            export { location_134 as location };
        }
        export { Bucket_45 as Bucket };
        export namespace Key_1 {
            const required_48: boolean;
            export { required_48 as required };
            const location_135: string;
            export { location_135 as location };
        }
        export { Key_1 as Key };
        export const Position: {
            location: string;
            sentAs: string;
            type: string;
        };
        export namespace ContentMD5_1 {
            const location_136: string;
            export { location_136 as location };
            const sentAs_82: string;
            export { sentAs_82 as sentAs };
        }
        export { ContentMD5_1 as ContentMD5 };
        const Offset_1: {
            type: string;
        };
        export { Offset_1 as Offset };
        export namespace ContentType_1 {
            const location_137: string;
            export { location_137 as location };
            const sentAs_83: string;
            export { sentAs_83 as sentAs };
        }
        export { ContentType_1 as ContentType };
        const ContentLength_1: {
            location: string;
            sentAs: string;
            type: string;
        };
        export { ContentLength_1 as ContentLength };
        const ACL_3: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_3 as ACL };
        export namespace GrantRead_2 {
            const location_138: string;
            export { location_138 as location };
            const sentAs_84: string;
            export { sentAs_84 as sentAs };
            const withPrefix_29: boolean;
            export { withPrefix_29 as withPrefix };
        }
        export { GrantRead_2 as GrantRead };
        export namespace GrantReadAcp_1 {
            const location_139: string;
            export { location_139 as location };
            const sentAs_85: string;
            export { sentAs_85 as sentAs };
            const withPrefix_30: boolean;
            export { withPrefix_30 as withPrefix };
        }
        export { GrantReadAcp_1 as GrantReadAcp };
        export namespace GrantWriteAcp_1 {
            const location_140: string;
            export { location_140 as location };
            const sentAs_86: string;
            export { sentAs_86 as sentAs };
            const withPrefix_31: boolean;
            export { withPrefix_31 as withPrefix };
        }
        export { GrantWriteAcp_1 as GrantWriteAcp };
        export namespace GrantFullControl_2 {
            const location_141: string;
            export { location_141 as location };
            const sentAs_87: string;
            export { sentAs_87 as sentAs };
            const withPrefix_32: boolean;
            export { withPrefix_32 as withPrefix };
        }
        export { GrantFullControl_2 as GrantFullControl };
        const StorageClass_5: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { StorageClass_5 as StorageClass };
        const Metadata_1: {
            type: string;
            location: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_1 as Metadata };
        export namespace WebsiteRedirectLocation_1 {
            const location_142: string;
            export { location_142 as location };
            const sentAs_88: string;
            export { sentAs_88 as sentAs };
            const withPrefix_33: boolean;
            export { withPrefix_33 as withPrefix };
        }
        export { WebsiteRedirectLocation_1 as WebsiteRedirectLocation };
        const Expires_1: {
            location: string;
            sentAs: string;
            type: string;
        };
        export { Expires_1 as Expires };
        const SseKms_2: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { SseKms_2 as SseKms };
        export namespace SseKmsKey_2 {
            const location_143: string;
            export { location_143 as location };
            const sentAs_89: string;
            export { sentAs_89 as sentAs };
            const withPrefix_34: boolean;
            export { withPrefix_34 as withPrefix };
        }
        export { SseKmsKey_2 as SseKmsKey };
        export namespace SseC_2 {
            const location_144: string;
            export { location_144 as location };
            const sentAs_90: string;
            export { sentAs_90 as sentAs };
            const withPrefix_35: boolean;
            export { withPrefix_35 as withPrefix };
        }
        export { SseC_2 as SseC };
        const SseCKey_1: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_1 as SseCKey };
        export namespace Body_1 {
            const location_145: string;
            export { location_145 as location };
        }
        export { Body_1 as Body };
        const SourceFile_1: {
            type: string;
        };
        export { SourceFile_1 as SourceFile };
        const ProgressCallback_1: {
            type: string;
        };
        export { ProgressCallback_1 as ProgressCallback };
    }
    export { parameters_65 as parameters };
}
export declare namespace AppendObjectOutput {
    export namespace parameters_66 {
        export namespace ETag_1 {
            const location_146: string;
            export { location_146 as location };
            const sentAs_91: string;
            export { sentAs_91 as sentAs };
        }
        export { ETag_1 as ETag };
        export namespace NextPosition {
            const location_147: string;
            export { location_147 as location };
            const sentAs_92: string;
            export { sentAs_92 as sentAs };
        }
        export namespace StorageClass_6 {
            const location_148: string;
            export { location_148 as location };
            const sentAs_93: string;
            export { sentAs_93 as sentAs };
            const withPrefix_36: boolean;
            export { withPrefix_36 as withPrefix };
        }
        export { StorageClass_6 as StorageClass };
        export namespace SseKms_3 {
            const location_149: string;
            export { location_149 as location };
            const sentAs_94: string;
            export { sentAs_94 as sentAs };
            const withPrefix_37: boolean;
            export { withPrefix_37 as withPrefix };
        }
        export { SseKms_3 as SseKms };
        export namespace SseKmsKey_3 {
            const location_150: string;
            export { location_150 as location };
            const sentAs_95: string;
            export { sentAs_95 as sentAs };
            const withPrefix_38: boolean;
            export { withPrefix_38 as withPrefix };
        }
        export { SseKmsKey_3 as SseKmsKey };
        export namespace SseC_3 {
            const location_151: string;
            export { location_151 as location };
            const sentAs_96: string;
            export { sentAs_96 as sentAs };
            const withPrefix_39: boolean;
            export { withPrefix_39 as withPrefix };
        }
        export { SseC_3 as SseC };
        export namespace SseCKeyMd5_1 {
            const location_152: string;
            export { location_152 as location };
            const sentAs_97: string;
            export { sentAs_97 as sentAs };
            const withPrefix_40: boolean;
            export { withPrefix_40 as withPrefix };
        }
        export { SseCKeyMd5_1 as SseCKeyMd5 };
    }
    export { parameters_66 as parameters };
}
export declare namespace GetObject {
    const httpMethod_45: string;
    export { httpMethod_45 as httpMethod };
    export namespace parameters_67 {
        export namespace Bucket_46 {
            const required_49: boolean;
            export { required_49 as required };
            const location_153: string;
            export { location_153 as location };
        }
        export { Bucket_46 as Bucket };
        export namespace Key_2 {
            const required_50: boolean;
            export { required_50 as required };
            const location_154: string;
            export { location_154 as location };
        }
        export { Key_2 as Key };
        export namespace ResponseCacheControl {
            const location_155: string;
            export { location_155 as location };
            const sentAs_98: string;
            export { sentAs_98 as sentAs };
        }
        export namespace ResponseContentDisposition {
            const location_156: string;
            export { location_156 as location };
            const sentAs_99: string;
            export { sentAs_99 as sentAs };
        }
        export namespace ResponseContentEncoding {
            const location_157: string;
            export { location_157 as location };
            const sentAs_100: string;
            export { sentAs_100 as sentAs };
        }
        export namespace ResponseContentLanguage {
            const location_158: string;
            export { location_158 as location };
            const sentAs_101: string;
            export { sentAs_101 as sentAs };
        }
        export namespace ResponseContentType {
            const location_159: string;
            export { location_159 as location };
            const sentAs_102: string;
            export { sentAs_102 as sentAs };
        }
        export namespace ResponseExpires {
            const location_160: string;
            export { location_160 as location };
            const sentAs_103: string;
            export { sentAs_103 as sentAs };
        }
        export namespace VersionId_1 {
            const location_161: string;
            export { location_161 as location };
            const sentAs_104: string;
            export { sentAs_104 as sentAs };
        }
        export { VersionId_1 as VersionId };
        export namespace ImageProcess {
            const location_162: string;
            export { location_162 as location };
            const sentAs_105: string;
            export { sentAs_105 as sentAs };
        }
        export namespace IfMatch {
            const location_163: string;
            export { location_163 as location };
            const sentAs_106: string;
            export { sentAs_106 as sentAs };
        }
        export namespace IfModifiedSince {
            const location_164: string;
            export { location_164 as location };
            const sentAs_107: string;
            export { sentAs_107 as sentAs };
        }
        export namespace IfNoneMatch {
            const location_165: string;
            export { location_165 as location };
            const sentAs_108: string;
            export { sentAs_108 as sentAs };
        }
        export namespace IfUnmodifiedSince {
            const location_166: string;
            export { location_166 as location };
            const sentAs_109: string;
            export { sentAs_109 as sentAs };
        }
        export namespace Range {
            const location_167: string;
            export { location_167 as location };
            const sentAs_110: string;
            export { sentAs_110 as sentAs };
        }
        export namespace Origin_1 {
            const location_168: string;
            export { location_168 as location };
            const sentAs_111: string;
            export { sentAs_111 as sentAs };
        }
        export { Origin_1 as Origin };
        export namespace RequestHeader_1 {
            const location_169: string;
            export { location_169 as location };
            const sentAs_112: string;
            export { sentAs_112 as sentAs };
        }
        export { RequestHeader_1 as RequestHeader };
        export const SaveByType: {
            type: string;
        };
        export namespace SseC_4 {
            const location_170: string;
            export { location_170 as location };
            const sentAs_113: string;
            export { sentAs_113 as sentAs };
            const withPrefix_41: boolean;
            export { withPrefix_41 as withPrefix };
        }
        export { SseC_4 as SseC };
        const SseCKey_2: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_2 as SseCKey };
        const ProgressCallback_2: {
            type: string;
        };
        export { ProgressCallback_2 as ProgressCallback };
    }
    export { parameters_67 as parameters };
}
export declare namespace GetObjectOutput {
    const data_30: {
        type: string;
    };
    export { data_30 as data };
    export namespace parameters_68 {
        export namespace Content {
            const location_171: string;
            export { location_171 as location };
        }
        export namespace Expiration {
            const location_172: string;
            export { location_172 as location };
            const sentAs_114: string;
            export { sentAs_114 as sentAs };
            const withPrefix_42: boolean;
            export { withPrefix_42 as withPrefix };
        }
        export namespace ETag_2 {
            const location_173: string;
            export { location_173 as location };
            const sentAs_115: string;
            export { sentAs_115 as sentAs };
        }
        export { ETag_2 as ETag };
        export namespace CacheControl {
            const location_174: string;
            export { location_174 as location };
            const sentAs_116: string;
            export { sentAs_116 as sentAs };
        }
        export namespace ContentDisposition {
            const location_175: string;
            export { location_175 as location };
            const sentAs_117: string;
            export { sentAs_117 as sentAs };
        }
        export namespace ContentEncoding {
            const location_176: string;
            export { location_176 as location };
            const sentAs_118: string;
            export { sentAs_118 as sentAs };
        }
        export namespace ContentLanguage {
            const location_177: string;
            export { location_177 as location };
            const sentAs_119: string;
            export { sentAs_119 as sentAs };
        }
        export namespace ContentType_2 {
            const location_178: string;
            export { location_178 as location };
            const sentAs_120: string;
            export { sentAs_120 as sentAs };
        }
        export { ContentType_2 as ContentType };
        export namespace Expires_2 {
            const location_179: string;
            export { location_179 as location };
            const sentAs_121: string;
            export { sentAs_121 as sentAs };
        }
        export { Expires_2 as Expires };
        export namespace VersionId_2 {
            const location_180: string;
            export { location_180 as location };
            const sentAs_122: string;
            export { sentAs_122 as sentAs };
            const withPrefix_43: boolean;
            export { withPrefix_43 as withPrefix };
        }
        export { VersionId_2 as VersionId };
        export namespace ContentLength_2 {
            const location_181: string;
            export { location_181 as location };
            const sentAs_123: string;
            export { sentAs_123 as sentAs };
        }
        export { ContentLength_2 as ContentLength };
        export namespace DeleteMarker {
            const location_182: string;
            export { location_182 as location };
            const sentAs_124: string;
            export { sentAs_124 as sentAs };
            const withPrefix_44: boolean;
            export { withPrefix_44 as withPrefix };
        }
        export namespace LastModified {
            const location_183: string;
            export { location_183 as location };
            const sentAs_125: string;
            export { sentAs_125 as sentAs };
        }
        export namespace WebsiteRedirectLocation_2 {
            const location_184: string;
            export { location_184 as location };
            const sentAs_126: string;
            export { sentAs_126 as sentAs };
            const withPrefix_45: boolean;
            export { withPrefix_45 as withPrefix };
        }
        export { WebsiteRedirectLocation_2 as WebsiteRedirectLocation };
        export namespace StorageClass_7 {
            const location_185: string;
            export { location_185 as location };
            const sentAs_127: string;
            export { sentAs_127 as sentAs };
            const withPrefix_46: boolean;
            export { withPrefix_46 as withPrefix };
        }
        export { StorageClass_7 as StorageClass };
        export namespace Restore {
            const location_186: string;
            export { location_186 as location };
            const sentAs_128: string;
            export { sentAs_128 as sentAs };
            const withPrefix_47: boolean;
            export { withPrefix_47 as withPrefix };
        }
        export namespace AllowOrigin_1 {
            const location_187: string;
            export { location_187 as location };
            const sentAs_129: string;
            export { sentAs_129 as sentAs };
        }
        export { AllowOrigin_1 as AllowOrigin };
        export namespace MaxAgeSeconds_1 {
            const location_188: string;
            export { location_188 as location };
            const sentAs_130: string;
            export { sentAs_130 as sentAs };
        }
        export { MaxAgeSeconds_1 as MaxAgeSeconds };
        export namespace ExposeHeader_1 {
            const location_189: string;
            export { location_189 as location };
            const sentAs_131: string;
            export { sentAs_131 as sentAs };
        }
        export { ExposeHeader_1 as ExposeHeader };
        export namespace AllowMethod_1 {
            const location_190: string;
            export { location_190 as location };
            const sentAs_132: string;
            export { sentAs_132 as sentAs };
        }
        export { AllowMethod_1 as AllowMethod };
        export namespace AllowHeader_1 {
            const location_191: string;
            export { location_191 as location };
            const sentAs_133: string;
            export { sentAs_133 as sentAs };
        }
        export { AllowHeader_1 as AllowHeader };
        export namespace SseKms_4 {
            const location_192: string;
            export { location_192 as location };
            const sentAs_134: string;
            export { sentAs_134 as sentAs };
            const withPrefix_48: boolean;
            export { withPrefix_48 as withPrefix };
        }
        export { SseKms_4 as SseKms };
        export namespace SseKmsKey_4 {
            const location_193: string;
            export { location_193 as location };
            const sentAs_135: string;
            export { sentAs_135 as sentAs };
            const withPrefix_49: boolean;
            export { withPrefix_49 as withPrefix };
        }
        export { SseKmsKey_4 as SseKmsKey };
        export namespace SseC_5 {
            const location_194: string;
            export { location_194 as location };
            const sentAs_136: string;
            export { sentAs_136 as sentAs };
            const withPrefix_50: boolean;
            export { withPrefix_50 as withPrefix };
        }
        export { SseC_5 as SseC };
        export namespace SseCKeyMd5_2 {
            const location_195: string;
            export { location_195 as location };
            const sentAs_137: string;
            export { sentAs_137 as sentAs };
            const withPrefix_51: boolean;
            export { withPrefix_51 as withPrefix };
        }
        export { SseCKeyMd5_2 as SseCKeyMd5 };
        const Metadata_2: {
            location: string;
            type: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_2 as Metadata };
    }
    export { parameters_68 as parameters };
}
export declare namespace CopyObject {
    const httpMethod_46: string;
    export { httpMethod_46 as httpMethod };
    export namespace parameters_69 {
        export namespace Bucket_47 {
            const required_51: boolean;
            export { required_51 as required };
            const location_196: string;
            export { location_196 as location };
        }
        export { Bucket_47 as Bucket };
        export namespace Key_3 {
            const required_52: boolean;
            export { required_52 as required };
            const location_197: string;
            export { location_197 as location };
        }
        export { Key_3 as Key };
        const ACL_4: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_4 as ACL };
        export namespace GrantRead_3 {
            const location_198: string;
            export { location_198 as location };
            const sentAs_138: string;
            export { sentAs_138 as sentAs };
            const withPrefix_52: boolean;
            export { withPrefix_52 as withPrefix };
        }
        export { GrantRead_3 as GrantRead };
        export namespace GrantReadAcp_2 {
            const location_199: string;
            export { location_199 as location };
            const sentAs_139: string;
            export { sentAs_139 as sentAs };
            const withPrefix_53: boolean;
            export { withPrefix_53 as withPrefix };
        }
        export { GrantReadAcp_2 as GrantReadAcp };
        export namespace GrantWriteAcp_2 {
            const location_200: string;
            export { location_200 as location };
            const sentAs_140: string;
            export { sentAs_140 as sentAs };
            const withPrefix_54: boolean;
            export { withPrefix_54 as withPrefix };
        }
        export { GrantWriteAcp_2 as GrantWriteAcp };
        export namespace GrantFullControl_3 {
            const location_201: string;
            export { location_201 as location };
            const sentAs_141: string;
            export { sentAs_141 as sentAs };
            const withPrefix_55: boolean;
            export { withPrefix_55 as withPrefix };
        }
        export { GrantFullControl_3 as GrantFullControl };
        const StorageClass_8: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { StorageClass_8 as StorageClass };
        export namespace CopySource {
            const required_53: boolean;
            export { required_53 as required };
            const location_202: string;
            export { location_202 as location };
            const sentAs_142: string;
            export { sentAs_142 as sentAs };
            const withPrefix_56: boolean;
            export { withPrefix_56 as withPrefix };
            export const skipEncoding: boolean;
        }
        export namespace CopySourceIfMatch {
            const location_203: string;
            export { location_203 as location };
            const sentAs_143: string;
            export { sentAs_143 as sentAs };
            const withPrefix_57: boolean;
            export { withPrefix_57 as withPrefix };
        }
        export namespace CopySourceIfModifiedSince {
            const location_204: string;
            export { location_204 as location };
            const sentAs_144: string;
            export { sentAs_144 as sentAs };
            const withPrefix_58: boolean;
            export { withPrefix_58 as withPrefix };
        }
        export namespace CopySourceIfNoneMatch {
            const location_205: string;
            export { location_205 as location };
            const sentAs_145: string;
            export { sentAs_145 as sentAs };
            const withPrefix_59: boolean;
            export { withPrefix_59 as withPrefix };
        }
        export namespace CopySourceIfUnmodifiedSince {
            const location_206: string;
            export { location_206 as location };
            const sentAs_146: string;
            export { sentAs_146 as sentAs };
            const withPrefix_60: boolean;
            export { withPrefix_60 as withPrefix };
        }
        export namespace ContentType_3 {
            const location_207: string;
            export { location_207 as location };
            const sentAs_147: string;
            export { sentAs_147 as sentAs };
        }
        export { ContentType_3 as ContentType };
        export namespace ContentEncoding_1 {
            const location_208: string;
            export { location_208 as location };
            const sentAs_148: string;
            export { sentAs_148 as sentAs };
        }
        export { ContentEncoding_1 as ContentEncoding };
        export namespace ContentLanguage_1 {
            const location_209: string;
            export { location_209 as location };
            const sentAs_149: string;
            export { sentAs_149 as sentAs };
        }
        export { ContentLanguage_1 as ContentLanguage };
        export namespace ContentDisposition_1 {
            const location_210: string;
            export { location_210 as location };
            const sentAs_150: string;
            export { sentAs_150 as sentAs };
        }
        export { ContentDisposition_1 as ContentDisposition };
        export namespace CacheControl_1 {
            const location_211: string;
            export { location_211 as location };
            const sentAs_151: string;
            export { sentAs_151 as sentAs };
        }
        export { CacheControl_1 as CacheControl };
        export namespace Expires_3 {
            const location_212: string;
            export { location_212 as location };
            const sentAs_152: string;
            export { sentAs_152 as sentAs };
        }
        export { Expires_3 as Expires };
        const Metadata_3: {
            type: string;
            location: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_3 as Metadata };
        export namespace MetadataDirective {
            const location_213: string;
            export { location_213 as location };
            const sentAs_153: string;
            export { sentAs_153 as sentAs };
            const withPrefix_61: boolean;
            export { withPrefix_61 as withPrefix };
        }
        export namespace WebsiteRedirectLocation_3 {
            const location_214: string;
            export { location_214 as location };
            const sentAs_154: string;
            export { sentAs_154 as sentAs };
            const withPrefix_62: boolean;
            export { withPrefix_62 as withPrefix };
        }
        export { WebsiteRedirectLocation_3 as WebsiteRedirectLocation };
        const SseKms_5: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { SseKms_5 as SseKms };
        export namespace SseKmsKey_5 {
            const location_215: string;
            export { location_215 as location };
            const sentAs_155: string;
            export { sentAs_155 as sentAs };
            const withPrefix_63: boolean;
            export { withPrefix_63 as withPrefix };
        }
        export { SseKmsKey_5 as SseKmsKey };
        export namespace SseC_6 {
            const location_216: string;
            export { location_216 as location };
            const sentAs_156: string;
            export { sentAs_156 as sentAs };
            const withPrefix_64: boolean;
            export { withPrefix_64 as withPrefix };
        }
        export { SseC_6 as SseC };
        const SseCKey_3: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_3 as SseCKey };
        export namespace CopySourceSseC {
            const location_217: string;
            export { location_217 as location };
            const sentAs_157: string;
            export { sentAs_157 as sentAs };
            const withPrefix_65: boolean;
            export { withPrefix_65 as withPrefix };
        }
        export const CopySourceSseCKey: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
    }
    export { parameters_69 as parameters };
}
export declare namespace CopyObjectOutput {
    const data_31: {
        type: string;
        xmlRoot: string;
    };
    export { data_31 as data };
    export namespace parameters_70 {
        export namespace VersionId_3 {
            const location_218: string;
            export { location_218 as location };
            const sentAs_158: string;
            export { sentAs_158 as sentAs };
            const withPrefix_66: boolean;
            export { withPrefix_66 as withPrefix };
        }
        export { VersionId_3 as VersionId };
        export namespace CopySourceVersionId {
            const location_219: string;
            export { location_219 as location };
            const sentAs_159: string;
            export { sentAs_159 as sentAs };
            const withPrefix_67: boolean;
            export { withPrefix_67 as withPrefix };
        }
        export namespace ETag_3 {
            const location_220: string;
            export { location_220 as location };
            const sentAs_160: string;
            export { sentAs_160 as sentAs };
        }
        export { ETag_3 as ETag };
        export namespace LastModified_1 {
            const location_221: string;
            export { location_221 as location };
            const sentAs_161: string;
            export { sentAs_161 as sentAs };
        }
        export { LastModified_1 as LastModified };
        export namespace SseKms_6 {
            const location_222: string;
            export { location_222 as location };
            const sentAs_162: string;
            export { sentAs_162 as sentAs };
            const withPrefix_68: boolean;
            export { withPrefix_68 as withPrefix };
        }
        export { SseKms_6 as SseKms };
        export namespace SseKmsKey_6 {
            const location_223: string;
            export { location_223 as location };
            const sentAs_163: string;
            export { sentAs_163 as sentAs };
            const withPrefix_69: boolean;
            export { withPrefix_69 as withPrefix };
        }
        export { SseKmsKey_6 as SseKmsKey };
        export namespace SseC_7 {
            const location_224: string;
            export { location_224 as location };
            const sentAs_164: string;
            export { sentAs_164 as sentAs };
            const withPrefix_70: boolean;
            export { withPrefix_70 as withPrefix };
        }
        export { SseC_7 as SseC };
        export namespace SseCKeyMd5_3 {
            const location_225: string;
            export { location_225 as location };
            const sentAs_165: string;
            export { sentAs_165 as sentAs };
            const withPrefix_71: boolean;
            export { withPrefix_71 as withPrefix };
        }
        export { SseCKeyMd5_3 as SseCKeyMd5 };
    }
    export { parameters_70 as parameters };
}
export declare namespace RestoreObject {
    const httpMethod_47: string;
    export { httpMethod_47 as httpMethod };
    const urlPath_35: string;
    export { urlPath_35 as urlPath };
    export namespace data_32 {
        const xmlRoot_12: string;
        export { xmlRoot_12 as xmlRoot };
        const md5_4: boolean;
        export { md5_4 as md5 };
    }
    export { data_32 as data };
    export namespace parameters_71 {
        export namespace Bucket_48 {
            const required_54: boolean;
            export { required_54 as required };
            const location_226: string;
            export { location_226 as location };
        }
        export { Bucket_48 as Bucket };
        export namespace Key_4 {
            const required_55: boolean;
            export { required_55 as required };
            const location_227: string;
            export { location_227 as location };
        }
        export { Key_4 as Key };
        export namespace VersionId_4 {
            const location_228: string;
            export { location_228 as location };
            const sentAs_166: string;
            export { sentAs_166 as sentAs };
        }
        export { VersionId_4 as VersionId };
        export namespace Days {
            const location_229: string;
            export { location_229 as location };
            const sentAs_167: string;
            export { sentAs_167 as sentAs };
        }
        export namespace Tier {
            export const wrapper: string;
            const location_230: string;
            export { location_230 as location };
            const sentAs_168: string;
            export { sentAs_168 as sentAs };
        }
    }
    export { parameters_71 as parameters };
}
export declare namespace GetObjectMetadata {
    const httpMethod_48: string;
    export { httpMethod_48 as httpMethod };
    export namespace parameters_72 {
        export namespace Bucket_49 {
            const required_56: boolean;
            export { required_56 as required };
            const location_231: string;
            export { location_231 as location };
        }
        export { Bucket_49 as Bucket };
        export namespace Key_5 {
            const required_57: boolean;
            export { required_57 as required };
            const location_232: string;
            export { location_232 as location };
        }
        export { Key_5 as Key };
        export namespace VersionId_5 {
            const location_233: string;
            export { location_233 as location };
            const sentAs_169: string;
            export { sentAs_169 as sentAs };
        }
        export { VersionId_5 as VersionId };
        export namespace Origin_2 {
            const location_234: string;
            export { location_234 as location };
            const sentAs_170: string;
            export { sentAs_170 as sentAs };
        }
        export { Origin_2 as Origin };
        export namespace RequestHeader_2 {
            const location_235: string;
            export { location_235 as location };
            const sentAs_171: string;
            export { sentAs_171 as sentAs };
        }
        export { RequestHeader_2 as RequestHeader };
        export namespace SseC_8 {
            const location_236: string;
            export { location_236 as location };
            const sentAs_172: string;
            export { sentAs_172 as sentAs };
            const withPrefix_72: boolean;
            export { withPrefix_72 as withPrefix };
        }
        export { SseC_8 as SseC };
        const SseCKey_4: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_4 as SseCKey };
    }
    export { parameters_72 as parameters };
}
export declare namespace GetObjectMetadataOutput {
    export namespace parameters_73 {
        export namespace Expiration_1 {
            const location_237: string;
            export { location_237 as location };
            const sentAs_173: string;
            export { sentAs_173 as sentAs };
            const withPrefix_73: boolean;
            export { withPrefix_73 as withPrefix };
        }
        export { Expiration_1 as Expiration };
        export namespace LastModified_2 {
            const location_238: string;
            export { location_238 as location };
            const sentAs_174: string;
            export { sentAs_174 as sentAs };
        }
        export { LastModified_2 as LastModified };
        export namespace ContentLength_3 {
            const location_239: string;
            export { location_239 as location };
            const sentAs_175: string;
            export { sentAs_175 as sentAs };
        }
        export { ContentLength_3 as ContentLength };
        export namespace ContentType_4 {
            const location_240: string;
            export { location_240 as location };
            const sentAs_176: string;
            export { sentAs_176 as sentAs };
        }
        export { ContentType_4 as ContentType };
        export namespace ETag_4 {
            const location_241: string;
            export { location_241 as location };
            const sentAs_177: string;
            export { sentAs_177 as sentAs };
        }
        export { ETag_4 as ETag };
        export namespace VersionId_6 {
            const location_242: string;
            export { location_242 as location };
            const sentAs_178: string;
            export { sentAs_178 as sentAs };
            const withPrefix_74: boolean;
            export { withPrefix_74 as withPrefix };
        }
        export { VersionId_6 as VersionId };
        export namespace WebsiteRedirectLocation_4 {
            const location_243: string;
            export { location_243 as location };
            const sentAs_179: string;
            export { sentAs_179 as sentAs };
            const withPrefix_75: boolean;
            export { withPrefix_75 as withPrefix };
        }
        export { WebsiteRedirectLocation_4 as WebsiteRedirectLocation };
        export namespace StorageClass_9 {
            const location_244: string;
            export { location_244 as location };
            const sentAs_180: string;
            export { sentAs_180 as sentAs };
            const withPrefix_76: boolean;
            export { withPrefix_76 as withPrefix };
        }
        export { StorageClass_9 as StorageClass };
        export namespace Restore_1 {
            const location_245: string;
            export { location_245 as location };
            const sentAs_181: string;
            export { sentAs_181 as sentAs };
            const withPrefix_77: boolean;
            export { withPrefix_77 as withPrefix };
        }
        export { Restore_1 as Restore };
        export namespace ObjectType {
            const location_246: string;
            export { location_246 as location };
            const sentAs_182: string;
            export { sentAs_182 as sentAs };
        }
        export namespace NextPosition_1 {
            const location_247: string;
            export { location_247 as location };
            const sentAs_183: string;
            export { sentAs_183 as sentAs };
        }
        export { NextPosition_1 as NextPosition };
        export namespace AllowOrigin_2 {
            const location_248: string;
            export { location_248 as location };
            const sentAs_184: string;
            export { sentAs_184 as sentAs };
        }
        export { AllowOrigin_2 as AllowOrigin };
        export namespace MaxAgeSeconds_2 {
            const location_249: string;
            export { location_249 as location };
            const sentAs_185: string;
            export { sentAs_185 as sentAs };
        }
        export { MaxAgeSeconds_2 as MaxAgeSeconds };
        export namespace ExposeHeader_2 {
            const location_250: string;
            export { location_250 as location };
            const sentAs_186: string;
            export { sentAs_186 as sentAs };
        }
        export { ExposeHeader_2 as ExposeHeader };
        export namespace AllowMethod_2 {
            const location_251: string;
            export { location_251 as location };
            const sentAs_187: string;
            export { sentAs_187 as sentAs };
        }
        export { AllowMethod_2 as AllowMethod };
        export namespace AllowHeader_2 {
            const location_252: string;
            export { location_252 as location };
            const sentAs_188: string;
            export { sentAs_188 as sentAs };
        }
        export { AllowHeader_2 as AllowHeader };
        export namespace SseKms_7 {
            const location_253: string;
            export { location_253 as location };
            const sentAs_189: string;
            export { sentAs_189 as sentAs };
            const withPrefix_78: boolean;
            export { withPrefix_78 as withPrefix };
        }
        export { SseKms_7 as SseKms };
        export namespace SseKmsKey_7 {
            const location_254: string;
            export { location_254 as location };
            const sentAs_190: string;
            export { sentAs_190 as sentAs };
            const withPrefix_79: boolean;
            export { withPrefix_79 as withPrefix };
        }
        export { SseKmsKey_7 as SseKmsKey };
        export namespace SseC_9 {
            const location_255: string;
            export { location_255 as location };
            const sentAs_191: string;
            export { sentAs_191 as sentAs };
            const withPrefix_80: boolean;
            export { withPrefix_80 as withPrefix };
        }
        export { SseC_9 as SseC };
        export namespace SseCKeyMd5_4 {
            const location_256: string;
            export { location_256 as location };
            const sentAs_192: string;
            export { sentAs_192 as sentAs };
            const withPrefix_81: boolean;
            export { withPrefix_81 as withPrefix };
        }
        export { SseCKeyMd5_4 as SseCKeyMd5 };
        const Metadata_4: {
            location: string;
            type: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_4 as Metadata };
        export namespace ContentLanguage_2 {
            const location_257: string;
            export { location_257 as location };
            const sentAs_193: string;
            export { sentAs_193 as sentAs };
        }
        export { ContentLanguage_2 as ContentLanguage };
        export namespace CacheControl_2 {
            const location_258: string;
            export { location_258 as location };
            const sentAs_194: string;
            export { sentAs_194 as sentAs };
        }
        export { CacheControl_2 as CacheControl };
        export namespace ContentDisposition_2 {
            const location_259: string;
            export { location_259 as location };
            const sentAs_195: string;
            export { sentAs_195 as sentAs };
        }
        export { ContentDisposition_2 as ContentDisposition };
        export namespace Expires_4 {
            const location_260: string;
            export { location_260 as location };
            const sentAs_196: string;
            export { sentAs_196 as sentAs };
        }
        export { Expires_4 as Expires };
    }
    export { parameters_73 as parameters };
}
export declare namespace SetObjectMetadata {
    const httpMethod_49: string;
    export { httpMethod_49 as httpMethod };
    const urlPath_36: string;
    export { urlPath_36 as urlPath };
    export namespace parameters_74 {
        export namespace Bucket_50 {
            const required_58: boolean;
            export { required_58 as required };
            const location_261: string;
            export { location_261 as location };
        }
        export { Bucket_50 as Bucket };
        export namespace Key_6 {
            const required_59: boolean;
            export { required_59 as required };
            const location_262: string;
            export { location_262 as location };
        }
        export { Key_6 as Key };
        export namespace VersionId_7 {
            const location_263: string;
            export { location_263 as location };
            const sentAs_197: string;
            export { sentAs_197 as sentAs };
        }
        export { VersionId_7 as VersionId };
        export namespace Origin_3 {
            const location_264: string;
            export { location_264 as location };
            const sentAs_198: string;
            export { sentAs_198 as sentAs };
        }
        export { Origin_3 as Origin };
        export namespace RequestHeader_3 {
            const location_265: string;
            export { location_265 as location };
            const sentAs_199: string;
            export { sentAs_199 as sentAs };
        }
        export { RequestHeader_3 as RequestHeader };
        export namespace CacheControl_3 {
            const location_266: string;
            export { location_266 as location };
            const sentAs_200: string;
            export { sentAs_200 as sentAs };
        }
        export { CacheControl_3 as CacheControl };
        export namespace ContentDisposition_3 {
            const location_267: string;
            export { location_267 as location };
            const sentAs_201: string;
            export { sentAs_201 as sentAs };
        }
        export { ContentDisposition_3 as ContentDisposition };
        export namespace ContentLanguage_3 {
            const location_268: string;
            export { location_268 as location };
            const sentAs_202: string;
            export { sentAs_202 as sentAs };
        }
        export { ContentLanguage_3 as ContentLanguage };
        export namespace ContentEncoding_2 {
            const location_269: string;
            export { location_269 as location };
            const sentAs_203: string;
            export { sentAs_203 as sentAs };
        }
        export { ContentEncoding_2 as ContentEncoding };
        export namespace ContentType_5 {
            const location_270: string;
            export { location_270 as location };
            const sentAs_204: string;
            export { sentAs_204 as sentAs };
        }
        export { ContentType_5 as ContentType };
        export namespace Expires_5 {
            const location_271: string;
            export { location_271 as location };
            const sentAs_205: string;
            export { sentAs_205 as sentAs };
        }
        export { Expires_5 as Expires };
        export namespace Metadata_5 {
            export const shape: string;
            const location_272: string;
            export { location_272 as location };
            const sentAs_206: string;
            export { sentAs_206 as sentAs };
            const withPrefix_82: boolean;
            export { withPrefix_82 as withPrefix };
        }
        export { Metadata_5 as Metadata };
        export namespace MetadataDirective_1 {
            const location_273: string;
            export { location_273 as location };
            const sentAs_207: string;
            export { sentAs_207 as sentAs };
            const withPrefix_83: boolean;
            export { withPrefix_83 as withPrefix };
        }
        export { MetadataDirective_1 as MetadataDirective };
        export namespace StorageClass_10 {
            const location_274: string;
            export { location_274 as location };
            const sentAs_208: string;
            export { sentAs_208 as sentAs };
            const withPrefix_84: boolean;
            export { withPrefix_84 as withPrefix };
        }
        export { StorageClass_10 as StorageClass };
        export namespace WebsiteRedirectLocation_5 {
            const location_275: string;
            export { location_275 as location };
            const sentAs_209: string;
            export { sentAs_209 as sentAs };
            const withPrefix_85: boolean;
            export { withPrefix_85 as withPrefix };
        }
        export { WebsiteRedirectLocation_5 as WebsiteRedirectLocation };
    }
    export { parameters_74 as parameters };
}
export declare namespace SetObjectMetadataOutput {
    export namespace parameters_75 {
        export namespace Expires_6 {
            const location_276: string;
            export { location_276 as location };
            const sentAs_210: string;
            export { sentAs_210 as sentAs };
        }
        export { Expires_6 as Expires };
        export namespace ContentLength_4 {
            const location_277: string;
            export { location_277 as location };
            const sentAs_211: string;
            export { sentAs_211 as sentAs };
        }
        export { ContentLength_4 as ContentLength };
        export namespace ContentType_6 {
            const location_278: string;
            export { location_278 as location };
            const sentAs_212: string;
            export { sentAs_212 as sentAs };
        }
        export { ContentType_6 as ContentType };
        export namespace ContentLanguage_4 {
            const location_279: string;
            export { location_279 as location };
            const sentAs_213: string;
            export { sentAs_213 as sentAs };
        }
        export { ContentLanguage_4 as ContentLanguage };
        export namespace CacheControl_4 {
            const location_280: string;
            export { location_280 as location };
            const sentAs_214: string;
            export { sentAs_214 as sentAs };
        }
        export { CacheControl_4 as CacheControl };
        export namespace ContentDisposition_4 {
            const location_281: string;
            export { location_281 as location };
            const sentAs_215: string;
            export { sentAs_215 as sentAs };
        }
        export { ContentDisposition_4 as ContentDisposition };
        export namespace WebsiteRedirectLocation_6 {
            const location_282: string;
            export { location_282 as location };
            const sentAs_216: string;
            export { sentAs_216 as sentAs };
            const withPrefix_86: boolean;
            export { withPrefix_86 as withPrefix };
        }
        export { WebsiteRedirectLocation_6 as WebsiteRedirectLocation };
        const StorageClass_11: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { StorageClass_11 as StorageClass };
        const Metadata_6: {
            location: string;
            type: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_6 as Metadata };
    }
    export { parameters_75 as parameters };
}
export declare namespace SetObjectAcl {
    const httpMethod_50: string;
    export { httpMethod_50 as httpMethod };
    const urlPath_37: string;
    export { urlPath_37 as urlPath };
    export namespace data_33 {
        const xmlRoot_13: string;
        export { xmlRoot_13 as xmlRoot };
    }
    export { data_33 as data };
    export namespace parameters_76 {
        export namespace Bucket_51 {
            const required_60: boolean;
            export { required_60 as required };
            const location_283: string;
            export { location_283 as location };
        }
        export { Bucket_51 as Bucket };
        export namespace Key_7 {
            const required_61: boolean;
            export { required_61 as required };
            const location_284: string;
            export { location_284 as location };
        }
        export { Key_7 as Key };
        export namespace VersionId_8 {
            const location_285: string;
            export { location_285 as location };
            const sentAs_217: string;
            export { sentAs_217 as sentAs };
        }
        export { VersionId_8 as VersionId };
        const ACL_5: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_5 as ACL };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_76 as parameters };
}
export declare namespace SetObjectAclOutput {
    export namespace parameters_77 {
        export namespace VersionId_9 {
            const location_286: string;
            export { location_286 as location };
            const sentAs_218: string;
            export { sentAs_218 as sentAs };
            const withPrefix_87: boolean;
            export { withPrefix_87 as withPrefix };
        }
        export { VersionId_9 as VersionId };
    }
    export { parameters_77 as parameters };
}
export declare namespace GetObjectAcl {
    const httpMethod_51: string;
    export { httpMethod_51 as httpMethod };
    const urlPath_38: string;
    export { urlPath_38 as urlPath };
    export namespace parameters_78 {
        export namespace Bucket_52 {
            const required_62: boolean;
            export { required_62 as required };
            const location_287: string;
            export { location_287 as location };
        }
        export { Bucket_52 as Bucket };
        export namespace Key_8 {
            const required_63: boolean;
            export { required_63 as required };
            const location_288: string;
            export { location_288 as location };
        }
        export { Key_8 as Key };
        export namespace VersionId_10 {
            const location_289: string;
            export { location_289 as location };
            const sentAs_219: string;
            export { sentAs_219 as sentAs };
        }
        export { VersionId_10 as VersionId };
    }
    export { parameters_78 as parameters };
}
export declare namespace GetObjectAclOutput {
    const data_34: {
        type: string;
        xmlRoot: string;
    };
    export { data_34 as data };
    export namespace parameters_79 {
        export namespace VersionId_11 {
            const location_290: string;
            export { location_290 as location };
            const sentAs_220: string;
            export { sentAs_220 as sentAs };
            const withPrefix_88: boolean;
            export { withPrefix_88 as withPrefix };
        }
        export { VersionId_11 as VersionId };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_79 as parameters };
}
export declare namespace DeleteObject {
    const httpMethod_52: string;
    export { httpMethod_52 as httpMethod };
    export namespace parameters_80 {
        export namespace Bucket_53 {
            const required_64: boolean;
            export { required_64 as required };
            const location_291: string;
            export { location_291 as location };
        }
        export { Bucket_53 as Bucket };
        export namespace Key_9 {
            const required_65: boolean;
            export { required_65 as required };
            const location_292: string;
            export { location_292 as location };
        }
        export { Key_9 as Key };
        export namespace VersionId_12 {
            const location_293: string;
            export { location_293 as location };
            const sentAs_221: string;
            export { sentAs_221 as sentAs };
        }
        export { VersionId_12 as VersionId };
    }
    export { parameters_80 as parameters };
}
export declare namespace DeleteObjectOutput {
    export namespace parameters_81 {
        export namespace VersionId_13 {
            const location_294: string;
            export { location_294 as location };
            const sentAs_222: string;
            export { sentAs_222 as sentAs };
            const withPrefix_89: boolean;
            export { withPrefix_89 as withPrefix };
        }
        export { VersionId_13 as VersionId };
        export namespace DeleteMarker_1 {
            const location_295: string;
            export { location_295 as location };
            const sentAs_223: string;
            export { sentAs_223 as sentAs };
            const withPrefix_90: boolean;
            export { withPrefix_90 as withPrefix };
        }
        export { DeleteMarker_1 as DeleteMarker };
    }
    export { parameters_81 as parameters };
}
export declare namespace DeleteObjects {
    const httpMethod_53: string;
    export { httpMethod_53 as httpMethod };
    const urlPath_39: string;
    export { urlPath_39 as urlPath };
    export namespace data_35 {
        const xmlRoot_14: string;
        export { xmlRoot_14 as xmlRoot };
        const md5_5: boolean;
        export { md5_5 as md5 };
    }
    export { data_35 as data };
    export namespace parameters_82 {
        export namespace Bucket_54 {
            const required_66: boolean;
            export { required_66 as required };
            const location_296: string;
            export { location_296 as location };
        }
        export { Bucket_54 as Bucket };
        export namespace Quiet {
            const location_297: string;
            export { location_297 as location };
            const sentAs_224: string;
            export { sentAs_224 as sentAs };
        }
        export const Objects: {
            required: boolean;
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    VersionId: {
                        sentAs: string;
                    };
                };
            };
        };
    }
    export { parameters_82 as parameters };
}
export declare namespace DeleteObjectsOutput {
    const data_36: {
        type: string;
        xmlRoot: string;
    };
    export { data_36 as data };
    export namespace parameters_83 {
        export const Deleteds: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    VersionId: {
                        sentAs: string;
                    };
                    DeleteMarker: {
                        sentAs: string;
                    };
                    DeleteMarkerVersionId: {
                        sentAs: string;
                    };
                };
            };
        };
        export const Errors: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Key: {
                        sentAs: string;
                    };
                    VersionId: {
                        sentAs: string;
                    };
                    Code: {
                        sentAs: string;
                    };
                    Message: {
                        sentAs: string;
                    };
                };
            };
        };
    }
    export { parameters_83 as parameters };
}
export declare namespace InitiateMultipartUpload {
    const httpMethod_54: string;
    export { httpMethod_54 as httpMethod };
    const urlPath_40: string;
    export { urlPath_40 as urlPath };
    export namespace parameters_84 {
        export namespace Bucket_55 {
            const required_67: boolean;
            export { required_67 as required };
            const location_298: string;
            export { location_298 as location };
        }
        export { Bucket_55 as Bucket };
        export namespace Key_10 {
            const required_68: boolean;
            export { required_68 as required };
            const location_299: string;
            export { location_299 as location };
        }
        export { Key_10 as Key };
        const ACL_6: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { ACL_6 as ACL };
        export namespace GrantRead_4 {
            const location_300: string;
            export { location_300 as location };
            const sentAs_225: string;
            export { sentAs_225 as sentAs };
            const withPrefix_91: boolean;
            export { withPrefix_91 as withPrefix };
        }
        export { GrantRead_4 as GrantRead };
        export namespace GrantReadAcp_3 {
            const location_301: string;
            export { location_301 as location };
            const sentAs_226: string;
            export { sentAs_226 as sentAs };
            const withPrefix_92: boolean;
            export { withPrefix_92 as withPrefix };
        }
        export { GrantReadAcp_3 as GrantReadAcp };
        export namespace GrantWriteAcp_3 {
            const location_302: string;
            export { location_302 as location };
            const sentAs_227: string;
            export { sentAs_227 as sentAs };
            const withPrefix_93: boolean;
            export { withPrefix_93 as withPrefix };
        }
        export { GrantWriteAcp_3 as GrantWriteAcp };
        export namespace GrantFullControl_4 {
            const location_303: string;
            export { location_303 as location };
            const sentAs_228: string;
            export { sentAs_228 as sentAs };
            const withPrefix_94: boolean;
            export { withPrefix_94 as withPrefix };
        }
        export { GrantFullControl_4 as GrantFullControl };
        const StorageClass_12: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { StorageClass_12 as StorageClass };
        const Metadata_7: {
            type: string;
            location: string;
            sentAs: string;
            withPrefix: boolean;
        };
        export { Metadata_7 as Metadata };
        export namespace WebsiteRedirectLocation_7 {
            const location_304: string;
            export { location_304 as location };
            const sentAs_229: string;
            export { sentAs_229 as sentAs };
            const withPrefix_95: boolean;
            export { withPrefix_95 as withPrefix };
        }
        export { WebsiteRedirectLocation_7 as WebsiteRedirectLocation };
        const Expires_7: {
            location: string;
            sentAs: string;
            type: string;
        };
        export { Expires_7 as Expires };
        export namespace ContentType_7 {
            const location_305: string;
            export { location_305 as location };
            const sentAs_230: string;
            export { sentAs_230 as sentAs };
        }
        export { ContentType_7 as ContentType };
        const SseKms_8: {
            location: string;
            sentAs: string;
            withPrefix: boolean;
            type: string;
        };
        export { SseKms_8 as SseKms };
        export namespace SseKmsKey_8 {
            const location_306: string;
            export { location_306 as location };
            const sentAs_231: string;
            export { sentAs_231 as sentAs };
            const withPrefix_96: boolean;
            export { withPrefix_96 as withPrefix };
        }
        export { SseKmsKey_8 as SseKmsKey };
        export namespace SseC_10 {
            const location_307: string;
            export { location_307 as location };
            const sentAs_232: string;
            export { sentAs_232 as sentAs };
            const withPrefix_97: boolean;
            export { withPrefix_97 as withPrefix };
        }
        export { SseC_10 as SseC };
        const SseCKey_5: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_5 as SseCKey };
    }
    export { parameters_84 as parameters };
}
export declare namespace InitiateMultipartUploadOutput {
    const data_37: {
        type: string;
        xmlRoot: string;
    };
    export { data_37 as data };
    export namespace parameters_85 {
        export namespace Bucket_56 {
            const location_308: string;
            export { location_308 as location };
            const sentAs_233: string;
            export { sentAs_233 as sentAs };
        }
        export { Bucket_56 as Bucket };
        export namespace Key_11 {
            const location_309: string;
            export { location_309 as location };
            const sentAs_234: string;
            export { sentAs_234 as sentAs };
        }
        export { Key_11 as Key };
        export namespace UploadId {
            const location_310: string;
            export { location_310 as location };
            const sentAs_235: string;
            export { sentAs_235 as sentAs };
        }
        export namespace SseKms_9 {
            const location_311: string;
            export { location_311 as location };
            const sentAs_236: string;
            export { sentAs_236 as sentAs };
            const withPrefix_98: boolean;
            export { withPrefix_98 as withPrefix };
        }
        export { SseKms_9 as SseKms };
        export namespace SseKmsKey_9 {
            const location_312: string;
            export { location_312 as location };
            const sentAs_237: string;
            export { sentAs_237 as sentAs };
            const withPrefix_99: boolean;
            export { withPrefix_99 as withPrefix };
        }
        export { SseKmsKey_9 as SseKmsKey };
        export namespace SseC_11 {
            const location_313: string;
            export { location_313 as location };
            const sentAs_238: string;
            export { sentAs_238 as sentAs };
            const withPrefix_100: boolean;
            export { withPrefix_100 as withPrefix };
        }
        export { SseC_11 as SseC };
        export namespace SseCKeyMd5_5 {
            const location_314: string;
            export { location_314 as location };
            const sentAs_239: string;
            export { sentAs_239 as sentAs };
            const withPrefix_101: boolean;
            export { withPrefix_101 as withPrefix };
        }
        export { SseCKeyMd5_5 as SseCKeyMd5 };
    }
    export { parameters_85 as parameters };
}
export declare namespace ListMultipartUploads {
    const httpMethod_55: string;
    export { httpMethod_55 as httpMethod };
    const urlPath_41: string;
    export { urlPath_41 as urlPath };
    export namespace parameters_86 {
        export namespace Bucket_57 {
            const required_69: boolean;
            export { required_69 as required };
            const location_315: string;
            export { location_315 as location };
        }
        export { Bucket_57 as Bucket };
        export namespace Delimiter_4 {
            const location_316: string;
            export { location_316 as location };
            const sentAs_240: string;
            export { sentAs_240 as sentAs };
        }
        export { Delimiter_4 as Delimiter };
        export namespace KeyMarker_2 {
            const location_317: string;
            export { location_317 as location };
            const sentAs_241: string;
            export { sentAs_241 as sentAs };
        }
        export { KeyMarker_2 as KeyMarker };
        export const MaxUploads: {
            type: string;
            location: string;
            sentAs: string;
        };
        export namespace Prefix_4 {
            const location_318: string;
            export { location_318 as location };
            const sentAs_242: string;
            export { sentAs_242 as sentAs };
        }
        export { Prefix_4 as Prefix };
        export namespace UploadIdMarker {
            const location_319: string;
            export { location_319 as location };
            const sentAs_243: string;
            export { sentAs_243 as sentAs };
        }
    }
    export { parameters_86 as parameters };
}
export declare namespace ListMultipartUploadsOutput {
    const data_38: {
        type: string;
        xmlRoot: string;
    };
    export { data_38 as data };
    export namespace parameters_87 {
        export namespace Bucket_58 {
            const location_320: string;
            export { location_320 as location };
            const sentAs_244: string;
            export { sentAs_244 as sentAs };
        }
        export { Bucket_58 as Bucket };
        export namespace KeyMarker_3 {
            const location_321: string;
            export { location_321 as location };
            const sentAs_245: string;
            export { sentAs_245 as sentAs };
        }
        export { KeyMarker_3 as KeyMarker };
        export namespace UploadIdMarker_1 {
            const location_322: string;
            export { location_322 as location };
            const sentAs_246: string;
            export { sentAs_246 as sentAs };
        }
        export { UploadIdMarker_1 as UploadIdMarker };
        export namespace NextKeyMarker_1 {
            const location_323: string;
            export { location_323 as location };
            const sentAs_247: string;
            export { sentAs_247 as sentAs };
        }
        export { NextKeyMarker_1 as NextKeyMarker };
        export namespace Prefix_5 {
            const location_324: string;
            export { location_324 as location };
            const sentAs_248: string;
            export { sentAs_248 as sentAs };
        }
        export { Prefix_5 as Prefix };
        export namespace Delimiter_5 {
            const location_325: string;
            export { location_325 as location };
            const sentAs_249: string;
            export { sentAs_249 as sentAs };
        }
        export { Delimiter_5 as Delimiter };
        export namespace NextUploadIdMarker {
            const location_326: string;
            export { location_326 as location };
            const sentAs_250: string;
            export { sentAs_250 as sentAs };
        }
        export namespace MaxUploads_1 {
            const location_327: string;
            export { location_327 as location };
            const sentAs_251: string;
            export { sentAs_251 as sentAs };
        }
        export { MaxUploads_1 as MaxUploads };
        export namespace IsTruncated_2 {
            const location_328: string;
            export { location_328 as location };
            const sentAs_252: string;
            export { sentAs_252 as sentAs };
        }
        export { IsTruncated_2 as IsTruncated };
        export const Uploads: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    UploadId: {
                        sentAs: string;
                    };
                    Key: {
                        sentAs: string;
                    };
                    Initiated: {
                        sentAs: string;
                    };
                    StorageClass: {
                        sentAs: string;
                    };
                    Owner: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                        };
                    };
                    Initiator: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            ID: {
                                sentAs: string;
                            };
                            Name: {
                                sentAs: string;
                            };
                        };
                    };
                };
            };
        };
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_87 as parameters };
}
export declare namespace UploadPart {
    const httpMethod_56: string;
    export { httpMethod_56 as httpMethod };
    export namespace parameters_88 {
        export namespace Bucket_59 {
            const required_70: boolean;
            export { required_70 as required };
            const location_329: string;
            export { location_329 as location };
        }
        export { Bucket_59 as Bucket };
        export namespace Key_12 {
            const required_71: boolean;
            export { required_71 as required };
            const location_330: string;
            export { location_330 as location };
        }
        export { Key_12 as Key };
        export const PartNumber: {
            required: boolean;
            type: string;
            location: string;
            sentAs: string;
        };
        export namespace UploadId_1 {
            const required_72: boolean;
            export { required_72 as required };
            const location_331: string;
            export { location_331 as location };
            const sentAs_253: string;
            export { sentAs_253 as sentAs };
        }
        export { UploadId_1 as UploadId };
        export namespace ContentMD5_2 {
            const location_332: string;
            export { location_332 as location };
            const sentAs_254: string;
            export { sentAs_254 as sentAs };
        }
        export { ContentMD5_2 as ContentMD5 };
        export namespace Body_2 {
            const location_333: string;
            export { location_333 as location };
        }
        export { Body_2 as Body };
        const SourceFile_2: {
            type: string;
        };
        export { SourceFile_2 as SourceFile };
        const Offset_2: {
            type: string;
        };
        export { Offset_2 as Offset };
        export const PartSize: {
            type: string;
        };
        export namespace SseC_12 {
            const location_334: string;
            export { location_334 as location };
            const sentAs_255: string;
            export { sentAs_255 as sentAs };
            const withPrefix_102: boolean;
            export { withPrefix_102 as withPrefix };
        }
        export { SseC_12 as SseC };
        const SseCKey_6: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_6 as SseCKey };
        const ProgressCallback_3: {
            type: string;
        };
        export { ProgressCallback_3 as ProgressCallback };
    }
    export { parameters_88 as parameters };
}
export declare namespace UploadPartOutput {
    export namespace parameters_89 {
        export namespace ETag_5 {
            const location_335: string;
            export { location_335 as location };
            const sentAs_256: string;
            export { sentAs_256 as sentAs };
        }
        export { ETag_5 as ETag };
        export namespace SseKms_10 {
            const location_336: string;
            export { location_336 as location };
            const sentAs_257: string;
            export { sentAs_257 as sentAs };
            const withPrefix_103: boolean;
            export { withPrefix_103 as withPrefix };
        }
        export { SseKms_10 as SseKms };
        export namespace SseKmsKey_10 {
            const location_337: string;
            export { location_337 as location };
            const sentAs_258: string;
            export { sentAs_258 as sentAs };
            const withPrefix_104: boolean;
            export { withPrefix_104 as withPrefix };
        }
        export { SseKmsKey_10 as SseKmsKey };
        export namespace SseC_13 {
            const location_338: string;
            export { location_338 as location };
            const sentAs_259: string;
            export { sentAs_259 as sentAs };
            const withPrefix_105: boolean;
            export { withPrefix_105 as withPrefix };
        }
        export { SseC_13 as SseC };
        export namespace SseCKeyMd5_6 {
            const location_339: string;
            export { location_339 as location };
            const sentAs_260: string;
            export { sentAs_260 as sentAs };
            const withPrefix_106: boolean;
            export { withPrefix_106 as withPrefix };
        }
        export { SseCKeyMd5_6 as SseCKeyMd5 };
    }
    export { parameters_89 as parameters };
}
export declare namespace ListParts {
    const httpMethod_57: string;
    export { httpMethod_57 as httpMethod };
    export namespace parameters_90 {
        export namespace Bucket_60 {
            const required_73: boolean;
            export { required_73 as required };
            const location_340: string;
            export { location_340 as location };
        }
        export { Bucket_60 as Bucket };
        export namespace Key_13 {
            const required_74: boolean;
            export { required_74 as required };
            const location_341: string;
            export { location_341 as location };
        }
        export { Key_13 as Key };
        export namespace UploadId_2 {
            const required_75: boolean;
            export { required_75 as required };
            const location_342: string;
            export { location_342 as location };
            const sentAs_261: string;
            export { sentAs_261 as sentAs };
        }
        export { UploadId_2 as UploadId };
        export const MaxParts: {
            type: string;
            location: string;
            sentAs: string;
        };
        export const PartNumberMarker: {
            type: string;
            location: string;
            sentAs: string;
        };
    }
    export { parameters_90 as parameters };
}
export declare namespace ListPartsOutput {
    const data_39: {
        type: string;
        xmlRoot: string;
    };
    export { data_39 as data };
    export namespace parameters_91 {
        export namespace Bucket_61 {
            const location_343: string;
            export { location_343 as location };
            const sentAs_262: string;
            export { sentAs_262 as sentAs };
        }
        export { Bucket_61 as Bucket };
        export namespace Key_14 {
            const location_344: string;
            export { location_344 as location };
            const sentAs_263: string;
            export { sentAs_263 as sentAs };
        }
        export { Key_14 as Key };
        export namespace UploadId_3 {
            const location_345: string;
            export { location_345 as location };
            const sentAs_264: string;
            export { sentAs_264 as sentAs };
        }
        export { UploadId_3 as UploadId };
        export namespace PartNumberMarker_1 {
            const location_346: string;
            export { location_346 as location };
            const sentAs_265: string;
            export { sentAs_265 as sentAs };
        }
        export { PartNumberMarker_1 as PartNumberMarker };
        export namespace NextPartNumberMarker {
            const location_347: string;
            export { location_347 as location };
            const sentAs_266: string;
            export { sentAs_266 as sentAs };
        }
        export namespace MaxParts_1 {
            const location_348: string;
            export { location_348 as location };
            const sentAs_267: string;
            export { sentAs_267 as sentAs };
        }
        export { MaxParts_1 as MaxParts };
        export namespace IsTruncated_3 {
            const location_349: string;
            export { location_349 as location };
            const sentAs_268: string;
            export { sentAs_268 as sentAs };
        }
        export { IsTruncated_3 as IsTruncated };
        export namespace StorageClass_13 {
            const location_350: string;
            export { location_350 as location };
            const sentAs_269: string;
            export { sentAs_269 as sentAs };
        }
        export { StorageClass_13 as StorageClass };
        export { initiator as Initiator };
        export { owner as Owner };
        export const Parts: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    PartNumber: {
                        sentAs: string;
                    };
                    LastModified: {
                        sentAs: string;
                    };
                    ETag: {
                        sentAs: string;
                    };
                    Size: {
                        sentAs: string;
                    };
                };
            };
        };
    }
    export { parameters_91 as parameters };
}
export declare namespace CopyPart {
    const httpMethod_58: string;
    export { httpMethod_58 as httpMethod };
    export namespace parameters_92 {
        export namespace Bucket_62 {
            const required_76: boolean;
            export { required_76 as required };
            const location_351: string;
            export { location_351 as location };
        }
        export { Bucket_62 as Bucket };
        export namespace Key_15 {
            const required_77: boolean;
            export { required_77 as required };
            const location_352: string;
            export { location_352 as location };
        }
        export { Key_15 as Key };
        const PartNumber_1: {
            required: boolean;
            location: string;
            sentAs: string;
            type: string;
        };
        export { PartNumber_1 as PartNumber };
        export namespace UploadId_4 {
            const required_78: boolean;
            export { required_78 as required };
            const location_353: string;
            export { location_353 as location };
            const sentAs_270: string;
            export { sentAs_270 as sentAs };
        }
        export { UploadId_4 as UploadId };
        export namespace CopySource_1 {
            const required_79: boolean;
            export { required_79 as required };
            const location_354: string;
            export { location_354 as location };
            const sentAs_271: string;
            export { sentAs_271 as sentAs };
            const skipEncoding_1: boolean;
            export { skipEncoding_1 as skipEncoding };
            const withPrefix_107: boolean;
            export { withPrefix_107 as withPrefix };
        }
        export { CopySource_1 as CopySource };
        export namespace CopySourceRange {
            const location_355: string;
            export { location_355 as location };
            const sentAs_272: string;
            export { sentAs_272 as sentAs };
            const withPrefix_108: boolean;
            export { withPrefix_108 as withPrefix };
        }
        export namespace SseC_14 {
            const location_356: string;
            export { location_356 as location };
            const sentAs_273: string;
            export { sentAs_273 as sentAs };
            const withPrefix_109: boolean;
            export { withPrefix_109 as withPrefix };
        }
        export { SseC_14 as SseC };
        const SseCKey_7: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { SseCKey_7 as SseCKey };
        export namespace CopySourceSseC_1 {
            const location_357: string;
            export { location_357 as location };
            const sentAs_274: string;
            export { sentAs_274 as sentAs };
            const withPrefix_110: boolean;
            export { withPrefix_110 as withPrefix };
        }
        export { CopySourceSseC_1 as CopySourceSseC };
        const CopySourceSseCKey_1: {
            location: string;
            sentAs: string;
            type: string;
            withPrefix: boolean;
        };
        export { CopySourceSseCKey_1 as CopySourceSseCKey };
    }
    export { parameters_92 as parameters };
}
export declare namespace CopyPartOutput {
    const data_40: {
        type: string;
        xmlRoot: string;
    };
    export { data_40 as data };
    export namespace parameters_93 {
        export namespace LastModified_3 {
            const location_358: string;
            export { location_358 as location };
            const sentAs_275: string;
            export { sentAs_275 as sentAs };
        }
        export { LastModified_3 as LastModified };
        export namespace ETag_6 {
            const location_359: string;
            export { location_359 as location };
            const sentAs_276: string;
            export { sentAs_276 as sentAs };
        }
        export { ETag_6 as ETag };
        export namespace SseKms_11 {
            const location_360: string;
            export { location_360 as location };
            const sentAs_277: string;
            export { sentAs_277 as sentAs };
            const withPrefix_111: boolean;
            export { withPrefix_111 as withPrefix };
        }
        export { SseKms_11 as SseKms };
        export namespace SseKmsKey_11 {
            const location_361: string;
            export { location_361 as location };
            const sentAs_278: string;
            export { sentAs_278 as sentAs };
            const withPrefix_112: boolean;
            export { withPrefix_112 as withPrefix };
        }
        export { SseKmsKey_11 as SseKmsKey };
        export namespace SseC_15 {
            const location_362: string;
            export { location_362 as location };
            const sentAs_279: string;
            export { sentAs_279 as sentAs };
            const withPrefix_113: boolean;
            export { withPrefix_113 as withPrefix };
        }
        export { SseC_15 as SseC };
        export namespace SseCKeyMd5_7 {
            const location_363: string;
            export { location_363 as location };
            const sentAs_280: string;
            export { sentAs_280 as sentAs };
            const withPrefix_114: boolean;
            export { withPrefix_114 as withPrefix };
        }
        export { SseCKeyMd5_7 as SseCKeyMd5 };
    }
    export { parameters_93 as parameters };
}
export declare namespace AbortMultipartUpload {
    const httpMethod_59: string;
    export { httpMethod_59 as httpMethod };
    export namespace parameters_94 {
        export namespace Bucket_63 {
            const required_80: boolean;
            export { required_80 as required };
            const location_364: string;
            export { location_364 as location };
        }
        export { Bucket_63 as Bucket };
        export namespace Key_16 {
            const required_81: boolean;
            export { required_81 as required };
            const location_365: string;
            export { location_365 as location };
        }
        export { Key_16 as Key };
        export namespace UploadId_5 {
            const required_82: boolean;
            export { required_82 as required };
            const location_366: string;
            export { location_366 as location };
            const sentAs_281: string;
            export { sentAs_281 as sentAs };
        }
        export { UploadId_5 as UploadId };
    }
    export { parameters_94 as parameters };
}
export declare namespace CompleteMultipartUpload {
    const httpMethod_60: string;
    export { httpMethod_60 as httpMethod };
    export namespace data_41 {
        const xmlRoot_15: string;
        export { xmlRoot_15 as xmlRoot };
    }
    export { data_41 as data };
    export namespace parameters_95 {
        export namespace Bucket_64 {
            const required_83: boolean;
            export { required_83 as required };
            const location_367: string;
            export { location_367 as location };
        }
        export { Bucket_64 as Bucket };
        export namespace Key_17 {
            const required_84: boolean;
            export { required_84 as required };
            const location_368: string;
            export { location_368 as location };
        }
        export { Key_17 as Key };
        export namespace UploadId_6 {
            const required_85: boolean;
            export { required_85 as required };
            const location_369: string;
            export { location_369 as location };
            const sentAs_282: string;
            export { sentAs_282 as sentAs };
        }
        export { UploadId_6 as UploadId };
        const Parts_1: {
            required: boolean;
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    PartNumber: {
                        sentAs: string;
                    };
                    ETag: {
                        sentAs: string;
                    };
                };
            };
        };
        export { Parts_1 as Parts };
    }
    export { parameters_95 as parameters };
}
export declare namespace CompleteMultipartUploadOutput {
    const data_42: {
        type: string;
        xmlRoot: string;
    };
    export { data_42 as data };
    export namespace parameters_96 {
        export namespace VersionId_14 {
            const location_370: string;
            export { location_370 as location };
            const sentAs_283: string;
            export { sentAs_283 as sentAs };
            const withPrefix_115: boolean;
            export { withPrefix_115 as withPrefix };
        }
        export { VersionId_14 as VersionId };
        export namespace Location_6 {
            const location_371: string;
            export { location_371 as location };
            const sentAs_284: string;
            export { sentAs_284 as sentAs };
        }
        export { Location_6 as Location };
        export namespace Bucket_65 {
            const location_372: string;
            export { location_372 as location };
            const sentAs_285: string;
            export { sentAs_285 as sentAs };
        }
        export { Bucket_65 as Bucket };
        export namespace Key_18 {
            const location_373: string;
            export { location_373 as location };
            const sentAs_286: string;
            export { sentAs_286 as sentAs };
        }
        export { Key_18 as Key };
        export namespace ETag_7 {
            const location_374: string;
            export { location_374 as location };
            const sentAs_287: string;
            export { sentAs_287 as sentAs };
        }
        export { ETag_7 as ETag };
        export namespace SseKms_12 {
            const location_375: string;
            export { location_375 as location };
            const sentAs_288: string;
            export { sentAs_288 as sentAs };
            const withPrefix_116: boolean;
            export { withPrefix_116 as withPrefix };
        }
        export { SseKms_12 as SseKms };
        export namespace SseKmsKey_12 {
            const location_376: string;
            export { location_376 as location };
            const sentAs_289: string;
            export { sentAs_289 as sentAs };
            const withPrefix_117: boolean;
            export { withPrefix_117 as withPrefix };
        }
        export { SseKmsKey_12 as SseKmsKey };
        export namespace SseC_16 {
            const location_377: string;
            export { location_377 as location };
            const sentAs_290: string;
            export { sentAs_290 as sentAs };
            const withPrefix_118: boolean;
            export { withPrefix_118 as withPrefix };
        }
        export { SseC_16 as SseC };
        export namespace SseCKeyMd5_8 {
            const location_378: string;
            export { location_378 as location };
            const sentAs_291: string;
            export { sentAs_291 as sentAs };
            const withPrefix_119: boolean;
            export { withPrefix_119 as withPrefix };
        }
        export { SseCKeyMd5_8 as SseCKeyMd5 };
    }
    export { parameters_96 as parameters };
}
export declare namespace GetBucketInventory {
    const httpMethod_61: string;
    export { httpMethod_61 as httpMethod };
    const urlPath_42: string;
    export { urlPath_42 as urlPath };
    export namespace parameters_97 {
        export namespace Bucket_66 {
            const required_86: boolean;
            export { required_86 as required };
            const location_379: string;
            export { location_379 as location };
        }
        export { Bucket_66 as Bucket };
    }
    export { parameters_97 as parameters };
}
export declare namespace GetBucketInventoryOutput {
    const data_43: {
        type: string;
        xmlRoot: string;
    };
    export { data_43 as data };
    export namespace parameters_98 {
        const Rules_2: {
            type: string;
            location: string;
            sentAs: string;
            items: {
                type: string;
                parameters: {
                    Id: {
                        sentAs: string;
                    };
                    IsEnabled: {
                        sentAs: string;
                    };
                    Filter: {
                        type: string;
                        sentAs: string;
                        parameters: {
                            Prefix: {
                                sentAs: string;
                            };
                        };
                    };
                    Destination: {
                        type: string;
                        sentAs: string;
                        parameters: {
                            Format: {
                                sentAs: string;
                            };
                            Bucket: {
                                sentAs: string;
                            };
                            Prefix: {
                                sentAs: string;
                            };
                        };
                    };
                    Schedule: {
                        type: string;
                        sentAs: string;
                        parameters: {
                            Frequency: {
                                sentAs: string;
                            };
                        };
                    };
                    IncludedObjectVersions: {
                        sentAs: string;
                    };
                    OptionalFields: {
                        type: string;
                        location: string;
                        sentAs: string;
                        parameters: {
                            Field: {
                                type: string;
                                sentAs: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    LastExportTime: {
                        sentAs: string;
                    };
                };
            };
        };
        export { Rules_2 as Rules };
    }
    export { parameters_98 as parameters };
}
export declare namespace SetBucketInventory {
    const httpMethod_62: string;
    export { httpMethod_62 as httpMethod };
    const urlPath_43: string;
    export { urlPath_43 as urlPath };
    export namespace parameters_99 {
        export namespace Bucket_67 {
            const required_87: boolean;
            export { required_87 as required };
            const location_380: string;
            export { location_380 as location };
        }
        export { Bucket_67 as Bucket };
        export namespace Id {
            const location_381: string;
            export { location_381 as location };
            const sentAs_292: string;
            export { sentAs_292 as sentAs };
        }
        export { InventoryConfiguration };
    }
    export { parameters_99 as parameters };
}
export declare namespace SetBucketInventoryOutput {
    const data_44: {
        type: string;
        xmlRoot: string;
    };
    export { data_44 as data };
    export namespace parameters_100 {
        export { InventoryConfiguration };
    }
    export { parameters_100 as parameters };
}
export declare namespace DeleteInventory {
    const httpMethod_63: string;
    export { httpMethod_63 as httpMethod };
    const urlPath_44: string;
    export { urlPath_44 as urlPath };
    export namespace parameters_101 {
        export namespace Bucket_68 {
            const required_88: boolean;
            export { required_88 as required };
            const location_382: string;
            export { location_382 as location };
        }
        export { Bucket_68 as Bucket };
        export namespace Id_1 {
            const location_383: string;
            export { location_383 as location };
            const sentAs_293: string;
            export { sentAs_293 as sentAs };
        }
        export { Id_1 as Id };
    }
    export { parameters_101 as parameters };
}
export declare namespace DeleteInventoryOutput {
    const data_45: {
        type: string;
        xmlRoot: string;
    };
    export { data_45 as data };
    export namespace parameters_102 {
        export { InventoryConfiguration };
    }
    export { parameters_102 as parameters };
}
export declare namespace GetBucketEncryption {
    const httpMethod_64: string;
    export { httpMethod_64 as httpMethod };
    const urlPath_45: string;
    export { urlPath_45 as urlPath };
    export namespace parameters_103 {
        export namespace Bucket_69 {
            const required_89: boolean;
            export { required_89 as required };
            const location_384: string;
            export { location_384 as location };
        }
        export { Bucket_69 as Bucket };
    }
    export { parameters_103 as parameters };
}
export declare namespace GetBucketEncryptionOutput {
    const data_46: {
        type: string;
        xmlRoot: string;
    };
    export { data_46 as data };
    export namespace parameters_104 {
        export const Rule: {
            type: string;
            location: string;
            sentAs: string;
            parameters: {
                ApplyServerSideEncryptionByDefault: {
                    type: string;
                    sentAs: string;
                    parameters: {
                        SSEAlgorithm: {
                            sentAs: string;
                        };
                        KMSMasterKeyID: {
                            sentAs: string;
                        };
                    };
                };
            };
        };
    }
    export { parameters_104 as parameters };
}
export declare namespace SetBucketEncryption {
    const httpMethod_65: string;
    export { httpMethod_65 as httpMethod };
    const urlPath_46: string;
    export { urlPath_46 as urlPath };
    export namespace data_47 {
        const xmlRoot_16: string;
        export { xmlRoot_16 as xmlRoot };
    }
    export { data_47 as data };
    export namespace parameters_105 {
        export namespace Bucket_70 {
            const required_90: boolean;
            export { required_90 as required };
            const location_385: string;
            export { location_385 as location };
        }
        export { Bucket_70 as Bucket };
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_105 as parameters };
}
export declare namespace SetBucketEncryptionOutput {
    const data_48: {
        type: string;
        xmlRoot: string;
    };
    export { data_48 as data };
    export namespace parameters_106 {
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_106 as parameters };
}
export declare namespace DeleteBucketEncryption {
    const httpMethod_66: string;
    export { httpMethod_66 as httpMethod };
    const urlPath_47: string;
    export { urlPath_47 as urlPath };
    export namespace parameters_107 {
        export namespace Bucket_71 {
            const required_91: boolean;
            export { required_91 as required };
            const location_386: string;
            export { location_386 as location };
        }
        export { Bucket_71 as Bucket };
    }
    export { parameters_107 as parameters };
}
export declare namespace DeleteBucketEncryptionOutput {
    const data_49: {
        type: string;
        xmlRoot: string;
    };
    export { data_49 as data };
    export namespace parameters_108 {
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_108 as parameters };
}
export {};
