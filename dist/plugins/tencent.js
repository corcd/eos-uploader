import { __awaiter } from "tslib";
import hash from 'object-hash';
import dayjs from 'dayjs';
const COS = require('cos-js-sdk-v5');
export default class Tencent {
    constructor(options) {
        this._client = void 0;
        this._options = {
            accessKeyId: '',
            accessKeySecret: '',
            endpoint: '',
            region: '',
            bucket: Tencent._bucket,
            cname: '',
            secure: true,
        };
        Object.assign(this._options, options);
        if (!options.bucket) {
            this._options.bucket = Tencent._bucket;
        }
        const keys = Object.keys(this._options);
        if (!keys.includes('accessKeyId') || !keys.includes('accessKeySecret'))
            throw new Error('缺少必要的配置信息');
        const { endpoint, region } = this._options;
        if (Object.values(Object.create({ endpoint, region })).some(item => item === '' || item === null || item === undefined))
            throw new Error('必须提供 endpoint 或者 region 其中一个配置参数');
        const entries = Object.entries(this._options);
        const integrity = entries.some(item => item[0] !== 'endpoint' &&
            item[0] !== 'region' &&
            item[0] !== 'cname' &&
            (item[1] === '' || item[1] === null || item[1] === undefined));
        if (integrity)
            throw new Error('请填写完整的配置信息');
        const _region = this._options.endpoint.match(/.*?\.cos\.(\S*)\.myqcloud\.com/i);
        _region && (this._options.region = _region[1]);
        this._client = new COS({
            SecretId: this._options.accessKeyId,
            SecretKey: this._options.accessKeySecret,
            Protocol: this._options.secure ? 'https:' : 'http:',
        });
    }
    get getClientInstance() {
        return this._client;
    }
    _formatFileName(file) {
        const fileHash = hash({
            name: file.name,
            timestamp: dayjs().format('{YYYY} MM-DD HH:mm:ss'),
            salt: Math.random(),
        }, { algorithm: 'sha1' });
        const fileSuffix = file.name.split('.').slice(-1)[0];
        return { fileHash, fileSuffix };
    }
    upload(files) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!this._client)
                return reject('SDK 加载失败');
            if (!files)
                return reject('无上传内容');
            const fn = (filename, file) => {
                return new Promise((resolve, reject) => {
                    this._client.putObject({
                        Bucket: this._options.bucket,
                        Region: this._options.region,
                        Key: filename,
                        StorageClass: 'STANDARD',
                        Body: file,
                    }, (err, data) => {
                        if (err)
                            return reject(err);
                        return resolve(data);
                    });
                });
            };
            const filesListLength = files.length;
            const urls = [];
            for (const item of files) {
                const { fileHash, fileSuffix } = this._formatFileName(item);
                try {
                    const { statusCode } = yield fn(`${fileHash}.${fileSuffix}`, item);
                    if (statusCode !== 200)
                        return reject();
                }
                catch (err) {
                    return reject(err);
                }
                const originalUrl = this._options.endpoint
                    ? `https://${this._options.endpoint}/${fileHash}.${fileSuffix}`
                    : `https://${this._options.bucket}.cos.${this._options.region}.myqcloud.com/${fileHash}.${fileSuffix}`;
                if (filesListLength === 1) {
                    return resolve(this._options.cname
                        ? `https://${this._options.cname}/${fileHash}.${fileSuffix}`
                        : originalUrl);
                }
                else {
                    urls.push(this._options.cname
                        ? `https://${this._options.cname}/${fileHash}.${fileSuffix}`
                        : originalUrl);
                    if (urls.length === filesListLength)
                        return resolve(urls);
                }
            }
        }));
    }
}
Tencent._bucket = 'guangdianyun';
