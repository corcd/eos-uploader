import S3 from 'aws-sdk/clients/s3';
import hash from 'object-hash';
import dayjs from 'dayjs';
export default class Cmecloud {
    constructor(options) {
        this._client = void 0;
        this._options = {
            apiVersion: '2006‐03‐01',
            accessKeyId: '',
            secretAccessKey: '',
            endpoint: '',
            bucket: Cmecloud._bucket,
            s3ForcePathStyle: true,
            signatureVersion: 'v2',
            sslEnabled: false,
        };
        Object.assign(this._options, options);
        if (!options.bucket) {
            this._options.bucket = Cmecloud._bucket;
        }
        const keys = Object.keys(this._options);
        if (!keys.includes('accessKeyId') ||
            !keys.includes('secretAccessKey') ||
            !keys.includes('endpoint') ||
            !keys.includes('sslEnabled'))
            throw new Error('缺少必要的配置信息');
        const entries = Object.entries(this._options);
        const integrity = entries.some(item => item[0] !== 'bucket' &&
            (item[1] === '' || item[1] === null || item[1] === undefined));
        if (integrity)
            throw new Error('请填写完整的配置信息');
        this._client = new S3(this._options);
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
        return new Promise((resolve, reject) => {
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
                    Body: item,
                    ACL: 'public-read',
                };
                this._client.putObject(params, err => {
                    if (err) {
                        return reject(err);
                    }
                    if (filesListLength === 1) {
                        return resolve(`${this._options.sslEnabled ? 'https' : 'http'}://${this._options.endpoint}/${this._options.bucket}/${fileHash}.${fileSuffix}`);
                    }
                    else {
                        urls.push(`${this._options.sslEnabled ? 'https' : 'http'}://${this._options.endpoint}/${this._options.bucket}/${fileHash}.${fileSuffix}`);
                        if (urls.length === filesListLength)
                            return resolve(urls);
                    }
                });
            }
        });
    }
}
Cmecloud._bucket = 'gallery';
