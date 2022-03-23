import OOS from '../libs/oos-js-sdk';
import hash from 'object-hash';
import dayjs from 'dayjs';
export default class Ctyun {
    constructor(options) {
        this._client = void 0;
        this._options = {
            access_key_id: '',
            secret_access_key: '',
            endpoint: '',
            bucket: Ctyun._bucket,
        };
        Object.assign(this._options, options);
        if (!options.bucket) {
            this._options.bucket = Ctyun._bucket;
        }
        const keys = Object.keys(this._options);
        if (!keys.includes('access_key_id') || !keys.includes('secret_access_key'))
            throw new Error('缺少必要的配置信息');
        const entries = Object.entries(this._options);
        const integrity = entries.some(item => item[0] !== 'bucket' &&
            (item[1] === '' || item[1] === null || item[1] === undefined));
        if (integrity)
            throw new Error('请填写完整的配置信息');
        this._client = new OOS.S3({
            accessKeyId: this._options.access_key_id,
            secretAccessKey: this._options.secret_access_key,
            endpoint: `https://${options.endpoint}`,
            signatureVersion: 'v4',
            apiVersion: '2006-03-01',
            s3ForcePathStyle: true,
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
                    Body: item
                };
                this._client.putObject(params, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    const url = `https://${this._options.bucket}.${this._options.endpoint}/${fileHash}.${fileSuffix}`;
                    if (filesListLength === 1) {
                        return resolve(url);
                    }
                    else {
                        urls.push(url);
                        if (urls.length === filesListLength)
                            return resolve(urls);
                    }
                });
            }
        });
    }
    close() {
        this._client.close();
    }
}
Ctyun._bucket = 'g-gallery';
