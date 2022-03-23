# EOS Uploader

EOS 浏览器端整合上传工具，目前限用于完成简单的图片、文件上传

## Usage

### NPM 安装

```bash
sudo npm install @gdyfe/uploader --save
sudo yarn add @gdyfe/uploader
```

### 初始化（Version 1.x）

```javascript
import Uploader from '@gdyfe/uploader'

const uploader = new Uploader({
  accessKeyId: '您的 Access Id',
  secretAccessKey: '您的 Access Key',
  endpoint: '接入点/Bucket 域名', // 例：eos-beijing-4.cmecloud.cn
  sslEnabled: true, // 是否开启 https
  multiFiles: false, // 是否开启多文件选择
})
```

### 初始化（Version 2.x）

```javascript
import Uploader from '@gdyfe/uploader'

const uploader = new Uploader('您的云服务商（可选项目见下）', {
  accessKeyId: '您的 Access Id', // 必需
  accessKeySecret: '您的 Access Key', // 必需
  endpoint: '接入点/Bucket 域名', // 非必需，例：eos-beijing-4.cmecloud.cn、s3.cn-northwest-1.amazonaws.com.cn 等
  region: 'Bucket 所在区域', // 非必需，AWS 可选，和 endpoint 属性同时存在时以 endpoint 为主，例：cn-north-1
  bucket: 'Bucket 名称', // 非必需，若为空时则使用内部默认名称
  cname: 'CDN 域名', // 非必需，自定义域名，仅 AWS 支持且为必需
  accept: '接受的文件格式，例如：image/png' // 非必需，需要限制的文件格式，默认：image/png, image/jpeg, image/gif,
  multiFiles: false, // 非必需，是否开启多文件选择，默认 false
})
```

主流云服务商目前按需支持阿里云 `'aliyun'`、腾讯云 `'tencent'`、华为云 `'huaweicloud'`、AWS `'aws'`、移动云 `'cmecloud'`、天翼云 `'ctyun'`

> 目标 Bucket 存在内部默认值，当前默认阿里云 Bucket 为 guangdianyun，aws Bucket 为 gallery-prod，华为云 & 天翼云为 g-gallery，移动云 Bucket 为 gallery

## Previous API（Version 1.0.x）

> 1.x 版本 API 不再支持，请尽早换用 2.x 的最新版 API

### Uploader.upload(target)

公共上传方法

```javascript
@param {String} target
@returns {Promise}
```

需先行构造一个 `<input type="file" id="***" />` 元素，其唯一 id 属性即为参数 target，返回值为 Promise，上传成功后返回可访问文件的 url

### Uploader.download(filename)

公共下载方法

```javascript
@param {String} filename
@returns {Promise}
```

参数为 Bucket 内需要下载的文件名，返回值为 Promise，请求成功后返回可访问文件的 url

## Previous API（Version 1.1.x - 1.2.x）

### Uploader.openUploader()

一键式上传方法

```javascript
@param {Void}
@returns {Promise}
```

初始化后，直接调用方法即可发起上传流程，返回值为 `Promise`，上传成功后返回可访问文件的 url（其中文件名会被哈希加盐散列化，保留原后缀名）

## API（Version 2.x）

### Uploader.openUploader()

一键式上传方法

```javascript
@param {Void}
@returns {Promise}
```

初始化后，直接调用方法即可发起上传流程，返回值为 `Promise`，上传成功后返回可访问文件的 url（其中文件名会被哈希加盐散列化，保留原后缀名）

### Uploader.fillUploader()

文件注入上传方法

```javascript
@param {FileList} files
@returns {Promise}
```

直接调用方法即可使用参数（FileList）发起上传流程，返回值为 `Promise`，返回值格式同 `openUploader()` 方法

### Uploader.dataUrlToFile()

Base64 转换至 File 对象方法

```javascript
@param {String} dataUrl
@param {String} filename
@returns {File | null}
```

dataUrl 为 Base64 值，filename 为转换后的文件名

## Typescript

原生支持
