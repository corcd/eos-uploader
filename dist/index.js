import { __awaiter } from "tslib";
import S3 from 'aws-sdk/clients/s3';
import hash from 'object-hash';
import dayjs from 'dayjs';
var Access;
(function (Access) {
    Access[Access["private"] = 0] = "private";
    Access[Access["public-read"] = 1] = "public-read";
    Access[Access["public-read-write"] = 2] = "public-read-write";
})(Access || (Access = {}));
class Uploader {
    constructor(options) {
        this._s3 = undefined;
        this._bucket = 'gallery';
        this._options = {
            accessKeyId: '',
            secretAccessKey: '',
            endpoint: '',
            sslEnabled: false,
            multiFiles: false,
        };
        this._input = undefined;
        const currentOptions = {
            apiVersion: '2006‐03‐01',
            accessKeyId: options.accessKeyId,
            secretAccessKey: options.secretAccessKey,
            endpoint: options.endpoint,
            s3ForcePathStyle: true,
            signatureVersion: 'v2',
            sslEnabled: options.sslEnabled,
        };
        const keys = Object.values(currentOptions);
        const integrity = keys.some(item => item === '' || item === null || item === undefined);
        if (integrity)
            throw new Error('请填写完整的配置信息');
        Object.assign(this._options, options);
        this._s3 = new S3(currentOptions);
    }
    _createUploader() {
        const oldTarget = document.getElementById('file-chooser');
        if (oldTarget) {
            if (this._options.multiFiles) {
                oldTarget.setAttribute('multiple', '');
            }
            else {
                oldTarget.removeAttribute('multiple');
            }
            return oldTarget;
        }
        const input = window.document.createElement('input');
        input.setAttribute('id', 'file-chooser');
        input.setAttribute('type', 'file');
        input.setAttribute('style', 'visibility: hidden;position: absolute;width: 1px;height: 1px;');
        if (this._options.multiFiles) {
            input.setAttribute('multiple', '');
        }
        document.getElementsByTagName('body')[0].appendChild(input);
        const target = document.getElementById('file-chooser');
        target.addEventListener('click', () => {
            input.click();
        }, false);
        return target;
    }
    _removeUploader() {
        const target = document.getElementById('file-chooser');
        if (target) {
            document.getElementsByTagName('body')[0].removeChild(target);
        }
        this._input = undefined;
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
    _singleUpload() {
        if (!this._input)
            return Promise.reject('请先构造 Uploader');
        const file = this._input.files ? this._input.files[0] : null;
        return new Promise((resolve, reject) => {
            if (!this._s3)
                return reject('SDK 加载失败');
            const $S = this._s3;
            if (file) {
                const { fileHash, fileSuffix } = this._formatFileName(file);
                const params = {
                    Key: `${fileHash}.${fileSuffix}`,
                    Bucket: this._bucket,
                    Body: file,
                    ACL: 'public-read',
                };
                $S.putObject(params, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(`${this._options.sslEnabled ? 'https' : 'http'}://${this._options.endpoint}/${this._bucket}/${fileHash}.${fileSuffix}`);
                });
            }
            else {
                return reject('无上传内容');
            }
        });
    }
    _multiUpload() {
        if (!this._input)
            return Promise.reject('请先构造 Uploader');
        const files = this._input.files ? this._input.files : null;
        console.log(files);
        return new Promise((resolve, reject) => {
            if (!this._s3)
                return reject('SDK 加载失败');
            const $S = this._s3;
            const urls = [];
            if (files) {
                const filesListLength = files.length;
                for (const item of files) {
                    const { fileHash, fileSuffix } = this._formatFileName(item);
                    const params = {
                        Key: `${fileHash}.${fileSuffix}`,
                        Bucket: this._bucket,
                        Body: item,
                        ACL: 'public-read',
                    };
                    $S.putObject(params, (err, data) => {
                        if (err) {
                            return reject(err);
                        }
                        urls.push(`${this._options.sslEnabled ? 'https' : 'http'}://${this._options.endpoint}/${this._bucket}/${fileHash}.${fileSuffix}`);
                        if (urls.length === filesListLength)
                            return resolve(urls);
                    });
                }
            }
            else {
                return reject('无上传内容');
            }
        });
    }
    openUploader() {
        return new Promise((resolve, reject) => {
            this._input = this._createUploader();
            this._input.addEventListener('change', (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                let res;
                if (this._options.multiFiles) {
                    res = yield this._multiUpload().catch(err => {
                        this._removeUploader();
                        reject(err);
                    });
                }
                else {
                    res = yield this._singleUpload().catch(err => {
                        this._removeUploader();
                        reject(err);
                    });
                }
                this._removeUploader();
                return resolve(res);
            }), false);
            this._input.click();
        });
    }
}
export default Uploader;
