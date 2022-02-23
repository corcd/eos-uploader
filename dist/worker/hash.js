"use strict";
self.importScripts('./spark-md5.min.js');
self.onmessage = function (e) {
    const { fileChunks } = e.data;
    const spark = new SparkMD5.ArrayBuffer(), fileReader = new FileReader(), len = fileChunks.length;
    let curChunk = 0;
    fileReader.onload = (e) => {
        spark.append(e.target.result);
        curChunk++;
        if (curChunk < len) {
            fileReader.readAsArrayBuffer(fileChunks[curChunk]);
            self.postMessage({ percent: (100 * curChunk) / len });
        }
        else {
            const hash = spark.end();
            self.postMessage({ hash, percent: 100 });
            self.close();
        }
    };
    fileReader.readAsArrayBuffer(fileChunks[curChunk]);
};
