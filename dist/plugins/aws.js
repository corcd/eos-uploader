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
            region: '',
            cname: '',
        };
        Object.assign(this._options, options);
        const keys = Object.keys(this._options);
        if (!keys.includes('accessKeyId') ||
            !keys.includes('secretAccessKey') ||
            !keys.includes('region') ||
            !keys.includes('cname'))
            throw new Error('缺少必要的配置信息');
        const values = Object.values(this._options);
        const integrity = values.some(item => item === '' || item === null || item === undefined);
        if (integrity)
            throw new Error('请填写完整的配置信息');
        const credentials = {
            apiVersion: '2014-06-30',
            accessKeyId: this._options.accessKeyId,
            secretAccessKey: this._options.secretAccessKey,
        };
        AWS.config.update(credentials);
        AWS.config.region = this._options.region;
        this._client = new AWS.S3({
            params: { Bucket: Aws._bucket },
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
                    Bucket: Aws._bucket,
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
