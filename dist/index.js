import { __awaiter } from "tslib";
import S3 from 'aws-sdk/clients/s3';
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
        };
        this._input = undefined;
        const currentOptions = Object.assign({}, {
            apiVersion: '2006‐03‐01',
            accessKeyId: '',
            secretAccessKey: '',
            endpoint: '',
            s3ForcePathStyle: true,
            signatureVersion: 'v2',
            sslEnabled: false,
        }, options);
        this._options = options;
        this._s3 = new S3(currentOptions);
    }
    _createUploader() {
        const oldTarget = document.getElementById('file-chooser');
        if (oldTarget) {
            return oldTarget;
        }
        const input = window.document.createElement('input');
        input.setAttribute('id', 'file-chooser');
        input.setAttribute('type', 'file');
        input.setAttribute('style', 'visibility: hidden;position: absolute;width: 1px;height: 1px;');
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
    _upload() {
        if (!this._input)
            return Promise.reject('请先构造 Uploader');
        const file = this._input.files ? this._input.files[0] : null;
        return new Promise((resolve, reject) => {
            if (!this._s3)
                return reject('SDK 加载失败');
            const $S = this._s3;
            if (file) {
                const params = {
                    Key: file.name,
                    Bucket: this._bucket,
                    Body: file,
                    ACL: 'public-read',
                };
                $S.putObject(params, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(`${this._options.sslEnabled ? 'https' : 'http'}://${this._options.endpoint}/${this._bucket}/${file.name}`);
                });
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
                const res = yield this._upload().catch(err => {
                    this._removeUploader();
                    reject(err);
                });
                this._removeUploader();
                return resolve(res);
            }), false);
            this._input.click();
        });
    }
}
export default Uploader;
