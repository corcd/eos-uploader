/*
 * @Author: Whzcorcd
 * @Date: 2021-10-11 10:27:00
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-10-11 10:28:23
 * @Description: file content
 */
self.importScripts('./spark-md5.min.js')

self.onmessage = function (e) {
  const { fileChunks } = e.data
  const spark = new SparkMD5.ArrayBuffer(),
    fileReader = new FileReader(),
    len = fileChunks.length

  let curChunk = 0

  fileReader.onload = (e) => {
    spark.append(e.target.result)
    curChunk++
    if (curChunk < len) {
      fileReader.readAsArrayBuffer(fileChunks[curChunk])
      self.postMessage({ percent: (100 * curChunk) / len })
    } else {
      const hash = spark.end()
      self.postMessage({ hash, percent: 100 })
      self.close()
    }
  }
  fileReader.readAsArrayBuffer(fileChunks[curChunk])
}