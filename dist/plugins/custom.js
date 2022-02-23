import { __awaiter } from "tslib";
import axios from 'axios';
import { SERVER_PATH, Status, UploadStatus, PENDING, SUCCESS, FAIL, UPLOAD_SUCCESS, UPLOAD_FAIL } from '../config';
const CHUNK_SIZE = 1024 * 1024 * 0.5;
const CONCURRENCY_LIMIT = 4;
class Scheduler {
    constructor(maximumConcurrency = 4, retryTime = 3) {
        this.max = maximumConcurrency;
        this.retryTime = retryTime;
        this.status = PENDING;
        this.settledCount = 0;
        this.isAbort = false;
        this.tasks = [];
        this.promises = [];
        this.setDeferred();
    }
    append(handler, index) {
        this.tasks.push({ handler, status: Status.Waiting, retryTime: 0, index });
    }
    done() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run();
            const res = yield Promise.allSettled(this.promises);
            return ({
                status: this.status,
                res
            });
        });
    }
    pause() {
        this.isAbort = true;
    }
    resume() {
        this.isAbort = false;
        this.resolve();
        this.setDeferred();
    }
    setDeferred() {
        this.deferred = new Promise((resolve) => {
            this.resolved = resolve;
        });
    }
    resolve() {
        if (!this.resolved) {
            throw new Error('Method not implemented.');
        }
        this.resolved();
    }
    run() {
        return new Promise((resolve) => {
            const start = () => __awaiter(this, void 0, void 0, function* () {
                if (this.isAbort) {
                    yield this.deferred;
                }
                const index = this.tasks.findIndex(({ status }) => status === Status.Waiting || status === Status.Error);
                if (index === -1)
                    return;
                const task = this.tasks[index];
                task.status = Status.Running;
                const promise = task.handler();
                this.promises[task.index] = promise;
                promise
                    .then(() => {
                    task.status = Status.Success;
                    this.settledCount += 1;
                    if (this.settledCount >= this.tasks.length) {
                        if (this.status === PENDING) {
                            this.status = SUCCESS;
                        }
                        resolve(void 0);
                    }
                    else {
                        start();
                    }
                })
                    .catch(() => {
                    if (task.retryTime >= this.retryTime) {
                        task.status = Status.Fail;
                        this.settledCount += 1;
                        this.status = FAIL;
                    }
                    else {
                        task.status = Status.Error;
                        task.retryTime++;
                    }
                    if (this.settledCount >= this.tasks.length) {
                        resolve(void 0);
                    }
                    else {
                        start();
                    }
                });
            });
            for (let i = 0; i < this.max; i++) {
                start();
            }
        });
    }
}
export default class CustomUploader {
    constructor() {
        this.file = null;
        this.hash = '';
        this.worker = null;
        this.Scheduler = null;
        this.curStatus = UploadStatus.Waiting;
        this.hashPercent = 0;
        this.uploadedLen = 0;
        this.chunksLen = 0;
        this.fileChunks = [];
        this.showPreview = false;
        this.resetInitialState();
    }
    get hashPercentProgress() {
        return this.hashPercent;
    }
    get uploadPercentProgress() {
        if (this.curStatus === UploadStatus.Waiting)
            return 0;
        if (this.curStatus === UploadStatus.Success)
            return 100;
        return Math.floor((100 * this.uploadedLen) / this.chunksLen);
    }
    get previewStatus() {
        return this.showPreview;
    }
    get hashProgressStatus() {
        return this.hashPercent >= 100 ? UPLOAD_SUCCESS : null;
    }
    get uploadProgressStatus() {
        if (this.curStatus === UploadStatus.Fail) {
            return UPLOAD_FAIL;
        }
        return this.uploadPercentProgress >= 100 ? UPLOAD_SUCCESS : null;
    }
    handleFileChange(e) {
        this.resetInitialState();
        if (!e.files) {
            throw new Error('File is not existed.');
        }
        this.file = e.files[0];
        this.generatePreview();
    }
    handleUpload() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.file) {
                return Promise.reject();
            }
            this.createFileChunks();
            yield this.getFileHash();
            const { shouldUpload, uploadedList } = yield this.verifyUpload();
            if (!shouldUpload) {
                this.curStatus = UploadStatus.Success;
                return Promise.resolve();
            }
            const chunksNeedUpload = this.fileChunks
                .map((chunk, index) => ({
                chunk,
                hash: `${this.hash}_${index}`,
                fileHash: this.hash
            }))
                .filter(({ hash }) => !uploadedList.includes(hash));
            this.uploadedLen = uploadedList.length;
            this.uploadChunks(chunksNeedUpload);
        });
    }
    handlePause() {
        this.Scheduler && this.Scheduler.pause();
        this.curStatus = UploadStatus.Abort;
    }
    handleResume() {
        this.Scheduler && this.Scheduler.resume();
        this.curStatus = UploadStatus.Uploading;
    }
    handleRetry() {
        return __awaiter(this, void 0, void 0, function* () {
            const { uploadedList } = yield this.verifyUpload();
            const chunksNeedUpload = this.fileChunks
                .map((chunk, index) => ({
                chunk,
                hash: `${this.hash}_${index}`,
                fileHash: this.hash
            }))
                .filter(({ hash }) => !uploadedList.includes(hash));
            this.uploadChunks(chunksNeedUpload);
        });
    }
    resetInitialState() {
        this.file = null;
        this.hash = "";
        this.worker = null;
        this.Scheduler = null;
        this.curStatus = UploadStatus.Waiting;
        this.hashPercent = 0;
        this.uploadedLen = 0;
        this.chunksLen = 0;
        this.fileChunks = [];
    }
    generatePreview() {
        const URLObject = window.URL.createObjectURL(this.file);
        const preview = this.$refs.preview;
        preview.src = URLObject;
        preview.oncanplay = () => {
            this.showPreview = true;
        };
    }
    createFileChunks() {
        const chunkList = [], file = this.file;
        const size = file.size;
        let cur = 0;
        while (cur < size) {
            chunkList.push(file.slice(cur, cur + CHUNK_SIZE));
            cur += CHUNK_SIZE;
        }
        this.chunksLen = chunkList.length;
        this.fileChunks = [...chunkList];
    }
    getFileHash() {
        this.curStatus = UploadStatus.CalculatingHash;
        return new Promise((resolve, reject) => {
            this.worker = new Worker("/worker/hash.js");
            this.worker.postMessage({ fileChunks: this.fileChunks });
            this.worker.onmessage = (e) => {
                const { hash, percent } = e.data;
                this.hashPercent = Math.ceil(percent);
                if (hash) {
                    this.hash = hash;
                    return resolve();
                }
                return reject();
            };
        });
    }
    verifyUpload() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios({
                url: "/verify",
                method: "post",
                data: { filename: this.file.name, fileHash: this.hash }
            });
            return data;
        });
    }
    uploadChunks(chunksNeedUpload) {
        return __awaiter(this, void 0, void 0, function* () {
            this.curStatus = UploadStatus.Uploading;
            this.Scheduler = new Scheduler(CONCURRENCY_LIMIT);
            chunksNeedUpload
                .map(({ chunk, hash, fileHash }) => {
                const formData = new FormData();
                formData.append("chunk", chunk);
                formData.append("hash", hash);
                formData.append("fileHash", fileHash);
                formData.append("filename", this.file.name);
                return formData;
            })
                .forEach((formData, index) => {
                const taskFn = () => axios({
                    url: "/",
                    method: "post",
                    headers: { "Content-Type": "multipart/form-data" },
                    data: formData
                }).then(() => this.uploadedLen++);
                this.Scheduler && this.Scheduler.append(taskFn, index);
            });
            const { status } = yield this.Scheduler.done();
            if (status === "success") {
                yield this.mergeRequest();
                this.resetInitialState();
            }
            else {
                this.curStatus = UploadStatus.Fail;
            }
        });
    }
    mergeRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios({
                url: "/merge",
                method: "post",
                data: { hash: this.hash, suffix: this.file.type.split("/")[1] }
            });
            this.curStatus = UploadStatus.Success;
        });
    }
}
CustomUploader._serverPath = SERVER_PATH;
