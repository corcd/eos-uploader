import { __awaiter } from "tslib";
import Aliyun from './plugins/aliyun';
import Cmecloud from './plugins/cmecloud';
class Uploader {
    constructor(provider, options) {
        this._provider = 'aliyun';
        this._options = {
            accessKeyId: '',
            accessKeySecret: '',
            endpoint: '',
            multiFiles: false,
        };
        this._input = undefined;
        if (!provider)
            throw new Error('请配置正确的云服务商');
        const keys = Object.values(options);
        const integrity = keys.some(item => item === '' || item === null || item === undefined);
        if (integrity)
            throw new Error('请填写完整的配置信息');
        this._provider = provider.toLowerCase();
        Object.assign(this._options, options);
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
    _toggleUpload(filesList = null) {
        if (!this._input)
            return Promise.reject('请先构造 Uploader');
        const files = filesList ? filesList : this._input.files;
        switch (this._provider) {
            case 'aliyun': {
                const uploaderInstance = new Aliyun({
                    accessKeyId: this._options.accessKeyId,
                    accessKeySecret: this._options.accessKeySecret,
                    endpoint: this._options.endpoint,
                    cname: this._options.cname,
                });
                return uploaderInstance.upload(files);
            }
            case 'cmecloud': {
                const uploaderInstance = new Cmecloud({
                    accessKeyId: this._options.accessKeyId,
                    secretAccessKey: this._options.accessKeySecret,
                    endpoint: this._options.endpoint,
                    sslEnabled: true,
                });
                return uploaderInstance.upload(files);
            }
            default:
                return Promise.reject('请配置正确的云服务商');
        }
    }
    openUploader() {
        return new Promise((resolve, reject) => {
            this._input = this._createUploader();
            this._input.addEventListener('change', (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                const res = yield this._toggleUpload().catch(err => {
                    this._removeUploader();
                    return reject(err);
                });
                this._removeUploader();
                return resolve(res);
            }), false);
            this._input.click();
        });
    }
    fillUploader(files) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const res = yield this._toggleUpload(files).catch(err => {
                this._removeUploader();
                return reject(err);
            });
            this._removeUploader();
            return resolve(res);
        }));
    }
    dataUrlToFile(dataUrl, filename) {
        const arr = dataUrl.split(',');
        if (!arr[0].match(/:(.*?);/))
            return null;
        const mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        let i = n;
        while (i--) {
            u8arr[i] = bstr.charCodeAt(i);
        }
        return new File([u8arr], filename, { type: mime });
    }
}
export default Uploader;
