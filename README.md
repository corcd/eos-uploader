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
  endpoint: 'Bucket 域名', // 例：eos-beijing-4.cmecloud.cn
  sslEnabled: true, // 是否开启 https
  multiFiles: false, // 是否开启多文件选择
})
```

### 初始化（Version 2.x）

```javascript
import Uploader from '@gdyfe/uploader'

const uploader = new Uploader('您的云服务商（可选项目见下）', {
  accessKeyId: '您的 Access Id',
  accessKeySecret: '您的 Access Key',
  endpoint: 'Bucket 域名', // 例：eos-beijing-4.cmecloud.cn
  cname: false, // 是否为自定义域名（仅阿里云支持）
  multiFiles: false, // 是否开启多文件选择
})
```

云服务商目前按需支持阿里云 `'aliyun'`、移动云 `'cmecloud'`，未来将添加腾讯云、华为云、AWS 等主流云服务商的集成

目前目标 Bucket 为内部限制（当前默认阿里云 Bucket 为 guangdianyun，移动云 Bucket 为 gallery，后续可考虑开放配置），后续将开放设置，以及集成默认的 `endpoint`

## Previous API（Version 1.0.x）

### Uploader.upload(target)

公共上传方法

```javascript
@param {String} target
@returns {Promise}
```

需先行构造一个 <input type="file" id="***" /> 元素，其唯一 id 属性即为参数 target，返回值为 Promise，上传成功后返回可访问文件的 url

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
