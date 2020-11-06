import { __awaiter } from "tslib";
import OSS from 'ali-oss';
import hash from 'object-hash';
import dayjs from 'dayjs';
export default class Aliyun {
    constructor(options) {
        this._client = void 0;
        this._options = {
            accessKeyId: '',
            accessKeySecret: '',
            endpoint: '',
            bucket: '',
            secure: true,
        };
        Object.assign(this._options, options);
        this._options.bucket = Aliyun._bucket;
        const keys = Object.keys(this._options);
        if (!keys.includes('accessKeyId') ||
            !keys.includes('accessKeyId') ||
            !keys.includes('endpoint'))
            throw new Error('缺少必要的配置信息');
        const values = Object.values(this._options);
        const integrity = values.some(item => item === '' || item === null || item === undefined);
        if (integrity)
            throw new Error('请填写合法的配置信息');
        this._client = new OSS(this._options);
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
                const { url } = yield this._client.put(`${fileHash}.${fileSuffix}`, item);
                if (filesListLength === 1) {
                    return resolve(url);
                }
                else {
                    urls.push(url);
                    if (urls.length === filesListLength)
                        return resolve(urls);
                }
            }
        }));
    }
}
Aliyun._bucket = 'guangdianyun';
