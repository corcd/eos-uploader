export const SERVER_PATH = '//api.guangdianyun.tv';
export var Status;
(function (Status) {
    Status["Waiting"] = "waiting";
    Status["Running"] = "running";
    Status["Error"] = "error";
    Status["Success"] = "success";
    Status["Fail"] = "fail";
})(Status || (Status = {}));
export const PENDING = 'pending';
export const SUCCESS = 'success';
export const FAIL = 'fail';
export var UploadStatus;
(function (UploadStatus) {
    UploadStatus["CalculatingHash"] = "calculatingHash";
    UploadStatus["Waiting"] = "waiting";
    UploadStatus["Uploading"] = "uploading";
    UploadStatus["Abort"] = "abort";
    UploadStatus["Success"] = "success";
    UploadStatus["Fail"] = "fail";
})(UploadStatus || (UploadStatus = {}));
export const UPLOAD_SUCCESS = 'success';
export const UPLOAD_FAIL = 'failed';
