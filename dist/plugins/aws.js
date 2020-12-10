import { __awaiter } from "tslib";
import AWS from 'aws-sdk';
import hash from 'object-hash';
import dayjs from 'dayjs';
export default class Aws {
    constructor(options) {
        this._client = void 0;
        this._options = {
            accessKeyId: '',
            secretAccessKey: '',
            endpoint: '',
            region: '',
            bucket: Aws._bucket,
            cname: '',
        };
        Object.assign(this._options, options);
        if (!options.bucket) {
            this._options.bucket = Aws._bucket;
        }
        const keys = Object.keys(this._options);
        if (!keys.includes('accessKeyId') ||
            !keys.includes('secretAccessKey') ||
            !keys.includes('cname'))
            throw new Error('缺少必要的配置信息');
        const { endpoint, region } = this._options;
        if (Object.values(Object.create({ endpoint, region })).some(item => item === '' || item === null || item === undefined))
            throw new Error('必须提供 endpoint 或者 region 其中一个配置参数');
        const entries = Object.entries(this._options);
        const integrity = entries.some(item => item[0] !== 'endpoint' &&
            item[0] !== 'region' &&
            (item[1] === '' || item[1] === null || item[1] === undefined));
        if (integrity)
            throw new Error('请填写完整的配置信息');
        const credentials = {
            apiVersion: '2014-06-30',
            accessKeyId: this._options.accessKeyId,
            secretAccessKey: this._options.secretAccessKey,
        };
        const _region = this._options.endpoint.match(/s3\.(\S*)\.amazonaws\.com\.cn/i);
        AWS.config.update(credentials);
        AWS.config.region = _region ? _region[1] : this._options.region;
        this._client = new AWS.S3({
            params: { Bucket: this._options.bucket },
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
            const filesListLength = files.length;
            const urls = [];
            for (const item of files) {
                const { fileHash, fileSuffix } = this._formatFileName(item);
                const params = {
                    Key: `${fileHash}.${fileSuffix}`,
                    Bucket: this._options.bucket,
                    ContentType: item.type,
                    Body: item,
                    'Access-Control-Allow-Credentials': '*',
                    ACL: 'public-read',
                };
                this._client.upload(params, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    if (filesListLength === 1) {
                        return resolve(`https://${this._options.cname}/${data.Key}`);
                    }
                    else {
                        urls.push(`https://${this._options.cname}/${data.Key}`);
                        if (urls.length === filesListLength)
                            return resolve(urls);
                    }
                });
            }
        }));
    }
}
Aws._bucket = 'gallery-prod';
