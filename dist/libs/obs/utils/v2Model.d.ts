declare namespace owner {
    const type_123: string;
    export { type_123 as type };
    const location_449: string;
    export { location_449 as location };
    const sentAs_416: string;
    export { sentAs_416 as sentAs };
    export namespace parameters_127 {
        export namespace ID_1 {
            const sentAs_417: string;
            export { sentAs_417 as sentAs };
        }
        export { ID_1 as ID };
        export namespace Name_1 {
            const sentAs_418: string;
            export { sentAs_418 as sentAs };
        }
        export { Name_1 as Name };
    }
    export { parameters_127 as parameters };
}
declare namespace commonPrefixes {
    const type_124: string;
    export { type_124 as type };
    const location_450: string;
    export { location_450 as location };
    const sentAs_419: string;
    export { sentAs_419 as sentAs };
    export namespace items_12 {
        const type_125: string;
        export { type_125 as type };
        export namespace parameters_128 {
            export namespace Prefix_8 {
                const sentAs_420: string;
                export { sentAs_420 as sentAs };
            }
            export { Prefix_8 as Prefix };
        }
        export { parameters_128 as parameters };
    }
    export { items_12 as items };
}
declare namespace grants {
    const type_126: string;
    export { type_126 as type };
    const location_451: string;
    export { location_451 as location };
    const wrapper_2: string;
    export { wrapper_2 as wrapper };
    const sentAs_421: string;
    export { sentAs_421 as sentAs };
    export namespace items_13 {
        const type_127: string;
        export { type_127 as type };
        export namespace parameters_129 {
            namespace Grantee {
                export namespace data_50 {
                    const xsiNamespace: string;
                    const xsiType: string;
                }
                export { data_50 as data };
                const type_128: string;
                export { type_128 as type };
                const sentAs_422: string;
                export { sentAs_422 as sentAs };
                export namespace parameters_130 {
                    export namespace Type_3 {
                        const type_129: string;
                        export { type_129 as type };
                    }
                    export { Type_3 as Type };
                    export namespace ID_2 {
                        const sentAs_423: string;
                        export { sentAs_423 as sentAs };
                    }
                    export { ID_2 as ID };
                    export namespace Name_2 {
                        const sentAs_424: string;
                        export { sentAs_424 as sentAs };
                    }
                    export { Name_2 as Name };
                    export namespace URI {
                        const sentAs_425: string;
                        export { sentAs_425 as sentAs };
                        const type_130: string;
                        export { type_130 as type };
                    }
                }
                export { parameters_130 as parameters };
            }
            namespace Permission {
                const sentAs_426: string;
                export { sentAs_426 as sentAs };
            }
        }
        export { parameters_129 as parameters };
    }
    export { items_13 as items };
}
declare namespace loggingEnabled {
    const type_131: string;
    export { type_131 as type };
    const location_452: string;
    export { location_452 as location };
    const sentAs_427: string;
    export { sentAs_427 as sentAs };
    export namespace parameters_131 {
        namespace TargetBucket {
            const sentAs_428: string;
            export { sentAs_428 as sentAs };
        }
        namespace TargetPrefix {
            const sentAs_429: string;
            export { sentAs_429 as sentAs };
        }
        namespace TargetGrants {
            const type_132: string;
            export { type_132 as type };
            const wrapper_3: string;
            export { wrapper_3 as wrapper };
            const sentAs_430: string;
            export { sentAs_430 as sentAs };
            export namespace items_14 {
                const type_133: string;
                export { type_133 as type };
                export namespace parameters_132 {
                    export namespace Grantee_1 {
                        export namespace data_51 {
                            const xsiNamespace_1: string;
                            export { xsiNamespace_1 as xsiNamespace };
                            const xsiType_1: string;
                            export { xsiType_1 as xsiType };
                        }
                        export { data_51 as data };
                        const type_134: string;
                        export { type_134 as type };
                        const sentAs_431: string;
                        export { sentAs_431 as sentAs };
                        export namespace parameters_133 {
                            export namespace Type_4 {
                                const type_135: string;
                                export { type_135 as type };
                            }
                            export { Type_4 as Type };
                            export namespace ID_3 {
                                const sentAs_432: string;
                                export { sentAs_432 as sentAs };
                            }
                            export { ID_3 as ID };
                            export namespace Name_3 {
                                const sentAs_433: string;
                                export { sentAs_433 as sentAs };
                            }
                            export { Name_3 as Name };
                            export namespace URI_1 {
                                const sentAs_434: string;
                                export { sentAs_434 as sentAs };
                                const type_136: string;
                                export { type_136 as type };
                            }
                            export { URI_1 as URI };
                        }
                        export { parameters_133 as parameters };
                    }
                    export { Grantee_1 as Grantee };
                    export namespace Permission_1 {
                        const sentAs_435: string;
                        export { sentAs_435 as sentAs };
                    }
                    export { Permission_1 as Permission };
                }
                export { parameters_132 as parameters };
            }
            export { items_14 as items };
        }
    }
    export { parameters_131 as parameters };
}
declare namespace rules {
    const required_97: boolean;
    export { required_97 as required };
    const type_137: string;
    export { type_137 as type };
    const location_453: string;
    export { location_453 as location };
    const sentAs_436: string;
    export { sentAs_436 as sentAs };
    export namespace items_15 {
        const type_138: string;
        export { type_138 as type };
        export namespace parameters_134 {
            export namespace ID_4 {
                const sentAs_437: string;
                export { sentAs_437 as sentAs };
            }
            export { ID_4 as ID };
            export namespace Prefix_9 {
                const sentAs_438: string;
                export { sentAs_438 as sentAs };
            }
            export { Prefix_9 as Prefix };
            export namespace Status {
                const sentAs_439: string;
                export { sentAs_439 as sentAs };
            }
            export namespace Transitions {
                const type_139: string;
                export { type_139 as type };
                const sentAs_440: string;
                export { sentAs_440 as sentAs };
                export namespace items_16 {
                    const type_140: string;
                    export { type_140 as type };
                    export namespace parameters_135 {
                        export namespace StorageClass_17 {
                            const sentAs_441: string;
                            export { sentAs_441 as sentAs };
                            const type_141: string;
                            export { type_141 as type };
                        }
                        export { StorageClass_17 as StorageClass };
                        export namespace Date {
                            const sentAs_442: string;
                            export { sentAs_442 as sentAs };
                        }
                        export namespace Days_1 {
                            const type_142: string;
                            export { type_142 as type };
                            const sentAs_443: string;
                            export { sentAs_443 as sentAs };
                        }
                        export { Days_1 as Days };
                    }
                    export { parameters_135 as parameters };
                }
                export { items_16 as items };
            }
            export namespace Expiration_2 {
                const type_143: string;
                export { type_143 as type };
                const sentAs_444: string;
                export { sentAs_444 as sentAs };
                export namespace parameters_136 {
                    export namespace Date_1 {
                        const sentAs_445: string;
                        export { sentAs_445 as sentAs };
                    }
                    export { Date_1 as Date };
                    export namespace Days_2 {
                        const type_144: string;
                        export { type_144 as type };
                        const sentAs_446: string;
                        export { sentAs_446 as sentAs };
                    }
                    export { Days_2 as Days };
                }
                export { parameters_136 as parameters };
            }
            export { Expiration_2 as Expiration };
            export namespace NoncurrentVersionTransitions {
                const type_145: string;
                export { type_145 as type };
                const sentAs_447: string;
                export { sentAs_447 as sentAs };
                export namespace items_17 {
                    const type_146: string;
                    export { type_146 as type };
                    export namespace parameters_137 {
                        export namespace StorageClass_18 {
                            const sentAs_448: string;
                            export { sentAs_448 as sentAs };
                            const type_147: string;
                            export { type_147 as type };
                        }
                        export { StorageClass_18 as StorageClass };
                        export namespace NoncurrentDays {
                            const type_148: string;
                            export { type_148 as type };
                            const sentAs_449: string;
                            export { sentAs_449 as sentAs };
                        }
                    }
                    export { parameters_137 as parameters };
                }
                export { items_17 as items };
            }
            export namespace NoncurrentVersionExpiration {
                const type_149: string;
                export { type_149 as type };
                const sentAs_450: string;
                export { sentAs_450 as sentAs };
                export namespace parameters_138 {
                    export namespace NoncurrentDays_1 {
                        const type_150: string;
                        export { type_150 as type };
                        const sentAs_451: string;
                        export { sentAs_451 as sentAs };
                    }
                    export { NoncurrentDays_1 as NoncurrentDays };
                }
                export { parameters_138 as parameters };
            }
        }
        export { parameters_134 as parameters };
    }
    export { items_15 as items };
}
declare namespace redirectAllRequestsTo {
    const type_151: string;
    export { type_151 as type };
    const location_454: string;
    export { location_454 as location };
    const sentAs_452: string;
    export { sentAs_452 as sentAs };
    export namespace parameters_139 {
        namespace HostName {
            const sentAs_453: string;
            export { sentAs_453 as sentAs };
        }
        namespace Protocol {
            const sentAs_454: string;
            export { sentAs_454 as sentAs };
        }
    }
    export { parameters_139 as parameters };
}
declare namespace indexDocument {
    const type_152: string;
    export { type_152 as type };
    const location_455: string;
    export { location_455 as location };
    const sentAs_455: string;
    export { sentAs_455 as sentAs };
    export namespace parameters_140 {
        namespace Suffix {
            const sentAs_456: string;
            export { sentAs_456 as sentAs };
        }
    }
    export { parameters_140 as parameters };
}
declare namespace errorDocument {
    const type_153: string;
    export { type_153 as type };
    const location_456: string;
    export { location_456 as location };
    const sentAs_457: string;
    export { sentAs_457 as sentAs };
    export namespace parameters_141 {
        export namespace Key_26 {
            const sentAs_458: string;
            export { sentAs_458 as sentAs };
        }
        export { Key_26 as Key };
    }
    export { parameters_141 as parameters };
}
declare namespace routingRules {
    const type_154: string;
    export { type_154 as type };
    const wrapper_4: string;
    export { wrapper_4 as wrapper };
    const location_457: string;
    export { location_457 as location };
    const sentAs_459: string;
    export { sentAs_459 as sentAs };
    export namespace items_18 {
        const type_155: string;
        export { type_155 as type };
        export namespace parameters_142 {
            namespace Condition {
                const type_156: string;
                export { type_156 as type };
                const sentAs_460: string;
                export { sentAs_460 as sentAs };
                export namespace parameters_143 {
                    namespace HttpErrorCodeReturnedEquals {
                        const sentAs_461: string;
                        export { sentAs_461 as sentAs };
                    }
                    namespace KeyPrefixEquals {
                        const sentAs_462: string;
                        export { sentAs_462 as sentAs };
                    }
                }
                export { parameters_143 as parameters };
            }
            namespace Redirect {
                const type_157: string;
                export { type_157 as type };
                const sentAs_463: string;
                export { sentAs_463 as sentAs };
                export namespace parameters_144 {
                    export namespace HostName_1 {
                        const sentAs_464: string;
                        export { sentAs_464 as sentAs };
                    }
                    export { HostName_1 as HostName };
                    export namespace HttpRedirectCode {
                        const sentAs_465: string;
                        export { sentAs_465 as sentAs };
                    }
                    export namespace Protocol_1 {
                        const sentAs_466: string;
                        export { sentAs_466 as sentAs };
                    }
                    export { Protocol_1 as Protocol };
                    export namespace ReplaceKeyPrefixWith {
                        const sentAs_467: string;
                        export { sentAs_467 as sentAs };
                    }
                    export namespace ReplaceKeyWith {
                        const sentAs_468: string;
                        export { sentAs_468 as sentAs };
                    }
                }
                export { parameters_144 as parameters };
            }
        }
        export { parameters_142 as parameters };
    }
    export { items_18 as items };
}
declare namespace corsRule {
    const required_98: boolean;
    export { required_98 as required };
    const type_158: string;
    export { type_158 as type };
    const location_458: string;
    export { location_458 as location };
    const sentAs_469: string;
    export { sentAs_469 as sentAs };
    export namespace items_19 {
        const type_159: string;
        export { type_159 as type };
        export namespace parameters_145 {
            export namespace ID_5 {
                const sentAs_470: string;
                export { sentAs_470 as sentAs };
            }
            export { ID_5 as ID };
            export namespace AllowedMethod {
                const type_160: string;
                export { type_160 as type };
                const sentAs_471: string;
                export { sentAs_471 as sentAs };
                export namespace items_20 {
                    const type_161: string;
                    export { type_161 as type };
                }
                export { items_20 as items };
            }
            export namespace AllowedOrigin {
                const type_162: string;
                export { type_162 as type };
                const sentAs_472: string;
                export { sentAs_472 as sentAs };
                export namespace items_21 {
                    const type_163: string;
                    export { type_163 as type };
                }
                export { items_21 as items };
            }
            export namespace AllowedHeader {
                const type_164: string;
                export { type_164 as type };
                const sentAs_473: string;
                export { sentAs_473 as sentAs };
                export namespace items_22 {
                    const type_165: string;
                    export { type_165 as type };
                }
                export { items_22 as items };
            }
            export namespace MaxAgeSeconds_3 {
                const type_166: string;
                export { type_166 as type };
                const sentAs_474: string;
                export { sentAs_474 as sentAs };
            }
            export { MaxAgeSeconds_3 as MaxAgeSeconds };
            export namespace ExposeHeader_3 {
                const type_167: string;
                export { type_167 as type };
                const sentAs_475: string;
                export { sentAs_475 as sentAs };
                export namespace items_23 {
                    const type_168: string;
                    export { type_168 as type };
                }
                export { items_23 as items };
            }
            export { ExposeHeader_3 as ExposeHeader };
        }
        export { parameters_145 as parameters };
    }
    export { items_19 as items };
}
declare namespace topicConfiguration {
    const type_169: string;
    export { type_169 as type };
    const location_459: string;
    export { location_459 as location };
    const sentAs_476: string;
    export { sentAs_476 as sentAs };
    export namespace items_24 {
        const type_170: string;
        export { type_170 as type };
        const location_460: string;
        export { location_460 as location };
        export namespace parameters_146 {
            export namespace ID_6 {
                const sentAs_477: string;
                export { sentAs_477 as sentAs };
            }
            export { ID_6 as ID };
            export namespace Filter_1 {
                const type_171: string;
                export { type_171 as type };
                export namespace parameters_147 {
                    namespace FilterRules {
                        const wrapper_5: string;
                        export { wrapper_5 as wrapper };
                        const type_172: string;
                        export { type_172 as type };
                        const sentAs_478: string;
                        export { sentAs_478 as sentAs };
                        export namespace items_25 {
                            const type_173: string;
                            export { type_173 as type };
                            export namespace parameters_148 {
                                const Name_4: {};
                                export { Name_4 as Name };
                                export const Value: {};
                            }
                            export { parameters_148 as parameters };
                        }
                        export { items_25 as items };
                    }
                }
                export { parameters_147 as parameters };
            }
            export { Filter_1 as Filter };
            export const Topic: {};
            export namespace Event {
                const type_174: string;
                export { type_174 as type };
                export namespace items_26 {
                    const type_175: string;
                    export { type_175 as type };
                }
                export { items_26 as items };
            }
        }
        export { parameters_146 as parameters };
    }
    export { items_24 as items };
}
declare namespace functionGraphConfiguration {
    const type_176: string;
    export { type_176 as type };
    const location_461: string;
    export { location_461 as location };
    const sentAs_479: string;
    export { sentAs_479 as sentAs };
    export namespace items_27 {
        const type_177: string;
        export { type_177 as type };
        const location_462: string;
        export { location_462 as location };
        export namespace parameters_149 {
            export namespace ID_7 {
                const sentAs_480: string;
                export { sentAs_480 as sentAs };
            }
            export { ID_7 as ID };
            export namespace Filter_2 {
                const type_178: string;
                export { type_178 as type };
                export namespace parameters_150 {
                    export namespace FilterRules_1 {
                        const wrapper_6: string;
                        export { wrapper_6 as wrapper };
                        const type_179: string;
                        export { type_179 as type };
                        const sentAs_481: string;
                        export { sentAs_481 as sentAs };
                        export namespace items_28 {
                            const type_180: string;
                            export { type_180 as type };
                            export namespace parameters_151 {
                                const Name_5: {};
                                export { Name_5 as Name };
                                const Value_1: {};
                                export { Value_1 as Value };
                            }
                            export { parameters_151 as parameters };
                        }
                        export { items_28 as items };
                    }
                    export { FilterRules_1 as FilterRules };
                }
                export { parameters_150 as parameters };
            }
            export { Filter_2 as Filter };
            export const FunctionGraph: {};
            export namespace Event_1 {
                const type_181: string;
                export { type_181 as type };
                export namespace items_29 {
                    const type_182: string;
                    export { type_182 as type };
                }
                export { items_29 as items };
            }
            export { Event_1 as Event };
        }
        export { parameters_149 as parameters };
    }
    export { items_27 as items };
}
declare namespace tagSet {
    const required_99: boolean;
    export { required_99 as required };
    const type_183: string;
    export { type_183 as type };
    const location_463: string;
    export { location_463 as location };
    const wrapper_7: string;
    export { wrapper_7 as wrapper };
    const sentAs_482: string;
    export { sentAs_482 as sentAs };
    export namespace items_30 {
        const type_184: string;
        export { type_184 as type };
        export namespace parameters_152 {
            export namespace Key_27 {
                const sentAs_483: string;
                export { sentAs_483 as sentAs };
            }
            export { Key_27 as Key };
            export namespace Value_2 {
                const sentAs_484: string;
                export { sentAs_484 as sentAs };
            }
            export { Value_2 as Value };
        }
        export { parameters_152 as parameters };
    }
    export { items_30 as items };
}
declare namespace replicationRules {
    const required_100: boolean;
    export { required_100 as required };
    const type_185: string;
    export { type_185 as type };
    const location_464: string;
    export { location_464 as location };
    const sentAs_485: string;
    export { sentAs_485 as sentAs };
    export namespace items_31 {
        const type_186: string;
        export { type_186 as type };
        export namespace parameters_153 {
            export namespace ID_8 {
                const sentAs_486: string;
                export { sentAs_486 as sentAs };
            }
            export { ID_8 as ID };
            export namespace Prefix_10 {
                const sentAs_487: string;
                export { sentAs_487 as sentAs };
            }
            export { Prefix_10 as Prefix };
            export namespace Status_1 {
                const sentAs_488: string;
                export { sentAs_488 as sentAs };
            }
            export { Status_1 as Status };
            export namespace Destination_1 {
                const type_187: string;
                export { type_187 as type };
                const sentAs_489: string;
                export { sentAs_489 as sentAs };
                export namespace parameters_154 {
                    export namespace Bucket_73 {
                        const sentAs_490: string;
                        export { sentAs_490 as sentAs };
                        const type_188: string;
                        export { type_188 as type };
                    }
                    export { Bucket_73 as Bucket };
                    export namespace StorageClass_19 {
                        const sentAs_491: string;
                        export { sentAs_491 as sentAs };
                        const type_189: string;
                        export { type_189 as type };
                    }
                    export { StorageClass_19 as StorageClass };
                }
                export { parameters_154 as parameters };
            }
            export { Destination_1 as Destination };
        }
        export { parameters_153 as parameters };
    }
    export { items_31 as items };
}
declare namespace initiator {
    const type_190: string;
    export { type_190 as type };
    const location_465: string;
    export { location_465 as location };
    const sentAs_492: string;
    export { sentAs_492 as sentAs };
    export namespace parameters_155 {
        export namespace ID_9 {
            const sentAs_493: string;
            export { sentAs_493 as sentAs };
        }
        export { ID_9 as ID };
        export namespace Name_6 {
            const sentAs_494: string;
            export { sentAs_494 as sentAs };
        }
        export { Name_6 as Name };
    }
    export { parameters_155 as parameters };
}
declare namespace InventoryConfiguration {
    const type_191: string;
    export { type_191 as type };
    const location_466: string;
    export { location_466 as location };
    const sentAs_495: string;
    export { sentAs_495 as sentAs };
    export namespace parameters_156 {
        export namespace Id_3 {
            const sentAs_496: string;
            export { sentAs_496 as sentAs };
        }
        export { Id_3 as Id };
        export namespace IsEnabled_1 {
            const sentAs_497: string;
            export { sentAs_497 as sentAs };
        }
        export { IsEnabled_1 as IsEnabled };
        export namespace Filter_3 {
            const type_192: string;
            export { type_192 as type };
            const sentAs_498: string;
            export { sentAs_498 as sentAs };
            export namespace parameters_157 {
                export namespace Prefix_11 {
                    const sentAs_499: string;
                    export { sentAs_499 as sentAs };
                }
                export { Prefix_11 as Prefix };
            }
            export { parameters_157 as parameters };
        }
        export { Filter_3 as Filter };
        export namespace Destination_2 {
            const type_193: string;
            export { type_193 as type };
            const sentAs_500: string;
            export { sentAs_500 as sentAs };
            export namespace parameters_158 {
                export namespace Format_1 {
                    const sentAs_501: string;
                    export { sentAs_501 as sentAs };
                }
                export { Format_1 as Format };
                export namespace Bucket_74 {
                    const sentAs_502: string;
                    export { sentAs_502 as sentAs };
                }
                export { Bucket_74 as Bucket };
                export namespace Prefix_12 {
                    const sentAs_503: string;
                    export { sentAs_503 as sentAs };
                }
                export { Prefix_12 as Prefix };
                export namespace Encryption {
                    const type_194: string;
                    export { type_194 as type };
                    const sentAs_504: string;
                    export { sentAs_504 as sentAs };
                    const parameters_159: {
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
                    export { parameters_159 as parameters };
                }
            }
            export { parameters_158 as parameters };
        }
        export { Destination_2 as Destination };
        export namespace Schedule_1 {
            const type_195: string;
            export { type_195 as type };
            const sentAs_505: string;
            export { sentAs_505 as sentAs };
            export namespace parameters_160 {
                export namespace Frequency_1 {
                    const sentAs_506: string;
                    export { sentAs_506 as sentAs };
                }
                export { Frequency_1 as Frequency };
            }
            export { parameters_160 as parameters };
        }
        export { Schedule_1 as Schedule };
        export namespace IncludedObjectVersions_1 {
            const sentAs_507: string;
            export { sentAs_507 as sentAs };
        }
        export { IncludedObjectVersions_1 as IncludedObjectVersions };
        export namespace OptionalFields_1 {
            const type_196: string;
            export { type_196 as type };
            const location_467: string;
            export { location_467 as location };
            const sentAs_508: string;
            export { sentAs_508 as sentAs };
            export namespace parameters_161 {
                export namespace Field_1 {
                    const type_197: string;
                    export { type_197 as type };
                    const sentAs_509: string;
                    export { sentAs_509 as sentAs };
                    export namespace items_32 {
                        const type_198: string;
                        export { type_198 as type };
                    }
                    export { items_32 as items };
                }
                export { Field_1 as Field };
            }
            export { parameters_161 as parameters };
        }
        export { OptionalFields_1 as OptionalFields };
    }
    export { parameters_156 as parameters };
}
declare namespace bucketEncryptionRule {
    const type_199: string;
    export { type_199 as type };
    const location_468: string;
    export { location_468 as location };
    const sentAs_510: string;
    export { sentAs_510 as sentAs };
    export namespace parameters_162 {
        export namespace ApplyServerSideEncryptionByDefault_1 {
            const type_200: string;
            export { type_200 as type };
            const sentAs_511: string;
            export { sentAs_511 as sentAs };
            export namespace parameters_163 {
                export namespace SSEAlgorithm_1 {
                    const sentAs_512: string;
                    export { sentAs_512 as sentAs };
                }
                export { SSEAlgorithm_1 as SSEAlgorithm };
                export namespace KMSMasterKeyID_1 {
                    const sentAs_513: string;
                    export { sentAs_513 as sentAs };
                }
                export { KMSMasterKeyID_1 as KMSMasterKeyID };
            }
            export { parameters_163 as parameters };
        }
        export { ApplyServerSideEncryptionByDefault_1 as ApplyServerSideEncryptionByDefault };
    }
    export { parameters_162 as parameters };
}
export namespace HeadBucket {
    const httpMethod: string;
    namespace parameters {
        namespace Bucket {
            const required: boolean;
            const location: string;
        }
    }
}
export namespace HeadApiVersion {
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
export namespace HeadApiVersionOutput {
    export namespace parameters_2 {
        namespace ApiVersion {
            const location_2: string;
            export { location_2 as location };
            export const sentAs: string;
        }
    }
    export { parameters_2 as parameters };
}
export namespace CreateBucket {
    const httpMethod_2: string;
    export { httpMethod_2 as httpMethod };
    export namespace data {
        const xmlRoot: string;
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
export namespace GetBucketMetadata {
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
export namespace GetBucketMetadataOutput {
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
export namespace DeleteBucket {
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
export namespace ListBuckets {
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
export namespace ListBucketsOutput {
    export namespace data_1 {
        export const type: string;
        const xmlRoot_1: string;
        export { xmlRoot_1 as xmlRoot };
    }
    export { data_1 as data };
    export namespace parameters_8 {
        namespace Buckets {
            const location_34: string;
            export { location_34 as location };
            const sentAs_29: string;
            export { sentAs_29 as sentAs };
            const type_1: string;
            export { type_1 as type };
            export const wrapper: string;
            export namespace items {
                const type_2: string;
                export { type_2 as type };
                const location_35: string;
                export { location_35 as location };
                const sentAs_30: string;
                export { sentAs_30 as sentAs };
                export namespace parameters_9 {
                    export namespace Name {
                        const sentAs_31: string;
                        export { sentAs_31 as sentAs };
                    }
                    export namespace CreationDate {
                        const sentAs_32: string;
                        export { sentAs_32 as sentAs };
                    }
                    export namespace Location_3 {
                        const sentAs_33: string;
                        export { sentAs_33 as sentAs };
                    }
                    export { Location_3 as Location };
                    export namespace ClusterType_2 {
                        const sentAs_34: string;
                        export { sentAs_34 as sentAs };
                    }
                    export { ClusterType_2 as ClusterType };
                }
                export { parameters_9 as parameters };
            }
        }
        namespace Owner {
            const type_3: string;
            export { type_3 as type };
            const location_36: string;
            export { location_36 as location };
            const sentAs_35: string;
            export { sentAs_35 as sentAs };
            export namespace parameters_10 {
                namespace ID {
                    const sentAs_36: string;
                    export { sentAs_36 as sentAs };
                }
                namespace DisplayName {
                    const sentAs_37: string;
                    export { sentAs_37 as sentAs };
                }
            }
            export { parameters_10 as parameters };
        }
    }
    export { parameters_8 as parameters };
}
export namespace ListObjects {
    const httpMethod_6: string;
    export { httpMethod_6 as httpMethod };
    export namespace parameters_11 {
        export namespace Bucket_5 {
            const required_4: boolean;
            export { required_4 as required };
            const location_37: string;
            export { location_37 as location };
        }
        export { Bucket_5 as Bucket };
        export namespace Prefix {
            const location_38: string;
            export { location_38 as location };
            const sentAs_38: string;
            export { sentAs_38 as sentAs };
        }
        export namespace Marker {
            const location_39: string;
            export { location_39 as location };
            const sentAs_39: string;
            export { sentAs_39 as sentAs };
        }
        export namespace MaxKeys {
            const type_4: string;
            export { type_4 as type };
            const location_40: string;
            export { location_40 as location };
            const sentAs_40: string;
            export { sentAs_40 as sentAs };
        }
        export namespace Delimiter {
            const location_41: string;
            export { location_41 as location };
            const sentAs_41: string;
            export { sentAs_41 as sentAs };
        }
    }
    export { parameters_11 as parameters };
}
export namespace ListObjectsOutput {
    export namespace data_2 {
        const type_5: string;
        export { type_5 as type };
        const xmlRoot_2: string;
        export { xmlRoot_2 as xmlRoot };
    }
    export { data_2 as data };
    export namespace parameters_12 {
        export namespace Location_4 {
            const location_42: string;
            export { location_42 as location };
            const sentAs_42: string;
            export { sentAs_42 as sentAs };
            const withPrefix_14: boolean;
            export { withPrefix_14 as withPrefix };
        }
        export { Location_4 as Location };
        export namespace Bucket_6 {
            const location_43: string;
            export { location_43 as location };
            const sentAs_43: string;
            export { sentAs_43 as sentAs };
        }
        export { Bucket_6 as Bucket };
        export namespace Delimiter_1 {
            const location_44: string;
            export { location_44 as location };
            const sentAs_44: string;
            export { sentAs_44 as sentAs };
        }
        export { Delimiter_1 as Delimiter };
        export namespace IsTruncated {
            const location_45: string;
            export { location_45 as location };
            const sentAs_45: string;
            export { sentAs_45 as sentAs };
        }
        export namespace Prefix_1 {
            const location_46: string;
            export { location_46 as location };
            const sentAs_46: string;
            export { sentAs_46 as sentAs };
        }
        export { Prefix_1 as Prefix };
        export namespace Marker_1 {
            const location_47: string;
            export { location_47 as location };
            const sentAs_47: string;
            export { sentAs_47 as sentAs };
        }
        export { Marker_1 as Marker };
        export namespace NextMarker {
            const location_48: string;
            export { location_48 as location };
            const sentAs_48: string;
            export { sentAs_48 as sentAs };
        }
        export namespace MaxKeys_1 {
            const location_49: string;
            export { location_49 as location };
            const sentAs_49: string;
            export { sentAs_49 as sentAs };
        }
        export { MaxKeys_1 as MaxKeys };
        export namespace Contents {
            const type_6: string;
            export { type_6 as type };
            const location_50: string;
            export { location_50 as location };
            const sentAs_50: string;
            export { sentAs_50 as sentAs };
            export namespace items_1 {
                const type_7: string;
                export { type_7 as type };
                export namespace parameters_13 {
                    export namespace Key {
                        const sentAs_51: string;
                        export { sentAs_51 as sentAs };
                    }
                    export namespace LastModified {
                        const sentAs_52: string;
                        export { sentAs_52 as sentAs };
                    }
                    export namespace ETag {
                        const sentAs_53: string;
                        export { sentAs_53 as sentAs };
                    }
                    export namespace Size {
                        const sentAs_54: string;
                        export { sentAs_54 as sentAs };
                    }
                    export namespace Type_1 {
                        const sentAs_55: string;
                        export { sentAs_55 as sentAs };
                    }
                    export { Type_1 as Type };
                    export namespace StorageClass_1 {
                        const sentAs_56: string;
                        export { sentAs_56 as sentAs };
                    }
                    export { StorageClass_1 as StorageClass };
                    export { owner as Owner };
                }
                export { parameters_13 as parameters };
            }
            export { items_1 as items };
        }
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_12 as parameters };
}
export namespace ListVersions {
    const httpMethod_7: string;
    export { httpMethod_7 as httpMethod };
    const urlPath_1: string;
    export { urlPath_1 as urlPath };
    export namespace parameters_14 {
        export namespace Bucket_7 {
            const required_5: boolean;
            export { required_5 as required };
            const location_51: string;
            export { location_51 as location };
        }
        export { Bucket_7 as Bucket };
        export namespace Prefix_2 {
            const location_52: string;
            export { location_52 as location };
            const sentAs_57: string;
            export { sentAs_57 as sentAs };
        }
        export { Prefix_2 as Prefix };
        export namespace KeyMarker {
            const location_53: string;
            export { location_53 as location };
            const sentAs_58: string;
            export { sentAs_58 as sentAs };
        }
        export namespace MaxKeys_2 {
            const type_8: string;
            export { type_8 as type };
            const location_54: string;
            export { location_54 as location };
            const sentAs_59: string;
            export { sentAs_59 as sentAs };
        }
        export { MaxKeys_2 as MaxKeys };
        export namespace Delimiter_2 {
            const location_55: string;
            export { location_55 as location };
            const sentAs_60: string;
            export { sentAs_60 as sentAs };
        }
        export { Delimiter_2 as Delimiter };
        export namespace VersionIdMarker {
            const location_56: string;
            export { location_56 as location };
            const sentAs_61: string;
            export { sentAs_61 as sentAs };
        }
    }
    export { parameters_14 as parameters };
}
export namespace ListVersionsOutput {
    export namespace data_3 {
        const type_9: string;
        export { type_9 as type };
        const xmlRoot_3: string;
        export { xmlRoot_3 as xmlRoot };
    }
    export { data_3 as data };
    export namespace parameters_15 {
        export namespace Location_5 {
            const location_57: string;
            export { location_57 as location };
            const sentAs_62: string;
            export { sentAs_62 as sentAs };
            const withPrefix_15: boolean;
            export { withPrefix_15 as withPrefix };
        }
        export { Location_5 as Location };
        export namespace Bucket_8 {
            const location_58: string;
            export { location_58 as location };
            const sentAs_63: string;
            export { sentAs_63 as sentAs };
        }
        export { Bucket_8 as Bucket };
        export namespace Prefix_3 {
            const location_59: string;
            export { location_59 as location };
            const sentAs_64: string;
            export { sentAs_64 as sentAs };
        }
        export { Prefix_3 as Prefix };
        export namespace Delimiter_3 {
            const location_60: string;
            export { location_60 as location };
            const sentAs_65: string;
            export { sentAs_65 as sentAs };
        }
        export { Delimiter_3 as Delimiter };
        export namespace KeyMarker_1 {
            const location_61: string;
            export { location_61 as location };
            const sentAs_66: string;
            export { sentAs_66 as sentAs };
        }
        export { KeyMarker_1 as KeyMarker };
        export namespace VersionIdMarker_1 {
            const location_62: string;
            export { location_62 as location };
            const sentAs_67: string;
            export { sentAs_67 as sentAs };
        }
        export { VersionIdMarker_1 as VersionIdMarker };
        export namespace NextKeyMarker {
            const location_63: string;
            export { location_63 as location };
            const sentAs_68: string;
            export { sentAs_68 as sentAs };
        }
        export namespace NextVersionIdMarker {
            const location_64: string;
            export { location_64 as location };
            const sentAs_69: string;
            export { sentAs_69 as sentAs };
        }
        export namespace MaxKeys_3 {
            const location_65: string;
            export { location_65 as location };
            const sentAs_70: string;
            export { sentAs_70 as sentAs };
        }
        export { MaxKeys_3 as MaxKeys };
        export namespace IsTruncated_1 {
            const location_66: string;
            export { location_66 as location };
            const sentAs_71: string;
            export { sentAs_71 as sentAs };
        }
        export { IsTruncated_1 as IsTruncated };
        export namespace Versions {
            const type_10: string;
            export { type_10 as type };
            const location_67: string;
            export { location_67 as location };
            const sentAs_72: string;
            export { sentAs_72 as sentAs };
            export namespace items_2 {
                const type_11: string;
                export { type_11 as type };
                export namespace parameters_16 {
                    export namespace Key_1 {
                        const sentAs_73: string;
                        export { sentAs_73 as sentAs };
                    }
                    export { Key_1 as Key };
                    export namespace VersionId {
                        const sentAs_74: string;
                        export { sentAs_74 as sentAs };
                    }
                    export namespace IsLatest {
                        const sentAs_75: string;
                        export { sentAs_75 as sentAs };
                    }
                    export namespace LastModified_1 {
                        const sentAs_76: string;
                        export { sentAs_76 as sentAs };
                    }
                    export { LastModified_1 as LastModified };
                    export namespace ETag_1 {
                        const sentAs_77: string;
                        export { sentAs_77 as sentAs };
                    }
                    export { ETag_1 as ETag };
                    export namespace Size_1 {
                        const sentAs_78: string;
                        export { sentAs_78 as sentAs };
                    }
                    export { Size_1 as Size };
                    export namespace Type_2 {
                        const sentAs_79: string;
                        export { sentAs_79 as sentAs };
                    }
                    export { Type_2 as Type };
                    export { owner as Owner };
                    export namespace StorageClass_2 {
                        const sentAs_80: string;
                        export { sentAs_80 as sentAs };
                    }
                    export { StorageClass_2 as StorageClass };
                }
                export { parameters_16 as parameters };
            }
            export { items_2 as items };
        }
        export namespace DeleteMarkers {
            const type_12: string;
            export { type_12 as type };
            const location_68: string;
            export { location_68 as location };
            const sentAs_81: string;
            export { sentAs_81 as sentAs };
            export namespace items_3 {
                const type_13: string;
                export { type_13 as type };
                export namespace parameters_17 {
                    export namespace Key_2 {
                        const sentAs_82: string;
                        export { sentAs_82 as sentAs };
                    }
                    export { Key_2 as Key };
                    export namespace VersionId_1 {
                        const sentAs_83: string;
                        export { sentAs_83 as sentAs };
                    }
                    export { VersionId_1 as VersionId };
                    export namespace IsLatest_1 {
                        const sentAs_84: string;
                        export { sentAs_84 as sentAs };
                    }
                    export { IsLatest_1 as IsLatest };
                    export namespace LastModified_2 {
                        const sentAs_85: string;
                        export { sentAs_85 as sentAs };
                    }
                    export { LastModified_2 as LastModified };
                    export { owner as Owner };
                }
                export { parameters_17 as parameters };
            }
            export { items_3 as items };
        }
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_15 as parameters };
}
export namespace GetBucketLocation {
    const httpMethod_8: string;
    export { httpMethod_8 as httpMethod };
    const urlPath_2: string;
    export { urlPath_2 as urlPath };
    export namespace parameters_18 {
        export namespace Bucket_9 {
            const required_6: boolean;
            export { required_6 as required };
            const location_69: string;
            export { location_69 as location };
        }
        export { Bucket_9 as Bucket };
    }
    export { parameters_18 as parameters };
}
export namespace GetBucketLocationOutput {
    export namespace data_4 {
        const type_14: string;
        export { type_14 as type };
        const xmlRoot_4: string;
        export { xmlRoot_4 as xmlRoot };
    }
    export { data_4 as data };
    export namespace parameters_19 {
        export namespace Location_6 {
            const location_70: string;
            export { location_70 as location };
            const sentAs_86: string;
            export { sentAs_86 as sentAs };
        }
        export { Location_6 as Location };
    }
    export { parameters_19 as parameters };
}
export namespace GetBucketStorageInfo {
    const httpMethod_9: string;
    export { httpMethod_9 as httpMethod };
    const urlPath_3: string;
    export { urlPath_3 as urlPath };
    export namespace parameters_20 {
        export namespace Bucket_10 {
            const required_7: boolean;
            export { required_7 as required };
            const location_71: string;
            export { location_71 as location };
        }
        export { Bucket_10 as Bucket };
    }
    export { parameters_20 as parameters };
}
export namespace GetBucketStorageInfoOutput {
    export namespace data_5 {
        const type_15: string;
        export { type_15 as type };
        const xmlRoot_5: string;
        export { xmlRoot_5 as xmlRoot };
    }
    export { data_5 as data };
    export namespace parameters_21 {
        export namespace Size_2 {
            const location_72: string;
            export { location_72 as location };
            const sentAs_87: string;
            export { sentAs_87 as sentAs };
        }
        export { Size_2 as Size };
        export namespace ObjectNumber {
            const location_73: string;
            export { location_73 as location };
            const sentAs_88: string;
            export { sentAs_88 as sentAs };
        }
    }
    export { parameters_21 as parameters };
}
export namespace SetBucketQuota {
    const httpMethod_10: string;
    export { httpMethod_10 as httpMethod };
    const urlPath_4: string;
    export { urlPath_4 as urlPath };
    export namespace data_6 {
        const xmlRoot_6: string;
        export { xmlRoot_6 as xmlRoot };
    }
    export { data_6 as data };
    export namespace parameters_22 {
        export namespace Bucket_11 {
            const required_8: boolean;
            export { required_8 as required };
            const location_74: string;
            export { location_74 as location };
        }
        export { Bucket_11 as Bucket };
        export namespace StorageQuota {
            const required_9: boolean;
            export { required_9 as required };
            const location_75: string;
            export { location_75 as location };
            const sentAs_89: string;
            export { sentAs_89 as sentAs };
        }
    }
    export { parameters_22 as parameters };
}
export namespace GetBucketQuota {
    const httpMethod_11: string;
    export { httpMethod_11 as httpMethod };
    const urlPath_5: string;
    export { urlPath_5 as urlPath };
    export namespace parameters_23 {
        export namespace Bucket_12 {
            const required_10: boolean;
            export { required_10 as required };
            const location_76: string;
            export { location_76 as location };
        }
        export { Bucket_12 as Bucket };
    }
    export { parameters_23 as parameters };
}
export namespace GetBucketQuotaOutput {
    export namespace data_7 {
        const type_16: string;
        export { type_16 as type };
        const xmlRoot_7: string;
        export { xmlRoot_7 as xmlRoot };
    }
    export { data_7 as data };
    export namespace parameters_24 {
        export namespace StorageQuota_1 {
            const location_77: string;
            export { location_77 as location };
            const sentAs_90: string;
            export { sentAs_90 as sentAs };
        }
        export { StorageQuota_1 as StorageQuota };
    }
    export { parameters_24 as parameters };
}
export namespace SetBucketAcl {
    const httpMethod_12: string;
    export { httpMethod_12 as httpMethod };
    const urlPath_6: string;
    export { urlPath_6 as urlPath };
    export namespace data_8 {
        const xmlRoot_8: string;
        export { xmlRoot_8 as xmlRoot };
    }
    export { data_8 as data };
    export namespace parameters_25 {
        export namespace Bucket_13 {
            const required_11: boolean;
            export { required_11 as required };
            const location_78: string;
            export { location_78 as location };
        }
        export { Bucket_13 as Bucket };
        export namespace ACL_1 {
            const location_79: string;
            export { location_79 as location };
            const sentAs_91: string;
            export { sentAs_91 as sentAs };
            const withPrefix_16: boolean;
            export { withPrefix_16 as withPrefix };
            const type_17: string;
            export { type_17 as type };
        }
        export { ACL_1 as ACL };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_25 as parameters };
}
export namespace GetBucketAcl {
    const httpMethod_13: string;
    export { httpMethod_13 as httpMethod };
    const urlPath_7: string;
    export { urlPath_7 as urlPath };
    export namespace parameters_26 {
        export namespace Bucket_14 {
            const required_12: boolean;
            export { required_12 as required };
            const location_80: string;
            export { location_80 as location };
        }
        export { Bucket_14 as Bucket };
    }
    export { parameters_26 as parameters };
}
export namespace GetBucketAclOutput {
    export namespace data_9 {
        const type_18: string;
        export { type_18 as type };
        const xmlRoot_9: string;
        export { xmlRoot_9 as xmlRoot };
    }
    export { data_9 as data };
    export namespace parameters_27 {
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_27 as parameters };
}
export namespace SetBucketLoggingConfiguration {
    const httpMethod_14: string;
    export { httpMethod_14 as httpMethod };
    const urlPath_8: string;
    export { urlPath_8 as urlPath };
    export namespace data_10 {
        const xmlRoot_10: string;
        export { xmlRoot_10 as xmlRoot };
        export const xmlAllowEmpty: boolean;
    }
    export { data_10 as data };
    export namespace parameters_28 {
        export namespace Bucket_15 {
            const required_13: boolean;
            export { required_13 as required };
            const location_81: string;
            export { location_81 as location };
        }
        export { Bucket_15 as Bucket };
        export { loggingEnabled as LoggingEnabled };
    }
    export { parameters_28 as parameters };
}
export namespace GetBucketLoggingConfiguration {
    const httpMethod_15: string;
    export { httpMethod_15 as httpMethod };
    const urlPath_9: string;
    export { urlPath_9 as urlPath };
    export namespace parameters_29 {
        export namespace Bucket_16 {
            const required_14: boolean;
            export { required_14 as required };
            const location_82: string;
            export { location_82 as location };
        }
        export { Bucket_16 as Bucket };
    }
    export { parameters_29 as parameters };
}
export namespace GetBucketLoggingConfigurationOutput {
    export namespace data_11 {
        const type_19: string;
        export { type_19 as type };
        const xmlRoot_11: string;
        export { xmlRoot_11 as xmlRoot };
    }
    export { data_11 as data };
    export namespace parameters_30 {
        export { loggingEnabled as LoggingEnabled };
    }
    export { parameters_30 as parameters };
}
export namespace SetBucketPolicy {
    const httpMethod_16: string;
    export { httpMethod_16 as httpMethod };
    const urlPath_10: string;
    export { urlPath_10 as urlPath };
    export namespace parameters_31 {
        export namespace Bucket_17 {
            const required_15: boolean;
            export { required_15 as required };
            const location_83: string;
            export { location_83 as location };
        }
        export { Bucket_17 as Bucket };
        export namespace Policy {
            const required_16: boolean;
            export { required_16 as required };
            const location_84: string;
            export { location_84 as location };
        }
    }
    export { parameters_31 as parameters };
}
export namespace GetBucketPolicy {
    const httpMethod_17: string;
    export { httpMethod_17 as httpMethod };
    const urlPath_11: string;
    export { urlPath_11 as urlPath };
    export namespace parameters_32 {
        export namespace Bucket_18 {
            const required_17: boolean;
            export { required_17 as required };
            const location_85: string;
            export { location_85 as location };
        }
        export { Bucket_18 as Bucket };
    }
    export { parameters_32 as parameters };
}
export namespace GetBucketPolicyOutput {
    export namespace data_12 {
        const type_20: string;
        export { type_20 as type };
    }
    export { data_12 as data };
    export namespace parameters_33 {
        export namespace Policy_1 {
            const location_86: string;
            export { location_86 as location };
        }
        export { Policy_1 as Policy };
    }
    export { parameters_33 as parameters };
}
export namespace DeleteBucketPolicy {
    const httpMethod_18: string;
    export { httpMethod_18 as httpMethod };
    const urlPath_12: string;
    export { urlPath_12 as urlPath };
    export namespace parameters_34 {
        export namespace Bucket_19 {
            const required_18: boolean;
            export { required_18 as required };
            const location_87: string;
            export { location_87 as location };
        }
        export { Bucket_19 as Bucket };
    }
    export { parameters_34 as parameters };
}
export namespace SetBucketDisPolicy {
    const httpMethod_19: string;
    export { httpMethod_19 as httpMethod };
    export namespace parameters_35 {
        export namespace Bucket_20 {
            const required_19: boolean;
            export { required_19 as required };
            const location_88: string;
            export { location_88 as location };
        }
        export { Bucket_20 as Bucket };
        export namespace ApiPath {
            const location_89: string;
            export { location_89 as location };
        }
        export namespace OEFMarker {
            const location_90: string;
            export { location_90 as location };
            const sentAs_92: string;
            export { sentAs_92 as sentAs };
        }
        export namespace Rules {
            const required_20: boolean;
            export { required_20 as required };
            const location_91: string;
            export { location_91 as location };
        }
    }
    export { parameters_35 as parameters };
}
export namespace GetBucketDisPolicy {
    const httpMethod_20: string;
    export { httpMethod_20 as httpMethod };
    export namespace parameters_36 {
        export namespace Bucket_21 {
            const required_21: boolean;
            export { required_21 as required };
            const location_92: string;
            export { location_92 as location };
        }
        export { Bucket_21 as Bucket };
        export namespace ApiPath_1 {
            const location_93: string;
            export { location_93 as location };
        }
        export { ApiPath_1 as ApiPath };
        export namespace OEFMarker_1 {
            const location_94: string;
            export { location_94 as location };
            const sentAs_93: string;
            export { sentAs_93 as sentAs };
        }
        export { OEFMarker_1 as OEFMarker };
    }
    export { parameters_36 as parameters };
}
export namespace GetBucketDisPolicyOutput {
    export namespace data_13 {
        const type_21: string;
        export { type_21 as type };
    }
    export { data_13 as data };
    export namespace parameters_37 {
        export namespace Rules_1 {
            const location_95: string;
            export { location_95 as location };
        }
        export { Rules_1 as Rules };
    }
    export { parameters_37 as parameters };
}
export namespace DeleteBucketDisPolicy {
    const httpMethod_21: string;
    export { httpMethod_21 as httpMethod };
    export namespace parameters_38 {
        export namespace Bucket_22 {
            const required_22: boolean;
            export { required_22 as required };
            const location_96: string;
            export { location_96 as location };
        }
        export { Bucket_22 as Bucket };
        export namespace ApiPath_2 {
            const location_97: string;
            export { location_97 as location };
        }
        export { ApiPath_2 as ApiPath };
        export namespace OEFMarker_2 {
            const location_98: string;
            export { location_98 as location };
            const sentAs_94: string;
            export { sentAs_94 as sentAs };
        }
        export { OEFMarker_2 as OEFMarker };
    }
    export { parameters_38 as parameters };
}
export namespace SetBucketLifecycleConfiguration {
    const httpMethod_22: string;
    export { httpMethod_22 as httpMethod };
    const urlPath_13: string;
    export { urlPath_13 as urlPath };
    export namespace data_14 {
        const xmlRoot_12: string;
        export { xmlRoot_12 as xmlRoot };
        export const md5: boolean;
    }
    export { data_14 as data };
    export namespace parameters_39 {
        export namespace Bucket_23 {
            const required_23: boolean;
            export { required_23 as required };
            const location_99: string;
            export { location_99 as location };
        }
        export { Bucket_23 as Bucket };
        export { rules as Rules };
    }
    export { parameters_39 as parameters };
}
export namespace GetBucketLifecycleConfiguration {
    const httpMethod_23: string;
    export { httpMethod_23 as httpMethod };
    const urlPath_14: string;
    export { urlPath_14 as urlPath };
    export namespace parameters_40 {
        export namespace Bucket_24 {
            const required_24: boolean;
            export { required_24 as required };
            const location_100: string;
            export { location_100 as location };
        }
        export { Bucket_24 as Bucket };
    }
    export { parameters_40 as parameters };
}
export namespace GetBucketLifecycleConfigurationOutput {
    export namespace data_15 {
        const type_22: string;
        export { type_22 as type };
        const xmlRoot_13: string;
        export { xmlRoot_13 as xmlRoot };
    }
    export { data_15 as data };
    export namespace parameters_41 {
        export { rules as Rules };
    }
    export { parameters_41 as parameters };
}
export namespace DeleteBucketLifecycleConfiguration {
    const httpMethod_24: string;
    export { httpMethod_24 as httpMethod };
    const urlPath_15: string;
    export { urlPath_15 as urlPath };
    export namespace parameters_42 {
        export namespace Bucket_25 {
            const required_25: boolean;
            export { required_25 as required };
            const location_101: string;
            export { location_101 as location };
        }
        export { Bucket_25 as Bucket };
    }
    export { parameters_42 as parameters };
}
export namespace SetBucketWebsiteConfiguration {
    const httpMethod_25: string;
    export { httpMethod_25 as httpMethod };
    const urlPath_16: string;
    export { urlPath_16 as urlPath };
    export namespace data_16 {
        const xmlRoot_14: string;
        export { xmlRoot_14 as xmlRoot };
    }
    export { data_16 as data };
    export namespace parameters_43 {
        export namespace Bucket_26 {
            const required_26: boolean;
            export { required_26 as required };
            const location_102: string;
            export { location_102 as location };
        }
        export { Bucket_26 as Bucket };
        export { redirectAllRequestsTo as RedirectAllRequestsTo };
        export { indexDocument as IndexDocument };
        export { errorDocument as ErrorDocument };
        export { routingRules as RoutingRules };
    }
    export { parameters_43 as parameters };
}
export namespace GetBucketWebsiteConfiguration {
    const httpMethod_26: string;
    export { httpMethod_26 as httpMethod };
    const urlPath_17: string;
    export { urlPath_17 as urlPath };
    export namespace parameters_44 {
        export namespace Bucket_27 {
            const required_27: boolean;
            export { required_27 as required };
            const location_103: string;
            export { location_103 as location };
        }
        export { Bucket_27 as Bucket };
    }
    export { parameters_44 as parameters };
}
export namespace GetBucketWebsiteConfigurationOutput {
    export namespace data_17 {
        const type_23: string;
        export { type_23 as type };
        const xmlRoot_15: string;
        export { xmlRoot_15 as xmlRoot };
    }
    export { data_17 as data };
    export namespace parameters_45 {
        export { redirectAllRequestsTo as RedirectAllRequestsTo };
        export { indexDocument as IndexDocument };
        export { errorDocument as ErrorDocument };
        export { routingRules as RoutingRules };
    }
    export { parameters_45 as parameters };
}
export namespace DeleteBucketWebsiteConfiguration {
    const httpMethod_27: string;
    export { httpMethod_27 as httpMethod };
    const urlPath_18: string;
    export { urlPath_18 as urlPath };
    export namespace parameters_46 {
        export namespace Bucket_28 {
            const required_28: boolean;
            export { required_28 as required };
            const location_104: string;
            export { location_104 as location };
        }
        export { Bucket_28 as Bucket };
    }
    export { parameters_46 as parameters };
}
export namespace SetBucketVersioningConfiguration {
    const httpMethod_28: string;
    export { httpMethod_28 as httpMethod };
    const urlPath_19: string;
    export { urlPath_19 as urlPath };
    export namespace data_18 {
        const xmlRoot_16: string;
        export { xmlRoot_16 as xmlRoot };
    }
    export { data_18 as data };
    export namespace parameters_47 {
        export namespace Bucket_29 {
            const required_29: boolean;
            export { required_29 as required };
            const location_105: string;
            export { location_105 as location };
        }
        export { Bucket_29 as Bucket };
        export namespace VersionStatus {
            const required_30: boolean;
            export { required_30 as required };
            const location_106: string;
            export { location_106 as location };
            const sentAs_95: string;
            export { sentAs_95 as sentAs };
        }
    }
    export { parameters_47 as parameters };
}
export namespace GetBucketVersioningConfiguration {
    const httpMethod_29: string;
    export { httpMethod_29 as httpMethod };
    const urlPath_20: string;
    export { urlPath_20 as urlPath };
    export namespace parameters_48 {
        export namespace Bucket_30 {
            const required_31: boolean;
            export { required_31 as required };
            const location_107: string;
            export { location_107 as location };
        }
        export { Bucket_30 as Bucket };
    }
    export { parameters_48 as parameters };
}
export namespace GetBucketVersioningConfigurationOutput {
    export namespace data_19 {
        const type_24: string;
        export { type_24 as type };
        const xmlRoot_17: string;
        export { xmlRoot_17 as xmlRoot };
    }
    export { data_19 as data };
    export namespace parameters_49 {
        export namespace VersionStatus_1 {
            const location_108: string;
            export { location_108 as location };
            const sentAs_96: string;
            export { sentAs_96 as sentAs };
        }
        export { VersionStatus_1 as VersionStatus };
    }
    export { parameters_49 as parameters };
}
export namespace SetBucketCors {
    const httpMethod_30: string;
    export { httpMethod_30 as httpMethod };
    const urlPath_21: string;
    export { urlPath_21 as urlPath };
    export namespace data_20 {
        const xmlRoot_18: string;
        export { xmlRoot_18 as xmlRoot };
        const md5_1: boolean;
        export { md5_1 as md5 };
    }
    export { data_20 as data };
    export namespace parameters_50 {
        export namespace Bucket_31 {
            const required_32: boolean;
            export { required_32 as required };
            const location_109: string;
            export { location_109 as location };
        }
        export { Bucket_31 as Bucket };
        export { corsRule as CorsRules };
    }
    export { parameters_50 as parameters };
}
export namespace GetBucketCors {
    const httpMethod_31: string;
    export { httpMethod_31 as httpMethod };
    const urlPath_22: string;
    export { urlPath_22 as urlPath };
    export namespace parameters_51 {
        export namespace Bucket_32 {
            const required_33: boolean;
            export { required_33 as required };
            const location_110: string;
            export { location_110 as location };
        }
        export { Bucket_32 as Bucket };
    }
    export { parameters_51 as parameters };
}
export namespace GetBucketCorsOutput {
    export namespace data_21 {
        const type_25: string;
        export { type_25 as type };
        const xmlRoot_19: string;
        export { xmlRoot_19 as xmlRoot };
    }
    export { data_21 as data };
    export namespace parameters_52 {
        export { corsRule as CorsRules };
    }
    export { parameters_52 as parameters };
}
export namespace DeleteBucketCors {
    const httpMethod_32: string;
    export { httpMethod_32 as httpMethod };
    const urlPath_23: string;
    export { urlPath_23 as urlPath };
    export namespace parameters_53 {
        export namespace Bucket_33 {
            const required_34: boolean;
            export { required_34 as required };
            const location_111: string;
            export { location_111 as location };
        }
        export { Bucket_33 as Bucket };
    }
    export { parameters_53 as parameters };
}
export namespace SetBucketNotification {
    const httpMethod_33: string;
    export { httpMethod_33 as httpMethod };
    const urlPath_24: string;
    export { urlPath_24 as urlPath };
    export namespace data_22 {
        const xmlRoot_20: string;
        export { xmlRoot_20 as xmlRoot };
        const xmlAllowEmpty_1: boolean;
        export { xmlAllowEmpty_1 as xmlAllowEmpty };
    }
    export { data_22 as data };
    export namespace parameters_54 {
        export namespace Bucket_34 {
            const required_35: boolean;
            export { required_35 as required };
            const location_112: string;
            export { location_112 as location };
        }
        export { Bucket_34 as Bucket };
        export { topicConfiguration as TopicConfigurations };
        export { functionGraphConfiguration as FunctionGraphConfigurations };
    }
    export { parameters_54 as parameters };
}
export namespace GetBucketNotification {
    const httpMethod_34: string;
    export { httpMethod_34 as httpMethod };
    const urlPath_25: string;
    export { urlPath_25 as urlPath };
    export namespace parameters_55 {
        export namespace Bucket_35 {
            const required_36: boolean;
            export { required_36 as required };
            const location_113: string;
            export { location_113 as location };
        }
        export { Bucket_35 as Bucket };
    }
    export { parameters_55 as parameters };
}
export namespace GetBucketNotificationOutput {
    export namespace data_23 {
        const type_26: string;
        export { type_26 as type };
        const xmlRoot_21: string;
        export { xmlRoot_21 as xmlRoot };
    }
    export { data_23 as data };
    export namespace parameters_56 {
        export { topicConfiguration as TopicConfigurations };
        export { functionGraphConfiguration as FunctionGraphConfigurations };
    }
    export { parameters_56 as parameters };
}
export namespace SetBucketTagging {
    const httpMethod_35: string;
    export { httpMethod_35 as httpMethod };
    const urlPath_26: string;
    export { urlPath_26 as urlPath };
    export namespace data_24 {
        const xmlRoot_22: string;
        export { xmlRoot_22 as xmlRoot };
        const md5_2: boolean;
        export { md5_2 as md5 };
    }
    export { data_24 as data };
    export namespace parameters_57 {
        export namespace Bucket_36 {
            const required_37: boolean;
            export { required_37 as required };
            const location_114: string;
            export { location_114 as location };
        }
        export { Bucket_36 as Bucket };
        export { tagSet as Tags };
    }
    export { parameters_57 as parameters };
}
export namespace DeleteBucketTagging {
    const httpMethod_36: string;
    export { httpMethod_36 as httpMethod };
    const urlPath_27: string;
    export { urlPath_27 as urlPath };
    export namespace parameters_58 {
        export namespace Bucket_37 {
            const required_38: boolean;
            export { required_38 as required };
            const location_115: string;
            export { location_115 as location };
        }
        export { Bucket_37 as Bucket };
    }
    export { parameters_58 as parameters };
}
export namespace GetBucketTagging {
    const httpMethod_37: string;
    export { httpMethod_37 as httpMethod };
    const urlPath_28: string;
    export { urlPath_28 as urlPath };
    export namespace parameters_59 {
        export namespace Bucket_38 {
            const required_39: boolean;
            export { required_39 as required };
            const location_116: string;
            export { location_116 as location };
        }
        export { Bucket_38 as Bucket };
    }
    export { parameters_59 as parameters };
}
export namespace GetBucketTaggingOutput {
    export namespace data_25 {
        const type_27: string;
        export { type_27 as type };
        const xmlRoot_23: string;
        export { xmlRoot_23 as xmlRoot };
    }
    export { data_25 as data };
    export namespace parameters_60 {
        export { tagSet as Tags };
    }
    export { parameters_60 as parameters };
}
export namespace SetBucketStoragePolicy {
    const httpMethod_38: string;
    export { httpMethod_38 as httpMethod };
    const urlPath_29: string;
    export { urlPath_29 as urlPath };
    export namespace data_26 {
        const xmlRoot_24: string;
        export { xmlRoot_24 as xmlRoot };
    }
    export { data_26 as data };
    export namespace parameters_61 {
        export namespace Bucket_39 {
            const required_40: boolean;
            export { required_40 as required };
            const location_117: string;
            export { location_117 as location };
        }
        export { Bucket_39 as Bucket };
        export namespace StorageClass_3 {
            const required_41: boolean;
            export { required_41 as required };
            const location_118: string;
            export { location_118 as location };
            const type_28: string;
            export { type_28 as type };
            const sentAs_97: string;
            export { sentAs_97 as sentAs };
        }
        export { StorageClass_3 as StorageClass };
    }
    export { parameters_61 as parameters };
}
export namespace GetBucketStoragePolicy {
    const httpMethod_39: string;
    export { httpMethod_39 as httpMethod };
    const urlPath_30: string;
    export { urlPath_30 as urlPath };
    export namespace parameters_62 {
        export namespace Bucket_40 {
            const required_42: boolean;
            export { required_42 as required };
            const location_119: string;
            export { location_119 as location };
        }
        export { Bucket_40 as Bucket };
    }
    export { parameters_62 as parameters };
}
export namespace GetBucketStoragePolicyOutput {
    export namespace data_27 {
        const type_29: string;
        export { type_29 as type };
        const xmlRoot_25: string;
        export { xmlRoot_25 as xmlRoot };
    }
    export { data_27 as data };
    export namespace parameters_63 {
        export namespace StorageClass_4 {
            const location_120: string;
            export { location_120 as location };
            const type_30: string;
            export { type_30 as type };
            const sentAs_98: string;
            export { sentAs_98 as sentAs };
        }
        export { StorageClass_4 as StorageClass };
    }
    export { parameters_63 as parameters };
}
export namespace SetBucketReplication {
    const httpMethod_40: string;
    export { httpMethod_40 as httpMethod };
    const urlPath_31: string;
    export { urlPath_31 as urlPath };
    export namespace data_28 {
        const xmlRoot_26: string;
        export { xmlRoot_26 as xmlRoot };
        const md5_3: boolean;
        export { md5_3 as md5 };
    }
    export { data_28 as data };
    export namespace parameters_64 {
        export namespace Bucket_41 {
            const required_43: boolean;
            export { required_43 as required };
            const location_121: string;
            export { location_121 as location };
        }
        export { Bucket_41 as Bucket };
        export namespace Agency {
            const location_122: string;
            export { location_122 as location };
            const sentAs_99: string;
            export { sentAs_99 as sentAs };
        }
        export { replicationRules as Rules };
    }
    export { parameters_64 as parameters };
}
export namespace GetBucketReplication {
    const httpMethod_41: string;
    export { httpMethod_41 as httpMethod };
    const urlPath_32: string;
    export { urlPath_32 as urlPath };
    export namespace parameters_65 {
        export namespace Bucket_42 {
            const required_44: boolean;
            export { required_44 as required };
            const location_123: string;
            export { location_123 as location };
        }
        export { Bucket_42 as Bucket };
    }
    export { parameters_65 as parameters };
}
export namespace GetBucketReplicationOutput {
    export namespace data_29 {
        const type_31: string;
        export { type_31 as type };
        const xmlRoot_27: string;
        export { xmlRoot_27 as xmlRoot };
    }
    export { data_29 as data };
    export namespace parameters_66 {
        export namespace Agency_1 {
            const location_124: string;
            export { location_124 as location };
            const sentAs_100: string;
            export { sentAs_100 as sentAs };
        }
        export { Agency_1 as Agency };
        export { replicationRules as Rules };
    }
    export { parameters_66 as parameters };
}
export namespace DeleteBucketReplication {
    const httpMethod_42: string;
    export { httpMethod_42 as httpMethod };
    const urlPath_33: string;
    export { urlPath_33 as urlPath };
    export namespace parameters_67 {
        export namespace Bucket_43 {
            const required_45: boolean;
            export { required_45 as required };
            const location_125: string;
            export { location_125 as location };
        }
        export { Bucket_43 as Bucket };
    }
    export { parameters_67 as parameters };
}
export namespace PutObject {
    const httpMethod_43: string;
    export { httpMethod_43 as httpMethod };
    export namespace parameters_68 {
        export namespace Bucket_44 {
            const required_46: boolean;
            export { required_46 as required };
            const location_126: string;
            export { location_126 as location };
        }
        export { Bucket_44 as Bucket };
        export namespace Key_3 {
            const required_47: boolean;
            export { required_47 as required };
            const location_127: string;
            export { location_127 as location };
        }
        export { Key_3 as Key };
        export namespace ContentMD5 {
            const location_128: string;
            export { location_128 as location };
            const sentAs_101: string;
            export { sentAs_101 as sentAs };
        }
        export namespace ContentType {
            const location_129: string;
            export { location_129 as location };
            const sentAs_102: string;
            export { sentAs_102 as sentAs };
        }
        export namespace Offset {
            const type_32: string;
            export { type_32 as type };
        }
        export namespace ContentLength {
            const location_130: string;
            export { location_130 as location };
            const sentAs_103: string;
            export { sentAs_103 as sentAs };
            const type_33: string;
            export { type_33 as type };
        }
        export namespace ACL_2 {
            const location_131: string;
            export { location_131 as location };
            const sentAs_104: string;
            export { sentAs_104 as sentAs };
            const withPrefix_17: boolean;
            export { withPrefix_17 as withPrefix };
            const type_34: string;
            export { type_34 as type };
        }
        export { ACL_2 as ACL };
        export namespace GrantRead_1 {
            const location_132: string;
            export { location_132 as location };
            const sentAs_105: string;
            export { sentAs_105 as sentAs };
            const withPrefix_18: boolean;
            export { withPrefix_18 as withPrefix };
        }
        export { GrantRead_1 as GrantRead };
        export namespace GrantReadAcp {
            const location_133: string;
            export { location_133 as location };
            const sentAs_106: string;
            export { sentAs_106 as sentAs };
            const withPrefix_19: boolean;
            export { withPrefix_19 as withPrefix };
        }
        export namespace GrantWriteAcp {
            const location_134: string;
            export { location_134 as location };
            const sentAs_107: string;
            export { sentAs_107 as sentAs };
            const withPrefix_20: boolean;
            export { withPrefix_20 as withPrefix };
        }
        export namespace GrantFullControl_1 {
            const location_135: string;
            export { location_135 as location };
            const sentAs_108: string;
            export { sentAs_108 as sentAs };
            const withPrefix_21: boolean;
            export { withPrefix_21 as withPrefix };
        }
        export { GrantFullControl_1 as GrantFullControl };
        export namespace StorageClass_5 {
            const location_136: string;
            export { location_136 as location };
            const sentAs_109: string;
            export { sentAs_109 as sentAs };
            const withPrefix_22: boolean;
            export { withPrefix_22 as withPrefix };
            const type_35: string;
            export { type_35 as type };
        }
        export { StorageClass_5 as StorageClass };
        export namespace Metadata {
            const type_36: string;
            export { type_36 as type };
            const location_137: string;
            export { location_137 as location };
            const sentAs_110: string;
            export { sentAs_110 as sentAs };
            const withPrefix_23: boolean;
            export { withPrefix_23 as withPrefix };
        }
        export namespace WebsiteRedirectLocation {
            const location_138: string;
            export { location_138 as location };
            const sentAs_111: string;
            export { sentAs_111 as sentAs };
            const withPrefix_24: boolean;
            export { withPrefix_24 as withPrefix };
        }
        export namespace Expires {
            const location_139: string;
            export { location_139 as location };
            const sentAs_112: string;
            export { sentAs_112 as sentAs };
            const type_37: string;
            export { type_37 as type };
        }
        export namespace SseKms {
            const location_140: string;
            export { location_140 as location };
            const sentAs_113: string;
            export { sentAs_113 as sentAs };
            const withPrefix_25: boolean;
            export { withPrefix_25 as withPrefix };
            const type_38: string;
            export { type_38 as type };
        }
        export namespace SseKmsKey {
            const location_141: string;
            export { location_141 as location };
            const sentAs_114: string;
            export { sentAs_114 as sentAs };
            const withPrefix_26: boolean;
            export { withPrefix_26 as withPrefix };
        }
        export namespace SseC {
            const location_142: string;
            export { location_142 as location };
            const sentAs_115: string;
            export { sentAs_115 as sentAs };
            const withPrefix_27: boolean;
            export { withPrefix_27 as withPrefix };
        }
        export namespace SseCKey {
            const location_143: string;
            export { location_143 as location };
            const sentAs_116: string;
            export { sentAs_116 as sentAs };
            const type_39: string;
            export { type_39 as type };
            const withPrefix_28: boolean;
            export { withPrefix_28 as withPrefix };
        }
        export namespace Body {
            const location_144: string;
            export { location_144 as location };
        }
        export namespace SourceFile {
            const type_40: string;
            export { type_40 as type };
        }
        export namespace ProgressCallback {
            const type_41: string;
            export { type_41 as type };
        }
    }
    export { parameters_68 as parameters };
}
export namespace PutObjectOutput {
    export namespace parameters_69 {
        export namespace ETag_2 {
            const location_145: string;
            export { location_145 as location };
            const sentAs_117: string;
            export { sentAs_117 as sentAs };
        }
        export { ETag_2 as ETag };
        export namespace VersionId_2 {
            const location_146: string;
            export { location_146 as location };
            const sentAs_118: string;
            export { sentAs_118 as sentAs };
            const withPrefix_29: boolean;
            export { withPrefix_29 as withPrefix };
        }
        export { VersionId_2 as VersionId };
        export namespace StorageClass_6 {
            const location_147: string;
            export { location_147 as location };
            const sentAs_119: string;
            export { sentAs_119 as sentAs };
            const withPrefix_30: boolean;
            export { withPrefix_30 as withPrefix };
        }
        export { StorageClass_6 as StorageClass };
        export namespace SseKms_1 {
            const location_148: string;
            export { location_148 as location };
            const sentAs_120: string;
            export { sentAs_120 as sentAs };
            const withPrefix_31: boolean;
            export { withPrefix_31 as withPrefix };
        }
        export { SseKms_1 as SseKms };
        export namespace SseKmsKey_1 {
            const location_149: string;
            export { location_149 as location };
            const sentAs_121: string;
            export { sentAs_121 as sentAs };
            const withPrefix_32: boolean;
            export { withPrefix_32 as withPrefix };
        }
        export { SseKmsKey_1 as SseKmsKey };
        export namespace SseC_1 {
            const location_150: string;
            export { location_150 as location };
            const sentAs_122: string;
            export { sentAs_122 as sentAs };
            const withPrefix_33: boolean;
            export { withPrefix_33 as withPrefix };
        }
        export { SseC_1 as SseC };
        export namespace SseCKeyMd5 {
            const location_151: string;
            export { location_151 as location };
            const sentAs_123: string;
            export { sentAs_123 as sentAs };
            const withPrefix_34: boolean;
            export { withPrefix_34 as withPrefix };
        }
    }
    export { parameters_69 as parameters };
}
export namespace AppendObject {
    const httpMethod_44: string;
    export { httpMethod_44 as httpMethod };
    const urlPath_34: string;
    export { urlPath_34 as urlPath };
    export namespace parameters_70 {
        export namespace Bucket_45 {
            const required_48: boolean;
            export { required_48 as required };
            const location_152: string;
            export { location_152 as location };
        }
        export { Bucket_45 as Bucket };
        export namespace Key_4 {
            const required_49: boolean;
            export { required_49 as required };
            const location_153: string;
            export { location_153 as location };
        }
        export { Key_4 as Key };
        export namespace Position {
            const location_154: string;
            export { location_154 as location };
            const sentAs_124: string;
            export { sentAs_124 as sentAs };
            const type_42: string;
            export { type_42 as type };
        }
        export namespace ContentMD5_1 {
            const location_155: string;
            export { location_155 as location };
            const sentAs_125: string;
            export { sentAs_125 as sentAs };
        }
        export { ContentMD5_1 as ContentMD5 };
        export namespace Offset_1 {
            const type_43: string;
            export { type_43 as type };
        }
        export { Offset_1 as Offset };
        export namespace ContentType_1 {
            const location_156: string;
            export { location_156 as location };
            const sentAs_126: string;
            export { sentAs_126 as sentAs };
        }
        export { ContentType_1 as ContentType };
        export namespace ContentLength_1 {
            const location_157: string;
            export { location_157 as location };
            const sentAs_127: string;
            export { sentAs_127 as sentAs };
            const type_44: string;
            export { type_44 as type };
        }
        export { ContentLength_1 as ContentLength };
        export namespace ACL_3 {
            const location_158: string;
            export { location_158 as location };
            const sentAs_128: string;
            export { sentAs_128 as sentAs };
            const withPrefix_35: boolean;
            export { withPrefix_35 as withPrefix };
            const type_45: string;
            export { type_45 as type };
        }
        export { ACL_3 as ACL };
        export namespace GrantRead_2 {
            const location_159: string;
            export { location_159 as location };
            const sentAs_129: string;
            export { sentAs_129 as sentAs };
            const withPrefix_36: boolean;
            export { withPrefix_36 as withPrefix };
        }
        export { GrantRead_2 as GrantRead };
        export namespace GrantReadAcp_1 {
            const location_160: string;
            export { location_160 as location };
            const sentAs_130: string;
            export { sentAs_130 as sentAs };
            const withPrefix_37: boolean;
            export { withPrefix_37 as withPrefix };
        }
        export { GrantReadAcp_1 as GrantReadAcp };
        export namespace GrantWriteAcp_1 {
            const location_161: string;
            export { location_161 as location };
            const sentAs_131: string;
            export { sentAs_131 as sentAs };
            const withPrefix_38: boolean;
            export { withPrefix_38 as withPrefix };
        }
        export { GrantWriteAcp_1 as GrantWriteAcp };
        export namespace GrantFullControl_2 {
            const location_162: string;
            export { location_162 as location };
            const sentAs_132: string;
            export { sentAs_132 as sentAs };
            const withPrefix_39: boolean;
            export { withPrefix_39 as withPrefix };
        }
        export { GrantFullControl_2 as GrantFullControl };
        export namespace StorageClass_7 {
            const location_163: string;
            export { location_163 as location };
            const sentAs_133: string;
            export { sentAs_133 as sentAs };
            const withPrefix_40: boolean;
            export { withPrefix_40 as withPrefix };
            const type_46: string;
            export { type_46 as type };
        }
        export { StorageClass_7 as StorageClass };
        export namespace Metadata_1 {
            const type_47: string;
            export { type_47 as type };
            const location_164: string;
            export { location_164 as location };
            const sentAs_134: string;
            export { sentAs_134 as sentAs };
            const withPrefix_41: boolean;
            export { withPrefix_41 as withPrefix };
        }
        export { Metadata_1 as Metadata };
        export namespace WebsiteRedirectLocation_1 {
            const location_165: string;
            export { location_165 as location };
            const sentAs_135: string;
            export { sentAs_135 as sentAs };
            const withPrefix_42: boolean;
            export { withPrefix_42 as withPrefix };
        }
        export { WebsiteRedirectLocation_1 as WebsiteRedirectLocation };
        export namespace Expires_1 {
            const location_166: string;
            export { location_166 as location };
            const sentAs_136: string;
            export { sentAs_136 as sentAs };
            const type_48: string;
            export { type_48 as type };
        }
        export { Expires_1 as Expires };
        export namespace SseKms_2 {
            const location_167: string;
            export { location_167 as location };
            const sentAs_137: string;
            export { sentAs_137 as sentAs };
            const withPrefix_43: boolean;
            export { withPrefix_43 as withPrefix };
            const type_49: string;
            export { type_49 as type };
        }
        export { SseKms_2 as SseKms };
        export namespace SseKmsKey_2 {
            const location_168: string;
            export { location_168 as location };
            const sentAs_138: string;
            export { sentAs_138 as sentAs };
            const withPrefix_44: boolean;
            export { withPrefix_44 as withPrefix };
        }
        export { SseKmsKey_2 as SseKmsKey };
        export namespace SseC_2 {
            const location_169: string;
            export { location_169 as location };
            const sentAs_139: string;
            export { sentAs_139 as sentAs };
            const withPrefix_45: boolean;
            export { withPrefix_45 as withPrefix };
        }
        export { SseC_2 as SseC };
        export namespace SseCKey_1 {
            const location_170: string;
            export { location_170 as location };
            const sentAs_140: string;
            export { sentAs_140 as sentAs };
            const type_50: string;
            export { type_50 as type };
            const withPrefix_46: boolean;
            export { withPrefix_46 as withPrefix };
        }
        export { SseCKey_1 as SseCKey };
        export namespace Body_1 {
            const location_171: string;
            export { location_171 as location };
        }
        export { Body_1 as Body };
        export namespace SourceFile_1 {
            const type_51: string;
            export { type_51 as type };
        }
        export { SourceFile_1 as SourceFile };
        export namespace ProgressCallback_1 {
            const type_52: string;
            export { type_52 as type };
        }
        export { ProgressCallback_1 as ProgressCallback };
    }
    export { parameters_70 as parameters };
}
export namespace AppendObjectOutput {
    export namespace parameters_71 {
        export namespace ETag_3 {
            const location_172: string;
            export { location_172 as location };
            const sentAs_141: string;
            export { sentAs_141 as sentAs };
        }
        export { ETag_3 as ETag };
        export namespace NextPosition {
            const location_173: string;
            export { location_173 as location };
            const sentAs_142: string;
            export { sentAs_142 as sentAs };
        }
        export namespace StorageClass_8 {
            const location_174: string;
            export { location_174 as location };
            const sentAs_143: string;
            export { sentAs_143 as sentAs };
            const withPrefix_47: boolean;
            export { withPrefix_47 as withPrefix };
        }
        export { StorageClass_8 as StorageClass };
        export namespace SseKms_3 {
            const location_175: string;
            export { location_175 as location };
            const sentAs_144: string;
            export { sentAs_144 as sentAs };
            const withPrefix_48: boolean;
            export { withPrefix_48 as withPrefix };
        }
        export { SseKms_3 as SseKms };
        export namespace SseKmsKey_3 {
            const location_176: string;
            export { location_176 as location };
            const sentAs_145: string;
            export { sentAs_145 as sentAs };
            const withPrefix_49: boolean;
            export { withPrefix_49 as withPrefix };
        }
        export { SseKmsKey_3 as SseKmsKey };
        export namespace SseC_3 {
            const location_177: string;
            export { location_177 as location };
            const sentAs_146: string;
            export { sentAs_146 as sentAs };
            const withPrefix_50: boolean;
            export { withPrefix_50 as withPrefix };
        }
        export { SseC_3 as SseC };
        export namespace SseCKeyMd5_1 {
            const location_178: string;
            export { location_178 as location };
            const sentAs_147: string;
            export { sentAs_147 as sentAs };
            const withPrefix_51: boolean;
            export { withPrefix_51 as withPrefix };
        }
        export { SseCKeyMd5_1 as SseCKeyMd5 };
    }
    export { parameters_71 as parameters };
}
export namespace GetObject {
    const httpMethod_45: string;
    export { httpMethod_45 as httpMethod };
    export namespace parameters_72 {
        export namespace Bucket_46 {
            const required_50: boolean;
            export { required_50 as required };
            const location_179: string;
            export { location_179 as location };
        }
        export { Bucket_46 as Bucket };
        export namespace Key_5 {
            const required_51: boolean;
            export { required_51 as required };
            const location_180: string;
            export { location_180 as location };
        }
        export { Key_5 as Key };
        export namespace ResponseCacheControl {
            const location_181: string;
            export { location_181 as location };
            const sentAs_148: string;
            export { sentAs_148 as sentAs };
        }
        export namespace ResponseContentDisposition {
            const location_182: string;
            export { location_182 as location };
            const sentAs_149: string;
            export { sentAs_149 as sentAs };
        }
        export namespace ResponseContentEncoding {
            const location_183: string;
            export { location_183 as location };
            const sentAs_150: string;
            export { sentAs_150 as sentAs };
        }
        export namespace ResponseContentLanguage {
            const location_184: string;
            export { location_184 as location };
            const sentAs_151: string;
            export { sentAs_151 as sentAs };
        }
        export namespace ResponseContentType {
            const location_185: string;
            export { location_185 as location };
            const sentAs_152: string;
            export { sentAs_152 as sentAs };
        }
        export namespace ResponseExpires {
            const location_186: string;
            export { location_186 as location };
            const sentAs_153: string;
            export { sentAs_153 as sentAs };
        }
        export namespace VersionId_3 {
            const location_187: string;
            export { location_187 as location };
            const sentAs_154: string;
            export { sentAs_154 as sentAs };
        }
        export { VersionId_3 as VersionId };
        export namespace ImageProcess {
            const location_188: string;
            export { location_188 as location };
            const sentAs_155: string;
            export { sentAs_155 as sentAs };
        }
        export namespace IfMatch {
            const location_189: string;
            export { location_189 as location };
            const sentAs_156: string;
            export { sentAs_156 as sentAs };
        }
        export namespace IfModifiedSince {
            const location_190: string;
            export { location_190 as location };
            const sentAs_157: string;
            export { sentAs_157 as sentAs };
        }
        export namespace IfNoneMatch {
            const location_191: string;
            export { location_191 as location };
            const sentAs_158: string;
            export { sentAs_158 as sentAs };
        }
        export namespace IfUnmodifiedSince {
            const location_192: string;
            export { location_192 as location };
            const sentAs_159: string;
            export { sentAs_159 as sentAs };
        }
        export namespace Range {
            const location_193: string;
            export { location_193 as location };
            const sentAs_160: string;
            export { sentAs_160 as sentAs };
        }
        export namespace Origin_1 {
            const location_194: string;
            export { location_194 as location };
            const sentAs_161: string;
            export { sentAs_161 as sentAs };
        }
        export { Origin_1 as Origin };
        export namespace RequestHeader_1 {
            const location_195: string;
            export { location_195 as location };
            const sentAs_162: string;
            export { sentAs_162 as sentAs };
        }
        export { RequestHeader_1 as RequestHeader };
        export namespace SaveByType {
            const type_53: string;
            export { type_53 as type };
        }
        export namespace SseC_4 {
            const location_196: string;
            export { location_196 as location };
            const sentAs_163: string;
            export { sentAs_163 as sentAs };
            const withPrefix_52: boolean;
            export { withPrefix_52 as withPrefix };
        }
        export { SseC_4 as SseC };
        export namespace SseCKey_2 {
            const location_197: string;
            export { location_197 as location };
            const sentAs_164: string;
            export { sentAs_164 as sentAs };
            const type_54: string;
            export { type_54 as type };
            const withPrefix_53: boolean;
            export { withPrefix_53 as withPrefix };
        }
        export { SseCKey_2 as SseCKey };
        export namespace ProgressCallback_2 {
            const type_55: string;
            export { type_55 as type };
        }
        export { ProgressCallback_2 as ProgressCallback };
    }
    export { parameters_72 as parameters };
}
export namespace GetObjectOutput {
    export namespace data_30 {
        const type_56: string;
        export { type_56 as type };
    }
    export { data_30 as data };
    export namespace parameters_73 {
        export namespace Content {
            const location_198: string;
            export { location_198 as location };
        }
        export namespace Expiration {
            const location_199: string;
            export { location_199 as location };
            const sentAs_165: string;
            export { sentAs_165 as sentAs };
            const withPrefix_54: boolean;
            export { withPrefix_54 as withPrefix };
        }
        export namespace ETag_4 {
            const location_200: string;
            export { location_200 as location };
            const sentAs_166: string;
            export { sentAs_166 as sentAs };
        }
        export { ETag_4 as ETag };
        export namespace CacheControl {
            const location_201: string;
            export { location_201 as location };
            const sentAs_167: string;
            export { sentAs_167 as sentAs };
        }
        export namespace ContentDisposition {
            const location_202: string;
            export { location_202 as location };
            const sentAs_168: string;
            export { sentAs_168 as sentAs };
        }
        export namespace ContentEncoding {
            const location_203: string;
            export { location_203 as location };
            const sentAs_169: string;
            export { sentAs_169 as sentAs };
        }
        export namespace ContentLanguage {
            const location_204: string;
            export { location_204 as location };
            const sentAs_170: string;
            export { sentAs_170 as sentAs };
        }
        export namespace ContentType_2 {
            const location_205: string;
            export { location_205 as location };
            const sentAs_171: string;
            export { sentAs_171 as sentAs };
        }
        export { ContentType_2 as ContentType };
        export namespace Expires_2 {
            const location_206: string;
            export { location_206 as location };
            const sentAs_172: string;
            export { sentAs_172 as sentAs };
        }
        export { Expires_2 as Expires };
        export namespace VersionId_4 {
            const location_207: string;
            export { location_207 as location };
            const sentAs_173: string;
            export { sentAs_173 as sentAs };
            const withPrefix_55: boolean;
            export { withPrefix_55 as withPrefix };
        }
        export { VersionId_4 as VersionId };
        export namespace ContentLength_2 {
            const location_208: string;
            export { location_208 as location };
            const sentAs_174: string;
            export { sentAs_174 as sentAs };
        }
        export { ContentLength_2 as ContentLength };
        export namespace DeleteMarker {
            const location_209: string;
            export { location_209 as location };
            const sentAs_175: string;
            export { sentAs_175 as sentAs };
            const withPrefix_56: boolean;
            export { withPrefix_56 as withPrefix };
        }
        export namespace LastModified_3 {
            const location_210: string;
            export { location_210 as location };
            const sentAs_176: string;
            export { sentAs_176 as sentAs };
        }
        export { LastModified_3 as LastModified };
        export namespace WebsiteRedirectLocation_2 {
            const location_211: string;
            export { location_211 as location };
            const sentAs_177: string;
            export { sentAs_177 as sentAs };
            const withPrefix_57: boolean;
            export { withPrefix_57 as withPrefix };
        }
        export { WebsiteRedirectLocation_2 as WebsiteRedirectLocation };
        export namespace StorageClass_9 {
            const location_212: string;
            export { location_212 as location };
            const sentAs_178: string;
            export { sentAs_178 as sentAs };
            const withPrefix_58: boolean;
            export { withPrefix_58 as withPrefix };
        }
        export { StorageClass_9 as StorageClass };
        export namespace Restore {
            const location_213: string;
            export { location_213 as location };
            const sentAs_179: string;
            export { sentAs_179 as sentAs };
            const withPrefix_59: boolean;
            export { withPrefix_59 as withPrefix };
        }
        export namespace AllowOrigin_1 {
            const location_214: string;
            export { location_214 as location };
            const sentAs_180: string;
            export { sentAs_180 as sentAs };
        }
        export { AllowOrigin_1 as AllowOrigin };
        export namespace MaxAgeSeconds_1 {
            const location_215: string;
            export { location_215 as location };
            const sentAs_181: string;
            export { sentAs_181 as sentAs };
        }
        export { MaxAgeSeconds_1 as MaxAgeSeconds };
        export namespace ExposeHeader_1 {
            const location_216: string;
            export { location_216 as location };
            const sentAs_182: string;
            export { sentAs_182 as sentAs };
        }
        export { ExposeHeader_1 as ExposeHeader };
        export namespace AllowMethod_1 {
            const location_217: string;
            export { location_217 as location };
            const sentAs_183: string;
            export { sentAs_183 as sentAs };
        }
        export { AllowMethod_1 as AllowMethod };
        export namespace AllowHeader_1 {
            const location_218: string;
            export { location_218 as location };
            const sentAs_184: string;
            export { sentAs_184 as sentAs };
        }
        export { AllowHeader_1 as AllowHeader };
        export namespace SseKms_4 {
            const location_219: string;
            export { location_219 as location };
            const sentAs_185: string;
            export { sentAs_185 as sentAs };
            const withPrefix_60: boolean;
            export { withPrefix_60 as withPrefix };
        }
        export { SseKms_4 as SseKms };
        export namespace SseKmsKey_4 {
            const location_220: string;
            export { location_220 as location };
            const sentAs_186: string;
            export { sentAs_186 as sentAs };
            const withPrefix_61: boolean;
            export { withPrefix_61 as withPrefix };
        }
        export { SseKmsKey_4 as SseKmsKey };
        export namespace SseC_5 {
            const location_221: string;
            export { location_221 as location };
            const sentAs_187: string;
            export { sentAs_187 as sentAs };
            const withPrefix_62: boolean;
            export { withPrefix_62 as withPrefix };
        }
        export { SseC_5 as SseC };
        export namespace SseCKeyMd5_2 {
            const location_222: string;
            export { location_222 as location };
            const sentAs_188: string;
            export { sentAs_188 as sentAs };
            const withPrefix_63: boolean;
            export { withPrefix_63 as withPrefix };
        }
        export { SseCKeyMd5_2 as SseCKeyMd5 };
        export namespace Metadata_2 {
            const location_223: string;
            export { location_223 as location };
            const type_57: string;
            export { type_57 as type };
            const sentAs_189: string;
            export { sentAs_189 as sentAs };
            const withPrefix_64: boolean;
            export { withPrefix_64 as withPrefix };
        }
        export { Metadata_2 as Metadata };
    }
    export { parameters_73 as parameters };
}
export namespace CopyObject {
    const httpMethod_46: string;
    export { httpMethod_46 as httpMethod };
    export namespace parameters_74 {
        export namespace Bucket_47 {
            const required_52: boolean;
            export { required_52 as required };
            const location_224: string;
            export { location_224 as location };
        }
        export { Bucket_47 as Bucket };
        export namespace Key_6 {
            const required_53: boolean;
            export { required_53 as required };
            const location_225: string;
            export { location_225 as location };
        }
        export { Key_6 as Key };
        export namespace ACL_4 {
            const location_226: string;
            export { location_226 as location };
            const sentAs_190: string;
            export { sentAs_190 as sentAs };
            const withPrefix_65: boolean;
            export { withPrefix_65 as withPrefix };
            const type_58: string;
            export { type_58 as type };
        }
        export { ACL_4 as ACL };
        export namespace GrantRead_3 {
            const location_227: string;
            export { location_227 as location };
            const sentAs_191: string;
            export { sentAs_191 as sentAs };
            const withPrefix_66: boolean;
            export { withPrefix_66 as withPrefix };
        }
        export { GrantRead_3 as GrantRead };
        export namespace GrantReadAcp_2 {
            const location_228: string;
            export { location_228 as location };
            const sentAs_192: string;
            export { sentAs_192 as sentAs };
            const withPrefix_67: boolean;
            export { withPrefix_67 as withPrefix };
        }
        export { GrantReadAcp_2 as GrantReadAcp };
        export namespace GrantWriteAcp_2 {
            const location_229: string;
            export { location_229 as location };
            const sentAs_193: string;
            export { sentAs_193 as sentAs };
            const withPrefix_68: boolean;
            export { withPrefix_68 as withPrefix };
        }
        export { GrantWriteAcp_2 as GrantWriteAcp };
        export namespace GrantFullControl_3 {
            const location_230: string;
            export { location_230 as location };
            const sentAs_194: string;
            export { sentAs_194 as sentAs };
            const withPrefix_69: boolean;
            export { withPrefix_69 as withPrefix };
        }
        export { GrantFullControl_3 as GrantFullControl };
        export namespace StorageClass_10 {
            const location_231: string;
            export { location_231 as location };
            const sentAs_195: string;
            export { sentAs_195 as sentAs };
            const withPrefix_70: boolean;
            export { withPrefix_70 as withPrefix };
            const type_59: string;
            export { type_59 as type };
        }
        export { StorageClass_10 as StorageClass };
        export namespace CopySource {
            const required_54: boolean;
            export { required_54 as required };
            const location_232: string;
            export { location_232 as location };
            const sentAs_196: string;
            export { sentAs_196 as sentAs };
            const withPrefix_71: boolean;
            export { withPrefix_71 as withPrefix };
            export const skipEncoding: boolean;
        }
        export namespace CopySourceIfMatch {
            const location_233: string;
            export { location_233 as location };
            const sentAs_197: string;
            export { sentAs_197 as sentAs };
            const withPrefix_72: boolean;
            export { withPrefix_72 as withPrefix };
        }
        export namespace CopySourceIfModifiedSince {
            const location_234: string;
            export { location_234 as location };
            const sentAs_198: string;
            export { sentAs_198 as sentAs };
            const withPrefix_73: boolean;
            export { withPrefix_73 as withPrefix };
        }
        export namespace CopySourceIfNoneMatch {
            const location_235: string;
            export { location_235 as location };
            const sentAs_199: string;
            export { sentAs_199 as sentAs };
            const withPrefix_74: boolean;
            export { withPrefix_74 as withPrefix };
        }
        export namespace CopySourceIfUnmodifiedSince {
            const location_236: string;
            export { location_236 as location };
            const sentAs_200: string;
            export { sentAs_200 as sentAs };
            const withPrefix_75: boolean;
            export { withPrefix_75 as withPrefix };
        }
        export namespace ContentType_3 {
            const location_237: string;
            export { location_237 as location };
            const sentAs_201: string;
            export { sentAs_201 as sentAs };
        }
        export { ContentType_3 as ContentType };
        export namespace ContentEncoding_1 {
            const location_238: string;
            export { location_238 as location };
            const sentAs_202: string;
            export { sentAs_202 as sentAs };
        }
        export { ContentEncoding_1 as ContentEncoding };
        export namespace ContentLanguage_1 {
            const location_239: string;
            export { location_239 as location };
            const sentAs_203: string;
            export { sentAs_203 as sentAs };
        }
        export { ContentLanguage_1 as ContentLanguage };
        export namespace ContentDisposition_1 {
            const location_240: string;
            export { location_240 as location };
            const sentAs_204: string;
            export { sentAs_204 as sentAs };
        }
        export { ContentDisposition_1 as ContentDisposition };
        export namespace CacheControl_1 {
            const location_241: string;
            export { location_241 as location };
            const sentAs_205: string;
            export { sentAs_205 as sentAs };
        }
        export { CacheControl_1 as CacheControl };
        export namespace Expires_3 {
            const location_242: string;
            export { location_242 as location };
            const sentAs_206: string;
            export { sentAs_206 as sentAs };
        }
        export { Expires_3 as Expires };
        export namespace Metadata_3 {
            const type_60: string;
            export { type_60 as type };
            const location_243: string;
            export { location_243 as location };
            const sentAs_207: string;
            export { sentAs_207 as sentAs };
            const withPrefix_76: boolean;
            export { withPrefix_76 as withPrefix };
        }
        export { Metadata_3 as Metadata };
        export namespace MetadataDirective {
            const location_244: string;
            export { location_244 as location };
            const sentAs_208: string;
            export { sentAs_208 as sentAs };
            const withPrefix_77: boolean;
            export { withPrefix_77 as withPrefix };
        }
        export namespace WebsiteRedirectLocation_3 {
            const location_245: string;
            export { location_245 as location };
            const sentAs_209: string;
            export { sentAs_209 as sentAs };
            const withPrefix_78: boolean;
            export { withPrefix_78 as withPrefix };
        }
        export { WebsiteRedirectLocation_3 as WebsiteRedirectLocation };
        export namespace SseKms_5 {
            const location_246: string;
            export { location_246 as location };
            const sentAs_210: string;
            export { sentAs_210 as sentAs };
            const withPrefix_79: boolean;
            export { withPrefix_79 as withPrefix };
            const type_61: string;
            export { type_61 as type };
        }
        export { SseKms_5 as SseKms };
        export namespace SseKmsKey_5 {
            const location_247: string;
            export { location_247 as location };
            const sentAs_211: string;
            export { sentAs_211 as sentAs };
            const withPrefix_80: boolean;
            export { withPrefix_80 as withPrefix };
        }
        export { SseKmsKey_5 as SseKmsKey };
        export namespace SseC_6 {
            const location_248: string;
            export { location_248 as location };
            const sentAs_212: string;
            export { sentAs_212 as sentAs };
            const withPrefix_81: boolean;
            export { withPrefix_81 as withPrefix };
        }
        export { SseC_6 as SseC };
        export namespace SseCKey_3 {
            const location_249: string;
            export { location_249 as location };
            const sentAs_213: string;
            export { sentAs_213 as sentAs };
            const type_62: string;
            export { type_62 as type };
            const withPrefix_82: boolean;
            export { withPrefix_82 as withPrefix };
        }
        export { SseCKey_3 as SseCKey };
        export namespace CopySourceSseC {
            const location_250: string;
            export { location_250 as location };
            const sentAs_214: string;
            export { sentAs_214 as sentAs };
            const withPrefix_83: boolean;
            export { withPrefix_83 as withPrefix };
        }
        export namespace CopySourceSseCKey {
            const location_251: string;
            export { location_251 as location };
            const sentAs_215: string;
            export { sentAs_215 as sentAs };
            const type_63: string;
            export { type_63 as type };
            const withPrefix_84: boolean;
            export { withPrefix_84 as withPrefix };
        }
    }
    export { parameters_74 as parameters };
}
export namespace CopyObjectOutput {
    export namespace data_31 {
        const type_64: string;
        export { type_64 as type };
        const xmlRoot_28: string;
        export { xmlRoot_28 as xmlRoot };
    }
    export { data_31 as data };
    export namespace parameters_75 {
        export namespace VersionId_5 {
            const location_252: string;
            export { location_252 as location };
            const sentAs_216: string;
            export { sentAs_216 as sentAs };
            const withPrefix_85: boolean;
            export { withPrefix_85 as withPrefix };
        }
        export { VersionId_5 as VersionId };
        export namespace CopySourceVersionId {
            const location_253: string;
            export { location_253 as location };
            const sentAs_217: string;
            export { sentAs_217 as sentAs };
            const withPrefix_86: boolean;
            export { withPrefix_86 as withPrefix };
        }
        export namespace ETag_5 {
            const location_254: string;
            export { location_254 as location };
            const sentAs_218: string;
            export { sentAs_218 as sentAs };
        }
        export { ETag_5 as ETag };
        export namespace LastModified_4 {
            const location_255: string;
            export { location_255 as location };
            const sentAs_219: string;
            export { sentAs_219 as sentAs };
        }
        export { LastModified_4 as LastModified };
        export namespace SseKms_6 {
            const location_256: string;
            export { location_256 as location };
            const sentAs_220: string;
            export { sentAs_220 as sentAs };
            const withPrefix_87: boolean;
            export { withPrefix_87 as withPrefix };
        }
        export { SseKms_6 as SseKms };
        export namespace SseKmsKey_6 {
            const location_257: string;
            export { location_257 as location };
            const sentAs_221: string;
            export { sentAs_221 as sentAs };
            const withPrefix_88: boolean;
            export { withPrefix_88 as withPrefix };
        }
        export { SseKmsKey_6 as SseKmsKey };
        export namespace SseC_7 {
            const location_258: string;
            export { location_258 as location };
            const sentAs_222: string;
            export { sentAs_222 as sentAs };
            const withPrefix_89: boolean;
            export { withPrefix_89 as withPrefix };
        }
        export { SseC_7 as SseC };
        export namespace SseCKeyMd5_3 {
            const location_259: string;
            export { location_259 as location };
            const sentAs_223: string;
            export { sentAs_223 as sentAs };
            const withPrefix_90: boolean;
            export { withPrefix_90 as withPrefix };
        }
        export { SseCKeyMd5_3 as SseCKeyMd5 };
    }
    export { parameters_75 as parameters };
}
export namespace RestoreObject {
    const httpMethod_47: string;
    export { httpMethod_47 as httpMethod };
    const urlPath_35: string;
    export { urlPath_35 as urlPath };
    export namespace data_32 {
        const xmlRoot_29: string;
        export { xmlRoot_29 as xmlRoot };
        const md5_4: boolean;
        export { md5_4 as md5 };
    }
    export { data_32 as data };
    export namespace parameters_76 {
        export namespace Bucket_48 {
            const required_55: boolean;
            export { required_55 as required };
            const location_260: string;
            export { location_260 as location };
        }
        export { Bucket_48 as Bucket };
        export namespace Key_7 {
            const required_56: boolean;
            export { required_56 as required };
            const location_261: string;
            export { location_261 as location };
        }
        export { Key_7 as Key };
        export namespace VersionId_6 {
            const location_262: string;
            export { location_262 as location };
            const sentAs_224: string;
            export { sentAs_224 as sentAs };
        }
        export { VersionId_6 as VersionId };
        export namespace Days {
            const location_263: string;
            export { location_263 as location };
            const sentAs_225: string;
            export { sentAs_225 as sentAs };
        }
        export namespace Tier {
            const wrapper_1: string;
            export { wrapper_1 as wrapper };
            const location_264: string;
            export { location_264 as location };
            const sentAs_226: string;
            export { sentAs_226 as sentAs };
        }
    }
    export { parameters_76 as parameters };
}
export namespace GetObjectMetadata {
    const httpMethod_48: string;
    export { httpMethod_48 as httpMethod };
    export namespace parameters_77 {
        export namespace Bucket_49 {
            const required_57: boolean;
            export { required_57 as required };
            const location_265: string;
            export { location_265 as location };
        }
        export { Bucket_49 as Bucket };
        export namespace Key_8 {
            const required_58: boolean;
            export { required_58 as required };
            const location_266: string;
            export { location_266 as location };
        }
        export { Key_8 as Key };
        export namespace VersionId_7 {
            const location_267: string;
            export { location_267 as location };
            const sentAs_227: string;
            export { sentAs_227 as sentAs };
        }
        export { VersionId_7 as VersionId };
        export namespace Origin_2 {
            const location_268: string;
            export { location_268 as location };
            const sentAs_228: string;
            export { sentAs_228 as sentAs };
        }
        export { Origin_2 as Origin };
        export namespace RequestHeader_2 {
            const location_269: string;
            export { location_269 as location };
            const sentAs_229: string;
            export { sentAs_229 as sentAs };
        }
        export { RequestHeader_2 as RequestHeader };
        export namespace SseC_8 {
            const location_270: string;
            export { location_270 as location };
            const sentAs_230: string;
            export { sentAs_230 as sentAs };
            const withPrefix_91: boolean;
            export { withPrefix_91 as withPrefix };
        }
        export { SseC_8 as SseC };
        export namespace SseCKey_4 {
            const location_271: string;
            export { location_271 as location };
            const sentAs_231: string;
            export { sentAs_231 as sentAs };
            const type_65: string;
            export { type_65 as type };
            const withPrefix_92: boolean;
            export { withPrefix_92 as withPrefix };
        }
        export { SseCKey_4 as SseCKey };
    }
    export { parameters_77 as parameters };
}
export namespace GetObjectMetadataOutput {
    export namespace parameters_78 {
        export namespace Expiration_1 {
            const location_272: string;
            export { location_272 as location };
            const sentAs_232: string;
            export { sentAs_232 as sentAs };
            const withPrefix_93: boolean;
            export { withPrefix_93 as withPrefix };
        }
        export { Expiration_1 as Expiration };
        export namespace LastModified_5 {
            const location_273: string;
            export { location_273 as location };
            const sentAs_233: string;
            export { sentAs_233 as sentAs };
        }
        export { LastModified_5 as LastModified };
        export namespace ContentLength_3 {
            const location_274: string;
            export { location_274 as location };
            const sentAs_234: string;
            export { sentAs_234 as sentAs };
        }
        export { ContentLength_3 as ContentLength };
        export namespace ContentType_4 {
            const location_275: string;
            export { location_275 as location };
            const sentAs_235: string;
            export { sentAs_235 as sentAs };
        }
        export { ContentType_4 as ContentType };
        export namespace ETag_6 {
            const location_276: string;
            export { location_276 as location };
            const sentAs_236: string;
            export { sentAs_236 as sentAs };
        }
        export { ETag_6 as ETag };
        export namespace VersionId_8 {
            const location_277: string;
            export { location_277 as location };
            const sentAs_237: string;
            export { sentAs_237 as sentAs };
            const withPrefix_94: boolean;
            export { withPrefix_94 as withPrefix };
        }
        export { VersionId_8 as VersionId };
        export namespace WebsiteRedirectLocation_4 {
            const location_278: string;
            export { location_278 as location };
            const sentAs_238: string;
            export { sentAs_238 as sentAs };
            const withPrefix_95: boolean;
            export { withPrefix_95 as withPrefix };
        }
        export { WebsiteRedirectLocation_4 as WebsiteRedirectLocation };
        export namespace StorageClass_11 {
            const location_279: string;
            export { location_279 as location };
            const sentAs_239: string;
            export { sentAs_239 as sentAs };
            const withPrefix_96: boolean;
            export { withPrefix_96 as withPrefix };
        }
        export { StorageClass_11 as StorageClass };
        export namespace Restore_1 {
            const location_280: string;
            export { location_280 as location };
            const sentAs_240: string;
            export { sentAs_240 as sentAs };
            const withPrefix_97: boolean;
            export { withPrefix_97 as withPrefix };
        }
        export { Restore_1 as Restore };
        export namespace ObjectType {
            const location_281: string;
            export { location_281 as location };
            const sentAs_241: string;
            export { sentAs_241 as sentAs };
        }
        export namespace NextPosition_1 {
            const location_282: string;
            export { location_282 as location };
            const sentAs_242: string;
            export { sentAs_242 as sentAs };
        }
        export { NextPosition_1 as NextPosition };
        export namespace AllowOrigin_2 {
            const location_283: string;
            export { location_283 as location };
            const sentAs_243: string;
            export { sentAs_243 as sentAs };
        }
        export { AllowOrigin_2 as AllowOrigin };
        export namespace MaxAgeSeconds_2 {
            const location_284: string;
            export { location_284 as location };
            const sentAs_244: string;
            export { sentAs_244 as sentAs };
        }
        export { MaxAgeSeconds_2 as MaxAgeSeconds };
        export namespace ExposeHeader_2 {
            const location_285: string;
            export { location_285 as location };
            const sentAs_245: string;
            export { sentAs_245 as sentAs };
        }
        export { ExposeHeader_2 as ExposeHeader };
        export namespace AllowMethod_2 {
            const location_286: string;
            export { location_286 as location };
            const sentAs_246: string;
            export { sentAs_246 as sentAs };
        }
        export { AllowMethod_2 as AllowMethod };
        export namespace AllowHeader_2 {
            const location_287: string;
            export { location_287 as location };
            const sentAs_247: string;
            export { sentAs_247 as sentAs };
        }
        export { AllowHeader_2 as AllowHeader };
        export namespace SseKms_7 {
            const location_288: string;
            export { location_288 as location };
            const sentAs_248: string;
            export { sentAs_248 as sentAs };
            const withPrefix_98: boolean;
            export { withPrefix_98 as withPrefix };
        }
        export { SseKms_7 as SseKms };
        export namespace SseKmsKey_7 {
            const location_289: string;
            export { location_289 as location };
            const sentAs_249: string;
            export { sentAs_249 as sentAs };
            const withPrefix_99: boolean;
            export { withPrefix_99 as withPrefix };
        }
        export { SseKmsKey_7 as SseKmsKey };
        export namespace SseC_9 {
            const location_290: string;
            export { location_290 as location };
            const sentAs_250: string;
            export { sentAs_250 as sentAs };
            const withPrefix_100: boolean;
            export { withPrefix_100 as withPrefix };
        }
        export { SseC_9 as SseC };
        export namespace SseCKeyMd5_4 {
            const location_291: string;
            export { location_291 as location };
            const sentAs_251: string;
            export { sentAs_251 as sentAs };
            const withPrefix_101: boolean;
            export { withPrefix_101 as withPrefix };
        }
        export { SseCKeyMd5_4 as SseCKeyMd5 };
        export namespace Metadata_4 {
            const location_292: string;
            export { location_292 as location };
            const type_66: string;
            export { type_66 as type };
            const sentAs_252: string;
            export { sentAs_252 as sentAs };
            const withPrefix_102: boolean;
            export { withPrefix_102 as withPrefix };
        }
        export { Metadata_4 as Metadata };
        export namespace ContentLanguage_2 {
            const location_293: string;
            export { location_293 as location };
            const sentAs_253: string;
            export { sentAs_253 as sentAs };
        }
        export { ContentLanguage_2 as ContentLanguage };
        export namespace CacheControl_2 {
            const location_294: string;
            export { location_294 as location };
            const sentAs_254: string;
            export { sentAs_254 as sentAs };
        }
        export { CacheControl_2 as CacheControl };
        export namespace ContentDisposition_2 {
            const location_295: string;
            export { location_295 as location };
            const sentAs_255: string;
            export { sentAs_255 as sentAs };
        }
        export { ContentDisposition_2 as ContentDisposition };
        export namespace Expires_4 {
            const location_296: string;
            export { location_296 as location };
            const sentAs_256: string;
            export { sentAs_256 as sentAs };
        }
        export { Expires_4 as Expires };
    }
    export { parameters_78 as parameters };
}
export namespace SetObjectMetadata {
    const httpMethod_49: string;
    export { httpMethod_49 as httpMethod };
    const urlPath_36: string;
    export { urlPath_36 as urlPath };
    export namespace parameters_79 {
        export namespace Bucket_50 {
            const required_59: boolean;
            export { required_59 as required };
            const location_297: string;
            export { location_297 as location };
        }
        export { Bucket_50 as Bucket };
        export namespace Key_9 {
            const required_60: boolean;
            export { required_60 as required };
            const location_298: string;
            export { location_298 as location };
        }
        export { Key_9 as Key };
        export namespace VersionId_9 {
            const location_299: string;
            export { location_299 as location };
            const sentAs_257: string;
            export { sentAs_257 as sentAs };
        }
        export { VersionId_9 as VersionId };
        export namespace Origin_3 {
            const location_300: string;
            export { location_300 as location };
            const sentAs_258: string;
            export { sentAs_258 as sentAs };
        }
        export { Origin_3 as Origin };
        export namespace RequestHeader_3 {
            const location_301: string;
            export { location_301 as location };
            const sentAs_259: string;
            export { sentAs_259 as sentAs };
        }
        export { RequestHeader_3 as RequestHeader };
        export namespace CacheControl_3 {
            const location_302: string;
            export { location_302 as location };
            const sentAs_260: string;
            export { sentAs_260 as sentAs };
        }
        export { CacheControl_3 as CacheControl };
        export namespace ContentDisposition_3 {
            const location_303: string;
            export { location_303 as location };
            const sentAs_261: string;
            export { sentAs_261 as sentAs };
        }
        export { ContentDisposition_3 as ContentDisposition };
        export namespace ContentLanguage_3 {
            const location_304: string;
            export { location_304 as location };
            const sentAs_262: string;
            export { sentAs_262 as sentAs };
        }
        export { ContentLanguage_3 as ContentLanguage };
        export namespace ContentEncoding_2 {
            const location_305: string;
            export { location_305 as location };
            const sentAs_263: string;
            export { sentAs_263 as sentAs };
        }
        export { ContentEncoding_2 as ContentEncoding };
        export namespace ContentType_5 {
            const location_306: string;
            export { location_306 as location };
            const sentAs_264: string;
            export { sentAs_264 as sentAs };
        }
        export { ContentType_5 as ContentType };
        export namespace Expires_5 {
            const location_307: string;
            export { location_307 as location };
            const sentAs_265: string;
            export { sentAs_265 as sentAs };
        }
        export { Expires_5 as Expires };
        export namespace Metadata_5 {
            export const shape: string;
            const location_308: string;
            export { location_308 as location };
            const sentAs_266: string;
            export { sentAs_266 as sentAs };
            const withPrefix_103: boolean;
            export { withPrefix_103 as withPrefix };
        }
        export { Metadata_5 as Metadata };
        export namespace MetadataDirective_1 {
            const location_309: string;
            export { location_309 as location };
            const sentAs_267: string;
            export { sentAs_267 as sentAs };
            const withPrefix_104: boolean;
            export { withPrefix_104 as withPrefix };
        }
        export { MetadataDirective_1 as MetadataDirective };
        export namespace StorageClass_12 {
            const location_310: string;
            export { location_310 as location };
            const sentAs_268: string;
            export { sentAs_268 as sentAs };
            const withPrefix_105: boolean;
            export { withPrefix_105 as withPrefix };
        }
        export { StorageClass_12 as StorageClass };
        export namespace WebsiteRedirectLocation_5 {
            const location_311: string;
            export { location_311 as location };
            const sentAs_269: string;
            export { sentAs_269 as sentAs };
            const withPrefix_106: boolean;
            export { withPrefix_106 as withPrefix };
        }
        export { WebsiteRedirectLocation_5 as WebsiteRedirectLocation };
    }
    export { parameters_79 as parameters };
}
export namespace SetObjectMetadataOutput {
    export namespace parameters_80 {
        export namespace Expires_6 {
            const location_312: string;
            export { location_312 as location };
            const sentAs_270: string;
            export { sentAs_270 as sentAs };
        }
        export { Expires_6 as Expires };
        export namespace ContentLength_4 {
            const location_313: string;
            export { location_313 as location };
            const sentAs_271: string;
            export { sentAs_271 as sentAs };
        }
        export { ContentLength_4 as ContentLength };
        export namespace ContentType_6 {
            const location_314: string;
            export { location_314 as location };
            const sentAs_272: string;
            export { sentAs_272 as sentAs };
        }
        export { ContentType_6 as ContentType };
        export namespace ContentLanguage_4 {
            const location_315: string;
            export { location_315 as location };
            const sentAs_273: string;
            export { sentAs_273 as sentAs };
        }
        export { ContentLanguage_4 as ContentLanguage };
        export namespace CacheControl_4 {
            const location_316: string;
            export { location_316 as location };
            const sentAs_274: string;
            export { sentAs_274 as sentAs };
        }
        export { CacheControl_4 as CacheControl };
        export namespace ContentDisposition_4 {
            const location_317: string;
            export { location_317 as location };
            const sentAs_275: string;
            export { sentAs_275 as sentAs };
        }
        export { ContentDisposition_4 as ContentDisposition };
        export namespace WebsiteRedirectLocation_6 {
            const location_318: string;
            export { location_318 as location };
            const sentAs_276: string;
            export { sentAs_276 as sentAs };
            const withPrefix_107: boolean;
            export { withPrefix_107 as withPrefix };
        }
        export { WebsiteRedirectLocation_6 as WebsiteRedirectLocation };
        export namespace StorageClass_13 {
            const location_319: string;
            export { location_319 as location };
            const sentAs_277: string;
            export { sentAs_277 as sentAs };
            const withPrefix_108: boolean;
            export { withPrefix_108 as withPrefix };
            const type_67: string;
            export { type_67 as type };
        }
        export { StorageClass_13 as StorageClass };
        export namespace Metadata_6 {
            const location_320: string;
            export { location_320 as location };
            const type_68: string;
            export { type_68 as type };
            const sentAs_278: string;
            export { sentAs_278 as sentAs };
            const withPrefix_109: boolean;
            export { withPrefix_109 as withPrefix };
        }
        export { Metadata_6 as Metadata };
    }
    export { parameters_80 as parameters };
}
export namespace SetObjectAcl {
    const httpMethod_50: string;
    export { httpMethod_50 as httpMethod };
    const urlPath_37: string;
    export { urlPath_37 as urlPath };
    export namespace data_33 {
        const xmlRoot_30: string;
        export { xmlRoot_30 as xmlRoot };
    }
    export { data_33 as data };
    export namespace parameters_81 {
        export namespace Bucket_51 {
            const required_61: boolean;
            export { required_61 as required };
            const location_321: string;
            export { location_321 as location };
        }
        export { Bucket_51 as Bucket };
        export namespace Key_10 {
            const required_62: boolean;
            export { required_62 as required };
            const location_322: string;
            export { location_322 as location };
        }
        export { Key_10 as Key };
        export namespace VersionId_10 {
            const location_323: string;
            export { location_323 as location };
            const sentAs_279: string;
            export { sentAs_279 as sentAs };
        }
        export { VersionId_10 as VersionId };
        export namespace ACL_5 {
            const location_324: string;
            export { location_324 as location };
            const sentAs_280: string;
            export { sentAs_280 as sentAs };
            const withPrefix_110: boolean;
            export { withPrefix_110 as withPrefix };
            const type_69: string;
            export { type_69 as type };
        }
        export { ACL_5 as ACL };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_81 as parameters };
}
export namespace SetObjectAclOutput {
    export namespace parameters_82 {
        export namespace VersionId_11 {
            const location_325: string;
            export { location_325 as location };
            const sentAs_281: string;
            export { sentAs_281 as sentAs };
            const withPrefix_111: boolean;
            export { withPrefix_111 as withPrefix };
        }
        export { VersionId_11 as VersionId };
    }
    export { parameters_82 as parameters };
}
export namespace GetObjectAcl {
    const httpMethod_51: string;
    export { httpMethod_51 as httpMethod };
    const urlPath_38: string;
    export { urlPath_38 as urlPath };
    export namespace parameters_83 {
        export namespace Bucket_52 {
            const required_63: boolean;
            export { required_63 as required };
            const location_326: string;
            export { location_326 as location };
        }
        export { Bucket_52 as Bucket };
        export namespace Key_11 {
            const required_64: boolean;
            export { required_64 as required };
            const location_327: string;
            export { location_327 as location };
        }
        export { Key_11 as Key };
        export namespace VersionId_12 {
            const location_328: string;
            export { location_328 as location };
            const sentAs_282: string;
            export { sentAs_282 as sentAs };
        }
        export { VersionId_12 as VersionId };
    }
    export { parameters_83 as parameters };
}
export namespace GetObjectAclOutput {
    export namespace data_34 {
        const type_70: string;
        export { type_70 as type };
        const xmlRoot_31: string;
        export { xmlRoot_31 as xmlRoot };
    }
    export { data_34 as data };
    export namespace parameters_84 {
        export namespace VersionId_13 {
            const location_329: string;
            export { location_329 as location };
            const sentAs_283: string;
            export { sentAs_283 as sentAs };
            const withPrefix_112: boolean;
            export { withPrefix_112 as withPrefix };
        }
        export { VersionId_13 as VersionId };
        export { owner as Owner };
        export { grants as Grants };
    }
    export { parameters_84 as parameters };
}
export namespace DeleteObject {
    const httpMethod_52: string;
    export { httpMethod_52 as httpMethod };
    export namespace parameters_85 {
        export namespace Bucket_53 {
            const required_65: boolean;
            export { required_65 as required };
            const location_330: string;
            export { location_330 as location };
        }
        export { Bucket_53 as Bucket };
        export namespace Key_12 {
            const required_66: boolean;
            export { required_66 as required };
            const location_331: string;
            export { location_331 as location };
        }
        export { Key_12 as Key };
        export namespace VersionId_14 {
            const location_332: string;
            export { location_332 as location };
            const sentAs_284: string;
            export { sentAs_284 as sentAs };
        }
        export { VersionId_14 as VersionId };
    }
    export { parameters_85 as parameters };
}
export namespace DeleteObjectOutput {
    export namespace parameters_86 {
        export namespace VersionId_15 {
            const location_333: string;
            export { location_333 as location };
            const sentAs_285: string;
            export { sentAs_285 as sentAs };
            const withPrefix_113: boolean;
            export { withPrefix_113 as withPrefix };
        }
        export { VersionId_15 as VersionId };
        export namespace DeleteMarker_1 {
            const location_334: string;
            export { location_334 as location };
            const sentAs_286: string;
            export { sentAs_286 as sentAs };
            const withPrefix_114: boolean;
            export { withPrefix_114 as withPrefix };
        }
        export { DeleteMarker_1 as DeleteMarker };
    }
    export { parameters_86 as parameters };
}
export namespace DeleteObjects {
    const httpMethod_53: string;
    export { httpMethod_53 as httpMethod };
    const urlPath_39: string;
    export { urlPath_39 as urlPath };
    export namespace data_35 {
        const xmlRoot_32: string;
        export { xmlRoot_32 as xmlRoot };
        const md5_5: boolean;
        export { md5_5 as md5 };
    }
    export { data_35 as data };
    export namespace parameters_87 {
        export namespace Bucket_54 {
            const required_67: boolean;
            export { required_67 as required };
            const location_335: string;
            export { location_335 as location };
        }
        export { Bucket_54 as Bucket };
        export namespace Quiet {
            const location_336: string;
            export { location_336 as location };
            const sentAs_287: string;
            export { sentAs_287 as sentAs };
        }
        export namespace Objects {
            const required_68: boolean;
            export { required_68 as required };
            const type_71: string;
            export { type_71 as type };
            const location_337: string;
            export { location_337 as location };
            const sentAs_288: string;
            export { sentAs_288 as sentAs };
            export namespace items_4 {
                const type_72: string;
                export { type_72 as type };
                export namespace parameters_88 {
                    export namespace Key_13 {
                        const sentAs_289: string;
                        export { sentAs_289 as sentAs };
                    }
                    export { Key_13 as Key };
                    export namespace VersionId_16 {
                        const sentAs_290: string;
                        export { sentAs_290 as sentAs };
                    }
                    export { VersionId_16 as VersionId };
                }
                export { parameters_88 as parameters };
            }
            export { items_4 as items };
        }
    }
    export { parameters_87 as parameters };
}
export namespace DeleteObjectsOutput {
    export namespace data_36 {
        const type_73: string;
        export { type_73 as type };
        const xmlRoot_33: string;
        export { xmlRoot_33 as xmlRoot };
    }
    export { data_36 as data };
    export namespace parameters_89 {
        namespace Deleteds {
            const type_74: string;
            export { type_74 as type };
            const location_338: string;
            export { location_338 as location };
            const sentAs_291: string;
            export { sentAs_291 as sentAs };
            export namespace items_5 {
                const type_75: string;
                export { type_75 as type };
                export namespace parameters_90 {
                    export namespace Key_14 {
                        const sentAs_292: string;
                        export { sentAs_292 as sentAs };
                    }
                    export { Key_14 as Key };
                    export namespace VersionId_17 {
                        const sentAs_293: string;
                        export { sentAs_293 as sentAs };
                    }
                    export { VersionId_17 as VersionId };
                    export namespace DeleteMarker_2 {
                        const sentAs_294: string;
                        export { sentAs_294 as sentAs };
                    }
                    export { DeleteMarker_2 as DeleteMarker };
                    export namespace DeleteMarkerVersionId {
                        const sentAs_295: string;
                        export { sentAs_295 as sentAs };
                    }
                }
                export { parameters_90 as parameters };
            }
            export { items_5 as items };
        }
        namespace Errors {
            const type_76: string;
            export { type_76 as type };
            const location_339: string;
            export { location_339 as location };
            const sentAs_296: string;
            export { sentAs_296 as sentAs };
            export namespace items_6 {
                const type_77: string;
                export { type_77 as type };
                export namespace parameters_91 {
                    export namespace Key_15 {
                        const sentAs_297: string;
                        export { sentAs_297 as sentAs };
                    }
                    export { Key_15 as Key };
                    export namespace VersionId_18 {
                        const sentAs_298: string;
                        export { sentAs_298 as sentAs };
                    }
                    export { VersionId_18 as VersionId };
                    export namespace Code {
                        const sentAs_299: string;
                        export { sentAs_299 as sentAs };
                    }
                    export namespace Message {
                        const sentAs_300: string;
                        export { sentAs_300 as sentAs };
                    }
                }
                export { parameters_91 as parameters };
            }
            export { items_6 as items };
        }
    }
    export { parameters_89 as parameters };
}
export namespace InitiateMultipartUpload {
    const httpMethod_54: string;
    export { httpMethod_54 as httpMethod };
    const urlPath_40: string;
    export { urlPath_40 as urlPath };
    export namespace parameters_92 {
        export namespace Bucket_55 {
            const required_69: boolean;
            export { required_69 as required };
            const location_340: string;
            export { location_340 as location };
        }
        export { Bucket_55 as Bucket };
        export namespace Key_16 {
            const required_70: boolean;
            export { required_70 as required };
            const location_341: string;
            export { location_341 as location };
        }
        export { Key_16 as Key };
        export namespace ACL_6 {
            const location_342: string;
            export { location_342 as location };
            const sentAs_301: string;
            export { sentAs_301 as sentAs };
            const withPrefix_115: boolean;
            export { withPrefix_115 as withPrefix };
            const type_78: string;
            export { type_78 as type };
        }
        export { ACL_6 as ACL };
        export namespace GrantRead_4 {
            const location_343: string;
            export { location_343 as location };
            const sentAs_302: string;
            export { sentAs_302 as sentAs };
            const withPrefix_116: boolean;
            export { withPrefix_116 as withPrefix };
        }
        export { GrantRead_4 as GrantRead };
        export namespace GrantReadAcp_3 {
            const location_344: string;
            export { location_344 as location };
            const sentAs_303: string;
            export { sentAs_303 as sentAs };
            const withPrefix_117: boolean;
            export { withPrefix_117 as withPrefix };
        }
        export { GrantReadAcp_3 as GrantReadAcp };
        export namespace GrantWriteAcp_3 {
            const location_345: string;
            export { location_345 as location };
            const sentAs_304: string;
            export { sentAs_304 as sentAs };
            const withPrefix_118: boolean;
            export { withPrefix_118 as withPrefix };
        }
        export { GrantWriteAcp_3 as GrantWriteAcp };
        export namespace GrantFullControl_4 {
            const location_346: string;
            export { location_346 as location };
            const sentAs_305: string;
            export { sentAs_305 as sentAs };
            const withPrefix_119: boolean;
            export { withPrefix_119 as withPrefix };
        }
        export { GrantFullControl_4 as GrantFullControl };
        export namespace StorageClass_14 {
            const location_347: string;
            export { location_347 as location };
            const sentAs_306: string;
            export { sentAs_306 as sentAs };
            const withPrefix_120: boolean;
            export { withPrefix_120 as withPrefix };
            const type_79: string;
            export { type_79 as type };
        }
        export { StorageClass_14 as StorageClass };
        export namespace Metadata_7 {
            const type_80: string;
            export { type_80 as type };
            const location_348: string;
            export { location_348 as location };
            const sentAs_307: string;
            export { sentAs_307 as sentAs };
            const withPrefix_121: boolean;
            export { withPrefix_121 as withPrefix };
        }
        export { Metadata_7 as Metadata };
        export namespace WebsiteRedirectLocation_7 {
            const location_349: string;
            export { location_349 as location };
            const sentAs_308: string;
            export { sentAs_308 as sentAs };
            const withPrefix_122: boolean;
            export { withPrefix_122 as withPrefix };
        }
        export { WebsiteRedirectLocation_7 as WebsiteRedirectLocation };
        export namespace Expires_7 {
            const location_350: string;
            export { location_350 as location };
            const sentAs_309: string;
            export { sentAs_309 as sentAs };
            const type_81: string;
            export { type_81 as type };
        }
        export { Expires_7 as Expires };
        export namespace ContentType_7 {
            const location_351: string;
            export { location_351 as location };
            const sentAs_310: string;
            export { sentAs_310 as sentAs };
        }
        export { ContentType_7 as ContentType };
        export namespace SseKms_8 {
            const location_352: string;
            export { location_352 as location };
            const sentAs_311: string;
            export { sentAs_311 as sentAs };
            const withPrefix_123: boolean;
            export { withPrefix_123 as withPrefix };
            const type_82: string;
            export { type_82 as type };
        }
        export { SseKms_8 as SseKms };
        export namespace SseKmsKey_8 {
            const location_353: string;
            export { location_353 as location };
            const sentAs_312: string;
            export { sentAs_312 as sentAs };
            const withPrefix_124: boolean;
            export { withPrefix_124 as withPrefix };
        }
        export { SseKmsKey_8 as SseKmsKey };
        export namespace SseC_10 {
            const location_354: string;
            export { location_354 as location };
            const sentAs_313: string;
            export { sentAs_313 as sentAs };
            const withPrefix_125: boolean;
            export { withPrefix_125 as withPrefix };
        }
        export { SseC_10 as SseC };
        export namespace SseCKey_5 {
            const location_355: string;
            export { location_355 as location };
            const sentAs_314: string;
            export { sentAs_314 as sentAs };
            const type_83: string;
            export { type_83 as type };
            const withPrefix_126: boolean;
            export { withPrefix_126 as withPrefix };
        }
        export { SseCKey_5 as SseCKey };
    }
    export { parameters_92 as parameters };
}
export namespace InitiateMultipartUploadOutput {
    export namespace data_37 {
        const type_84: string;
        export { type_84 as type };
        const xmlRoot_34: string;
        export { xmlRoot_34 as xmlRoot };
    }
    export { data_37 as data };
    export namespace parameters_93 {
        export namespace Bucket_56 {
            const location_356: string;
            export { location_356 as location };
            const sentAs_315: string;
            export { sentAs_315 as sentAs };
        }
        export { Bucket_56 as Bucket };
        export namespace Key_17 {
            const location_357: string;
            export { location_357 as location };
            const sentAs_316: string;
            export { sentAs_316 as sentAs };
        }
        export { Key_17 as Key };
        export namespace UploadId {
            const location_358: string;
            export { location_358 as location };
            const sentAs_317: string;
            export { sentAs_317 as sentAs };
        }
        export namespace SseKms_9 {
            const location_359: string;
            export { location_359 as location };
            const sentAs_318: string;
            export { sentAs_318 as sentAs };
            const withPrefix_127: boolean;
            export { withPrefix_127 as withPrefix };
        }
        export { SseKms_9 as SseKms };
        export namespace SseKmsKey_9 {
            const location_360: string;
            export { location_360 as location };
            const sentAs_319: string;
            export { sentAs_319 as sentAs };
            const withPrefix_128: boolean;
            export { withPrefix_128 as withPrefix };
        }
        export { SseKmsKey_9 as SseKmsKey };
        export namespace SseC_11 {
            const location_361: string;
            export { location_361 as location };
            const sentAs_320: string;
            export { sentAs_320 as sentAs };
            const withPrefix_129: boolean;
            export { withPrefix_129 as withPrefix };
        }
        export { SseC_11 as SseC };
        export namespace SseCKeyMd5_5 {
            const location_362: string;
            export { location_362 as location };
            const sentAs_321: string;
            export { sentAs_321 as sentAs };
            const withPrefix_130: boolean;
            export { withPrefix_130 as withPrefix };
        }
        export { SseCKeyMd5_5 as SseCKeyMd5 };
    }
    export { parameters_93 as parameters };
}
export namespace ListMultipartUploads {
    const httpMethod_55: string;
    export { httpMethod_55 as httpMethod };
    const urlPath_41: string;
    export { urlPath_41 as urlPath };
    export namespace parameters_94 {
        export namespace Bucket_57 {
            const required_71: boolean;
            export { required_71 as required };
            const location_363: string;
            export { location_363 as location };
        }
        export { Bucket_57 as Bucket };
        export namespace Delimiter_4 {
            const location_364: string;
            export { location_364 as location };
            const sentAs_322: string;
            export { sentAs_322 as sentAs };
        }
        export { Delimiter_4 as Delimiter };
        export namespace KeyMarker_2 {
            const location_365: string;
            export { location_365 as location };
            const sentAs_323: string;
            export { sentAs_323 as sentAs };
        }
        export { KeyMarker_2 as KeyMarker };
        export namespace MaxUploads {
            const type_85: string;
            export { type_85 as type };
            const location_366: string;
            export { location_366 as location };
            const sentAs_324: string;
            export { sentAs_324 as sentAs };
        }
        export namespace Prefix_4 {
            const location_367: string;
            export { location_367 as location };
            const sentAs_325: string;
            export { sentAs_325 as sentAs };
        }
        export { Prefix_4 as Prefix };
        export namespace UploadIdMarker {
            const location_368: string;
            export { location_368 as location };
            const sentAs_326: string;
            export { sentAs_326 as sentAs };
        }
    }
    export { parameters_94 as parameters };
}
export namespace ListMultipartUploadsOutput {
    export namespace data_38 {
        const type_86: string;
        export { type_86 as type };
        const xmlRoot_35: string;
        export { xmlRoot_35 as xmlRoot };
    }
    export { data_38 as data };
    export namespace parameters_95 {
        export namespace Bucket_58 {
            const location_369: string;
            export { location_369 as location };
            const sentAs_327: string;
            export { sentAs_327 as sentAs };
        }
        export { Bucket_58 as Bucket };
        export namespace KeyMarker_3 {
            const location_370: string;
            export { location_370 as location };
            const sentAs_328: string;
            export { sentAs_328 as sentAs };
        }
        export { KeyMarker_3 as KeyMarker };
        export namespace UploadIdMarker_1 {
            const location_371: string;
            export { location_371 as location };
            const sentAs_329: string;
            export { sentAs_329 as sentAs };
        }
        export { UploadIdMarker_1 as UploadIdMarker };
        export namespace NextKeyMarker_1 {
            const location_372: string;
            export { location_372 as location };
            const sentAs_330: string;
            export { sentAs_330 as sentAs };
        }
        export { NextKeyMarker_1 as NextKeyMarker };
        export namespace Prefix_5 {
            const location_373: string;
            export { location_373 as location };
            const sentAs_331: string;
            export { sentAs_331 as sentAs };
        }
        export { Prefix_5 as Prefix };
        export namespace Delimiter_5 {
            const location_374: string;
            export { location_374 as location };
            const sentAs_332: string;
            export { sentAs_332 as sentAs };
        }
        export { Delimiter_5 as Delimiter };
        export namespace NextUploadIdMarker {
            const location_375: string;
            export { location_375 as location };
            const sentAs_333: string;
            export { sentAs_333 as sentAs };
        }
        export namespace MaxUploads_1 {
            const location_376: string;
            export { location_376 as location };
            const sentAs_334: string;
            export { sentAs_334 as sentAs };
        }
        export { MaxUploads_1 as MaxUploads };
        export namespace IsTruncated_2 {
            const location_377: string;
            export { location_377 as location };
            const sentAs_335: string;
            export { sentAs_335 as sentAs };
        }
        export { IsTruncated_2 as IsTruncated };
        export namespace Uploads {
            const type_87: string;
            export { type_87 as type };
            const location_378: string;
            export { location_378 as location };
            const sentAs_336: string;
            export { sentAs_336 as sentAs };
            export namespace items_7 {
                const type_88: string;
                export { type_88 as type };
                export namespace parameters_96 {
                    export namespace UploadId_1 {
                        const sentAs_337: string;
                        export { sentAs_337 as sentAs };
                    }
                    export { UploadId_1 as UploadId };
                    export namespace Key_18 {
                        const sentAs_338: string;
                        export { sentAs_338 as sentAs };
                    }
                    export { Key_18 as Key };
                    export namespace Initiated {
                        const sentAs_339: string;
                        export { sentAs_339 as sentAs };
                    }
                    export namespace StorageClass_15 {
                        const sentAs_340: string;
                        export { sentAs_340 as sentAs };
                    }
                    export { StorageClass_15 as StorageClass };
                    export { owner as Owner };
                    export { initiator as Initiator };
                }
                export { parameters_96 as parameters };
            }
            export { items_7 as items };
        }
        export { commonPrefixes as CommonPrefixes };
    }
    export { parameters_95 as parameters };
}
export namespace UploadPart {
    const httpMethod_56: string;
    export { httpMethod_56 as httpMethod };
    export namespace parameters_97 {
        export namespace Bucket_59 {
            const required_72: boolean;
            export { required_72 as required };
            const location_379: string;
            export { location_379 as location };
        }
        export { Bucket_59 as Bucket };
        export namespace Key_19 {
            const required_73: boolean;
            export { required_73 as required };
            const location_380: string;
            export { location_380 as location };
        }
        export { Key_19 as Key };
        export namespace PartNumber {
            const required_74: boolean;
            export { required_74 as required };
            const type_89: string;
            export { type_89 as type };
            const location_381: string;
            export { location_381 as location };
            const sentAs_341: string;
            export { sentAs_341 as sentAs };
        }
        export namespace UploadId_2 {
            const required_75: boolean;
            export { required_75 as required };
            const location_382: string;
            export { location_382 as location };
            const sentAs_342: string;
            export { sentAs_342 as sentAs };
        }
        export { UploadId_2 as UploadId };
        export namespace ContentMD5_2 {
            const location_383: string;
            export { location_383 as location };
            const sentAs_343: string;
            export { sentAs_343 as sentAs };
        }
        export { ContentMD5_2 as ContentMD5 };
        export namespace Body_2 {
            const location_384: string;
            export { location_384 as location };
        }
        export { Body_2 as Body };
        export namespace SourceFile_2 {
            const type_90: string;
            export { type_90 as type };
        }
        export { SourceFile_2 as SourceFile };
        export namespace Offset_2 {
            const type_91: string;
            export { type_91 as type };
        }
        export { Offset_2 as Offset };
        export namespace PartSize {
            const type_92: string;
            export { type_92 as type };
        }
        export namespace SseC_12 {
            const location_385: string;
            export { location_385 as location };
            const sentAs_344: string;
            export { sentAs_344 as sentAs };
            const withPrefix_131: boolean;
            export { withPrefix_131 as withPrefix };
        }
        export { SseC_12 as SseC };
        export namespace SseCKey_6 {
            const location_386: string;
            export { location_386 as location };
            const sentAs_345: string;
            export { sentAs_345 as sentAs };
            const type_93: string;
            export { type_93 as type };
            const withPrefix_132: boolean;
            export { withPrefix_132 as withPrefix };
        }
        export { SseCKey_6 as SseCKey };
        export namespace ProgressCallback_3 {
            const type_94: string;
            export { type_94 as type };
        }
        export { ProgressCallback_3 as ProgressCallback };
    }
    export { parameters_97 as parameters };
}
export namespace UploadPartOutput {
    export namespace parameters_98 {
        export namespace ETag_7 {
            const location_387: string;
            export { location_387 as location };
            const sentAs_346: string;
            export { sentAs_346 as sentAs };
        }
        export { ETag_7 as ETag };
        export namespace SseKms_10 {
            const location_388: string;
            export { location_388 as location };
            const sentAs_347: string;
            export { sentAs_347 as sentAs };
            const withPrefix_133: boolean;
            export { withPrefix_133 as withPrefix };
        }
        export { SseKms_10 as SseKms };
        export namespace SseKmsKey_10 {
            const location_389: string;
            export { location_389 as location };
            const sentAs_348: string;
            export { sentAs_348 as sentAs };
            const withPrefix_134: boolean;
            export { withPrefix_134 as withPrefix };
        }
        export { SseKmsKey_10 as SseKmsKey };
        export namespace SseC_13 {
            const location_390: string;
            export { location_390 as location };
            const sentAs_349: string;
            export { sentAs_349 as sentAs };
            const withPrefix_135: boolean;
            export { withPrefix_135 as withPrefix };
        }
        export { SseC_13 as SseC };
        export namespace SseCKeyMd5_6 {
            const location_391: string;
            export { location_391 as location };
            const sentAs_350: string;
            export { sentAs_350 as sentAs };
            const withPrefix_136: boolean;
            export { withPrefix_136 as withPrefix };
        }
        export { SseCKeyMd5_6 as SseCKeyMd5 };
    }
    export { parameters_98 as parameters };
}
export namespace ListParts {
    const httpMethod_57: string;
    export { httpMethod_57 as httpMethod };
    export namespace parameters_99 {
        export namespace Bucket_60 {
            const required_76: boolean;
            export { required_76 as required };
            const location_392: string;
            export { location_392 as location };
        }
        export { Bucket_60 as Bucket };
        export namespace Key_20 {
            const required_77: boolean;
            export { required_77 as required };
            const location_393: string;
            export { location_393 as location };
        }
        export { Key_20 as Key };
        export namespace UploadId_3 {
            const required_78: boolean;
            export { required_78 as required };
            const location_394: string;
            export { location_394 as location };
            const sentAs_351: string;
            export { sentAs_351 as sentAs };
        }
        export { UploadId_3 as UploadId };
        export namespace MaxParts {
            const type_95: string;
            export { type_95 as type };
            const location_395: string;
            export { location_395 as location };
            const sentAs_352: string;
            export { sentAs_352 as sentAs };
        }
        export namespace PartNumberMarker {
            const type_96: string;
            export { type_96 as type };
            const location_396: string;
            export { location_396 as location };
            const sentAs_353: string;
            export { sentAs_353 as sentAs };
        }
    }
    export { parameters_99 as parameters };
}
export namespace ListPartsOutput {
    export namespace data_39 {
        const type_97: string;
        export { type_97 as type };
        const xmlRoot_36: string;
        export { xmlRoot_36 as xmlRoot };
    }
    export { data_39 as data };
    export namespace parameters_100 {
        export namespace Bucket_61 {
            const location_397: string;
            export { location_397 as location };
            const sentAs_354: string;
            export { sentAs_354 as sentAs };
        }
        export { Bucket_61 as Bucket };
        export namespace Key_21 {
            const location_398: string;
            export { location_398 as location };
            const sentAs_355: string;
            export { sentAs_355 as sentAs };
        }
        export { Key_21 as Key };
        export namespace UploadId_4 {
            const location_399: string;
            export { location_399 as location };
            const sentAs_356: string;
            export { sentAs_356 as sentAs };
        }
        export { UploadId_4 as UploadId };
        export namespace PartNumberMarker_1 {
            const location_400: string;
            export { location_400 as location };
            const sentAs_357: string;
            export { sentAs_357 as sentAs };
        }
        export { PartNumberMarker_1 as PartNumberMarker };
        export namespace NextPartNumberMarker {
            const location_401: string;
            export { location_401 as location };
            const sentAs_358: string;
            export { sentAs_358 as sentAs };
        }
        export namespace MaxParts_1 {
            const location_402: string;
            export { location_402 as location };
            const sentAs_359: string;
            export { sentAs_359 as sentAs };
        }
        export { MaxParts_1 as MaxParts };
        export namespace IsTruncated_3 {
            const location_403: string;
            export { location_403 as location };
            const sentAs_360: string;
            export { sentAs_360 as sentAs };
        }
        export { IsTruncated_3 as IsTruncated };
        export namespace StorageClass_16 {
            const location_404: string;
            export { location_404 as location };
            const sentAs_361: string;
            export { sentAs_361 as sentAs };
        }
        export { StorageClass_16 as StorageClass };
        export { initiator as Initiator };
        export { owner as Owner };
        export namespace Parts {
            const type_98: string;
            export { type_98 as type };
            const location_405: string;
            export { location_405 as location };
            const sentAs_362: string;
            export { sentAs_362 as sentAs };
            export namespace items_8 {
                const type_99: string;
                export { type_99 as type };
                export namespace parameters_101 {
                    export namespace PartNumber_1 {
                        const sentAs_363: string;
                        export { sentAs_363 as sentAs };
                    }
                    export { PartNumber_1 as PartNumber };
                    export namespace LastModified_6 {
                        const sentAs_364: string;
                        export { sentAs_364 as sentAs };
                    }
                    export { LastModified_6 as LastModified };
                    export namespace ETag_8 {
                        const sentAs_365: string;
                        export { sentAs_365 as sentAs };
                    }
                    export { ETag_8 as ETag };
                    export namespace Size_3 {
                        const sentAs_366: string;
                        export { sentAs_366 as sentAs };
                    }
                    export { Size_3 as Size };
                }
                export { parameters_101 as parameters };
            }
            export { items_8 as items };
        }
    }
    export { parameters_100 as parameters };
}
export namespace CopyPart {
    const httpMethod_58: string;
    export { httpMethod_58 as httpMethod };
    export namespace parameters_102 {
        export namespace Bucket_62 {
            const required_79: boolean;
            export { required_79 as required };
            const location_406: string;
            export { location_406 as location };
        }
        export { Bucket_62 as Bucket };
        export namespace Key_22 {
            const required_80: boolean;
            export { required_80 as required };
            const location_407: string;
            export { location_407 as location };
        }
        export { Key_22 as Key };
        export namespace PartNumber_2 {
            const required_81: boolean;
            export { required_81 as required };
            const location_408: string;
            export { location_408 as location };
            const sentAs_367: string;
            export { sentAs_367 as sentAs };
            const type_100: string;
            export { type_100 as type };
        }
        export { PartNumber_2 as PartNumber };
        export namespace UploadId_5 {
            const required_82: boolean;
            export { required_82 as required };
            const location_409: string;
            export { location_409 as location };
            const sentAs_368: string;
            export { sentAs_368 as sentAs };
        }
        export { UploadId_5 as UploadId };
        export namespace CopySource_1 {
            const required_83: boolean;
            export { required_83 as required };
            const location_410: string;
            export { location_410 as location };
            const sentAs_369: string;
            export { sentAs_369 as sentAs };
            const skipEncoding_1: boolean;
            export { skipEncoding_1 as skipEncoding };
            const withPrefix_137: boolean;
            export { withPrefix_137 as withPrefix };
        }
        export { CopySource_1 as CopySource };
        export namespace CopySourceRange {
            const location_411: string;
            export { location_411 as location };
            const sentAs_370: string;
            export { sentAs_370 as sentAs };
            const withPrefix_138: boolean;
            export { withPrefix_138 as withPrefix };
        }
        export namespace SseC_14 {
            const location_412: string;
            export { location_412 as location };
            const sentAs_371: string;
            export { sentAs_371 as sentAs };
            const withPrefix_139: boolean;
            export { withPrefix_139 as withPrefix };
        }
        export { SseC_14 as SseC };
        export namespace SseCKey_7 {
            const location_413: string;
            export { location_413 as location };
            const sentAs_372: string;
            export { sentAs_372 as sentAs };
            const type_101: string;
            export { type_101 as type };
            const withPrefix_140: boolean;
            export { withPrefix_140 as withPrefix };
        }
        export { SseCKey_7 as SseCKey };
        export namespace CopySourceSseC_1 {
            const location_414: string;
            export { location_414 as location };
            const sentAs_373: string;
            export { sentAs_373 as sentAs };
            const withPrefix_141: boolean;
            export { withPrefix_141 as withPrefix };
        }
        export { CopySourceSseC_1 as CopySourceSseC };
        export namespace CopySourceSseCKey_1 {
            const location_415: string;
            export { location_415 as location };
            const sentAs_374: string;
            export { sentAs_374 as sentAs };
            const type_102: string;
            export { type_102 as type };
            const withPrefix_142: boolean;
            export { withPrefix_142 as withPrefix };
        }
        export { CopySourceSseCKey_1 as CopySourceSseCKey };
    }
    export { parameters_102 as parameters };
}
export namespace CopyPartOutput {
    export namespace data_40 {
        const type_103: string;
        export { type_103 as type };
        const xmlRoot_37: string;
        export { xmlRoot_37 as xmlRoot };
    }
    export { data_40 as data };
    export namespace parameters_103 {
        export namespace LastModified_7 {
            const location_416: string;
            export { location_416 as location };
            const sentAs_375: string;
            export { sentAs_375 as sentAs };
        }
        export { LastModified_7 as LastModified };
        export namespace ETag_9 {
            const location_417: string;
            export { location_417 as location };
            const sentAs_376: string;
            export { sentAs_376 as sentAs };
        }
        export { ETag_9 as ETag };
        export namespace SseKms_11 {
            const location_418: string;
            export { location_418 as location };
            const sentAs_377: string;
            export { sentAs_377 as sentAs };
            const withPrefix_143: boolean;
            export { withPrefix_143 as withPrefix };
        }
        export { SseKms_11 as SseKms };
        export namespace SseKmsKey_11 {
            const location_419: string;
            export { location_419 as location };
            const sentAs_378: string;
            export { sentAs_378 as sentAs };
            const withPrefix_144: boolean;
            export { withPrefix_144 as withPrefix };
        }
        export { SseKmsKey_11 as SseKmsKey };
        export namespace SseC_15 {
            const location_420: string;
            export { location_420 as location };
            const sentAs_379: string;
            export { sentAs_379 as sentAs };
            const withPrefix_145: boolean;
            export { withPrefix_145 as withPrefix };
        }
        export { SseC_15 as SseC };
        export namespace SseCKeyMd5_7 {
            const location_421: string;
            export { location_421 as location };
            const sentAs_380: string;
            export { sentAs_380 as sentAs };
            const withPrefix_146: boolean;
            export { withPrefix_146 as withPrefix };
        }
        export { SseCKeyMd5_7 as SseCKeyMd5 };
    }
    export { parameters_103 as parameters };
}
export namespace AbortMultipartUpload {
    const httpMethod_59: string;
    export { httpMethod_59 as httpMethod };
    export namespace parameters_104 {
        export namespace Bucket_63 {
            const required_84: boolean;
            export { required_84 as required };
            const location_422: string;
            export { location_422 as location };
        }
        export { Bucket_63 as Bucket };
        export namespace Key_23 {
            const required_85: boolean;
            export { required_85 as required };
            const location_423: string;
            export { location_423 as location };
        }
        export { Key_23 as Key };
        export namespace UploadId_6 {
            const required_86: boolean;
            export { required_86 as required };
            const location_424: string;
            export { location_424 as location };
            const sentAs_381: string;
            export { sentAs_381 as sentAs };
        }
        export { UploadId_6 as UploadId };
    }
    export { parameters_104 as parameters };
}
export namespace CompleteMultipartUpload {
    const httpMethod_60: string;
    export { httpMethod_60 as httpMethod };
    export namespace data_41 {
        const xmlRoot_38: string;
        export { xmlRoot_38 as xmlRoot };
    }
    export { data_41 as data };
    export namespace parameters_105 {
        export namespace Bucket_64 {
            const required_87: boolean;
            export { required_87 as required };
            const location_425: string;
            export { location_425 as location };
        }
        export { Bucket_64 as Bucket };
        export namespace Key_24 {
            const required_88: boolean;
            export { required_88 as required };
            const location_426: string;
            export { location_426 as location };
        }
        export { Key_24 as Key };
        export namespace UploadId_7 {
            const required_89: boolean;
            export { required_89 as required };
            const location_427: string;
            export { location_427 as location };
            const sentAs_382: string;
            export { sentAs_382 as sentAs };
        }
        export { UploadId_7 as UploadId };
        export namespace Parts_1 {
            const required_90: boolean;
            export { required_90 as required };
            const type_104: string;
            export { type_104 as type };
            const location_428: string;
            export { location_428 as location };
            const sentAs_383: string;
            export { sentAs_383 as sentAs };
            export namespace items_9 {
                const type_105: string;
                export { type_105 as type };
                export namespace parameters_106 {
                    export namespace PartNumber_3 {
                        const sentAs_384: string;
                        export { sentAs_384 as sentAs };
                    }
                    export { PartNumber_3 as PartNumber };
                    export namespace ETag_10 {
                        const sentAs_385: string;
                        export { sentAs_385 as sentAs };
                    }
                    export { ETag_10 as ETag };
                }
                export { parameters_106 as parameters };
            }
            export { items_9 as items };
        }
        export { Parts_1 as Parts };
    }
    export { parameters_105 as parameters };
}
export namespace CompleteMultipartUploadOutput {
    export namespace data_42 {
        const type_106: string;
        export { type_106 as type };
        const xmlRoot_39: string;
        export { xmlRoot_39 as xmlRoot };
    }
    export { data_42 as data };
    export namespace parameters_107 {
        export namespace VersionId_19 {
            const location_429: string;
            export { location_429 as location };
            const sentAs_386: string;
            export { sentAs_386 as sentAs };
            const withPrefix_147: boolean;
            export { withPrefix_147 as withPrefix };
        }
        export { VersionId_19 as VersionId };
        export namespace Location_7 {
            const location_430: string;
            export { location_430 as location };
            const sentAs_387: string;
            export { sentAs_387 as sentAs };
        }
        export { Location_7 as Location };
        export namespace Bucket_65 {
            const location_431: string;
            export { location_431 as location };
            const sentAs_388: string;
            export { sentAs_388 as sentAs };
        }
        export { Bucket_65 as Bucket };
        export namespace Key_25 {
            const location_432: string;
            export { location_432 as location };
            const sentAs_389: string;
            export { sentAs_389 as sentAs };
        }
        export { Key_25 as Key };
        export namespace ETag_11 {
            const location_433: string;
            export { location_433 as location };
            const sentAs_390: string;
            export { sentAs_390 as sentAs };
        }
        export { ETag_11 as ETag };
        export namespace SseKms_12 {
            const location_434: string;
            export { location_434 as location };
            const sentAs_391: string;
            export { sentAs_391 as sentAs };
            const withPrefix_148: boolean;
            export { withPrefix_148 as withPrefix };
        }
        export { SseKms_12 as SseKms };
        export namespace SseKmsKey_12 {
            const location_435: string;
            export { location_435 as location };
            const sentAs_392: string;
            export { sentAs_392 as sentAs };
            const withPrefix_149: boolean;
            export { withPrefix_149 as withPrefix };
        }
        export { SseKmsKey_12 as SseKmsKey };
        export namespace SseC_16 {
            const location_436: string;
            export { location_436 as location };
            const sentAs_393: string;
            export { sentAs_393 as sentAs };
            const withPrefix_150: boolean;
            export { withPrefix_150 as withPrefix };
        }
        export { SseC_16 as SseC };
        export namespace SseCKeyMd5_8 {
            const location_437: string;
            export { location_437 as location };
            const sentAs_394: string;
            export { sentAs_394 as sentAs };
            const withPrefix_151: boolean;
            export { withPrefix_151 as withPrefix };
        }
        export { SseCKeyMd5_8 as SseCKeyMd5 };
    }
    export { parameters_107 as parameters };
}
export namespace GetBucketInventory {
    const httpMethod_61: string;
    export { httpMethod_61 as httpMethod };
    const urlPath_42: string;
    export { urlPath_42 as urlPath };
    export namespace parameters_108 {
        export namespace Bucket_66 {
            const required_91: boolean;
            export { required_91 as required };
            const location_438: string;
            export { location_438 as location };
        }
        export { Bucket_66 as Bucket };
    }
    export { parameters_108 as parameters };
}
export namespace GetBucketInventoryOutput {
    export namespace data_43 {
        const type_107: string;
        export { type_107 as type };
        const xmlRoot_40: string;
        export { xmlRoot_40 as xmlRoot };
    }
    export { data_43 as data };
    export namespace parameters_109 {
        export namespace Rules_2 {
            const type_108: string;
            export { type_108 as type };
            const location_439: string;
            export { location_439 as location };
            const sentAs_395: string;
            export { sentAs_395 as sentAs };
            export namespace items_10 {
                const type_109: string;
                export { type_109 as type };
                export namespace parameters_110 {
                    namespace Id {
                        const sentAs_396: string;
                        export { sentAs_396 as sentAs };
                    }
                    namespace IsEnabled {
                        const sentAs_397: string;
                        export { sentAs_397 as sentAs };
                    }
                    namespace Filter {
                        const type_110: string;
                        export { type_110 as type };
                        const sentAs_398: string;
                        export { sentAs_398 as sentAs };
                        export namespace parameters_111 {
                            export namespace Prefix_6 {
                                const sentAs_399: string;
                                export { sentAs_399 as sentAs };
                            }
                            export { Prefix_6 as Prefix };
                        }
                        export { parameters_111 as parameters };
                    }
                    namespace Destination {
                        const type_111: string;
                        export { type_111 as type };
                        const sentAs_400: string;
                        export { sentAs_400 as sentAs };
                        export namespace parameters_112 {
                            export namespace Format {
                                const sentAs_401: string;
                                export { sentAs_401 as sentAs };
                            }
                            export namespace Bucket_67 {
                                const sentAs_402: string;
                                export { sentAs_402 as sentAs };
                            }
                            export { Bucket_67 as Bucket };
                            export namespace Prefix_7 {
                                const sentAs_403: string;
                                export { sentAs_403 as sentAs };
                            }
                            export { Prefix_7 as Prefix };
                        }
                        export { parameters_112 as parameters };
                    }
                    namespace Schedule {
                        const type_112: string;
                        export { type_112 as type };
                        const sentAs_404: string;
                        export { sentAs_404 as sentAs };
                        export namespace parameters_113 {
                            namespace Frequency {
                                const sentAs_405: string;
                                export { sentAs_405 as sentAs };
                            }
                        }
                        export { parameters_113 as parameters };
                    }
                    namespace IncludedObjectVersions {
                        const sentAs_406: string;
                        export { sentAs_406 as sentAs };
                    }
                    namespace OptionalFields {
                        const type_113: string;
                        export { type_113 as type };
                        const location_440: string;
                        export { location_440 as location };
                        const sentAs_407: string;
                        export { sentAs_407 as sentAs };
                        export namespace parameters_114 {
                            namespace Field {
                                const type_114: string;
                                export { type_114 as type };
                                const sentAs_408: string;
                                export { sentAs_408 as sentAs };
                                export namespace items_11 {
                                    const type_115: string;
                                    export { type_115 as type };
                                }
                                export { items_11 as items };
                            }
                        }
                        export { parameters_114 as parameters };
                    }
                    namespace LastExportTime {
                        const sentAs_409: string;
                        export { sentAs_409 as sentAs };
                    }
                }
                export { parameters_110 as parameters };
            }
            export { items_10 as items };
        }
        export { Rules_2 as Rules };
    }
    export { parameters_109 as parameters };
}
export namespace SetBucketInventory {
    const httpMethod_62: string;
    export { httpMethod_62 as httpMethod };
    const urlPath_43: string;
    export { urlPath_43 as urlPath };
    export namespace parameters_115 {
        export namespace Bucket_68 {
            const required_92: boolean;
            export { required_92 as required };
            const location_441: string;
            export { location_441 as location };
        }
        export { Bucket_68 as Bucket };
        export namespace Id_1 {
            const location_442: string;
            export { location_442 as location };
            const sentAs_410: string;
            export { sentAs_410 as sentAs };
        }
        export { Id_1 as Id };
        export { InventoryConfiguration };
    }
    export { parameters_115 as parameters };
}
export namespace SetBucketInventoryOutput {
    export namespace data_44 {
        const type_116: string;
        export { type_116 as type };
        const xmlRoot_41: string;
        export { xmlRoot_41 as xmlRoot };
    }
    export { data_44 as data };
    export namespace parameters_116 {
        export { InventoryConfiguration };
    }
    export { parameters_116 as parameters };
}
export namespace DeleteInventory {
    const httpMethod_63: string;
    export { httpMethod_63 as httpMethod };
    const urlPath_44: string;
    export { urlPath_44 as urlPath };
    export namespace parameters_117 {
        export namespace Bucket_69 {
            const required_93: boolean;
            export { required_93 as required };
            const location_443: string;
            export { location_443 as location };
        }
        export { Bucket_69 as Bucket };
        export namespace Id_2 {
            const location_444: string;
            export { location_444 as location };
            const sentAs_411: string;
            export { sentAs_411 as sentAs };
        }
        export { Id_2 as Id };
    }
    export { parameters_117 as parameters };
}
export namespace DeleteInventoryOutput {
    export namespace data_45 {
        const type_117: string;
        export { type_117 as type };
        const xmlRoot_42: string;
        export { xmlRoot_42 as xmlRoot };
    }
    export { data_45 as data };
    export namespace parameters_118 {
        export { InventoryConfiguration };
    }
    export { parameters_118 as parameters };
}
export namespace GetBucketEncryption {
    const httpMethod_64: string;
    export { httpMethod_64 as httpMethod };
    const urlPath_45: string;
    export { urlPath_45 as urlPath };
    export namespace parameters_119 {
        export namespace Bucket_70 {
            const required_94: boolean;
            export { required_94 as required };
            const location_445: string;
            export { location_445 as location };
        }
        export { Bucket_70 as Bucket };
    }
    export { parameters_119 as parameters };
}
export namespace GetBucketEncryptionOutput {
    export namespace data_46 {
        const type_118: string;
        export { type_118 as type };
        const xmlRoot_43: string;
        export { xmlRoot_43 as xmlRoot };
    }
    export { data_46 as data };
    export namespace parameters_120 {
        namespace Rule {
            const type_119: string;
            export { type_119 as type };
            const location_446: string;
            export { location_446 as location };
            const sentAs_412: string;
            export { sentAs_412 as sentAs };
            export namespace parameters_121 {
                namespace ApplyServerSideEncryptionByDefault {
                    const type_120: string;
                    export { type_120 as type };
                    const sentAs_413: string;
                    export { sentAs_413 as sentAs };
                    export namespace parameters_122 {
                        namespace SSEAlgorithm {
                            const sentAs_414: string;
                            export { sentAs_414 as sentAs };
                        }
                        namespace KMSMasterKeyID {
                            const sentAs_415: string;
                            export { sentAs_415 as sentAs };
                        }
                    }
                    export { parameters_122 as parameters };
                }
            }
            export { parameters_121 as parameters };
        }
    }
    export { parameters_120 as parameters };
}
export namespace SetBucketEncryption {
    const httpMethod_65: string;
    export { httpMethod_65 as httpMethod };
    const urlPath_46: string;
    export { urlPath_46 as urlPath };
    export namespace data_47 {
        const xmlRoot_44: string;
        export { xmlRoot_44 as xmlRoot };
    }
    export { data_47 as data };
    export namespace parameters_123 {
        export namespace Bucket_71 {
            const required_95: boolean;
            export { required_95 as required };
            const location_447: string;
            export { location_447 as location };
        }
        export { Bucket_71 as Bucket };
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_123 as parameters };
}
export namespace SetBucketEncryptionOutput {
    export namespace data_48 {
        const type_121: string;
        export { type_121 as type };
        const xmlRoot_45: string;
        export { xmlRoot_45 as xmlRoot };
    }
    export { data_48 as data };
    export namespace parameters_124 {
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_124 as parameters };
}
export namespace DeleteBucketEncryption {
    const httpMethod_66: string;
    export { httpMethod_66 as httpMethod };
    const urlPath_47: string;
    export { urlPath_47 as urlPath };
    export namespace parameters_125 {
        export namespace Bucket_72 {
            const required_96: boolean;
            export { required_96 as required };
            const location_448: string;
            export { location_448 as location };
        }
        export { Bucket_72 as Bucket };
    }
    export { parameters_125 as parameters };
}
export namespace DeleteBucketEncryptionOutput {
    export namespace data_49 {
        const type_122: string;
        export { type_122 as type };
        const xmlRoot_46: string;
        export { xmlRoot_46 as xmlRoot };
    }
    export { data_49 as data };
    export namespace parameters_126 {
        export { bucketEncryptionRule as Rule };
    }
    export { parameters_126 as parameters };
}
export {};
