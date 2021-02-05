import { __awaiter } from "tslib";
import ObsClient from '../libs/obs';
import hash from 'object-hash';
import dayjs from 'dayjs';
export default class Huaweicloud {
    constructor(options) {
        this._client = void 0;
        this._options = {
            access_key_id: '',
            secret_access_key: '',
            server: '',
            region: '',
            bucket: Huaweicloud._bucket,
        };
        Object.assign(this._options, options);
        if (!options.bucket) {
            this._options.bucket = Huaweicloud._bucket;
        }
        const keys = Object.keys(this._options);
        if (!keys.includes('access_key_id') || !keys.includes('secret_access_key'))
            throw new Error('缺少必要的配置信息');
        const { server, region } = this._options;
        const hasParam = Object.values({ server, region }).every(item => item === '' || item === null || item === undefined);
        if (hasParam) {
            throw new Error('必须提供 endpoint 或者 region 其中一个配置参数');
        }
        const entries = Object.entries(this._options);
        const integrity = entries.some(item => item[0] !== 'server' &&
            item[0] !== 'region' &&
            item[0] !== 'bucket' &&
            (item[1] === '' || item[1] === null || item[1] === undefined));
        if (integrity)
            throw new Error('请填写完整的配置信息');
        if (options.server) {
            this._options.server = `https://${options.server}`;
        }
        else {
            this._options.server = `https://obs.dualstack.${options.region}.myhuaweicloud.com`;
        }
        this._client = new ObsClient({
            access_key_id: this._options.access_key_id,
            secret_access_key: this._options.secret_access_key,
            server: this._options.server,
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
                    Bucket: this._options.bucket,
                    Key: `${fileHash}.${fileSuffix}`,
                    SourceFile: item,
                };
                this._client.putObject(params, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    if (filesListLength === 1) {
                        return resolve(`https://${this._options.bucket}.${this._options.server.replace('https://', '')}/${fileHash}.${fileSuffix}`);
                    }
                    else {
                        urls.push(`https://${this._options.bucket}.${this._options.server.replace('https://', '')}/${fileHash}.${fileSuffix}`);
                        if (urls.length === filesListLength)
                            return resolve(urls);
                    }
                });
            }
        }));
    }
    close() {
        this._client.close();
    }
}
Huaweicloud._bucket = 'g-gallery';
