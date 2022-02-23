/*
 * @Author: Whzcorcd
 * @Date: 2021-10-12 11:29:14
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-10-12 11:29:15
 * @Description: file content
 */
const multiparty = require('multiparty')
const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')

const extractExt = (filename) =>
  filename.slice(filename.lastIndexOf('.'), filename.length) // 提取后缀名
const UPLOAD_DIR = path.resolve(__dirname, 'upload')

// 返回已经上传切片名
const createUploadedList = async (fileHash) =>
  fse.existsSync(path.resolve(UPLOAD_DIR, fileHash))
    ? await fse.readdir(path.resolve(UPLOAD_DIR, fileHash))
    : []

module.exports = class {
  // 合并切片
  async handleMerge(req, res) {
    let { hash, suffix } = req.body
    let path = `${UPLOAD_DIR}/${hash}`,
      fileList = fs.readdirSync(path)
    fileList
      .sort((a, b) => {
        return a.split('_')[1] - b.split('_')[1]
      })
      .forEach((item) => {
        fs.appendFileSync(
          `${UPLOAD_DIR}/${hash}.${suffix}`,
          fs.readFileSync(`${path}/${item}`)
        )
        fs.unlinkSync(`${path}/${item}`)
      })
    fs.rmdirSync(path)
    res.send({
      code: 0
    })
  }

  // 处理切片
  async handleFormData(req, res) {
    const multipart = new multiparty.Form()

    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err)
        res.status(500).end('process file chunk failed')
        return
      }

      const [chunk] = files.chunk
      const [hash] = fields.hash
      const [fileHash] = fields.fileHash
      const [filename] = fields.filename
      const filePath = path.resolve(
        UPLOAD_DIR,
        `${fileHash}${extractExt(filename)}`
      )
      const chunkDir = path.resolve(UPLOAD_DIR, fileHash)

      if (Math.random() > 0.5) {
        res.status(500).end('模拟错误')
        return
      }
      // 文件存在直接返回
      if (fse.existsSync(filePath)) {
        res.end('file exist')
        return
      }

      // 切片目录不存在，创建切片目录
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }
      // fs-extra 专用方法，类似 fs.rename 并且跨平台
      // fs-extra 的 rename 方法 windows 平台会有权限问题
      // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835
      await fse.move(chunk.path, path.resolve(chunkDir, hash))

      res.end('received file chunk')
    })
  }

  // 验证是否已上传/已上传切片下标
  async handleVerifyUpload(req, res) {
    const { fileHash, filename } = req.body
    const ext = extractExt(filename)
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`)
    if (fse.existsSync(filePath)) {
      res.end(
        JSON.stringify({
          shouldUpload: false
        })
      )
    } else {
      res.end(
        JSON.stringify({
          shouldUpload: true,
          uploadedList: await createUploadedList(fileHash)
        })
      )
    }
  }
}