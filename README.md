<!--
 * @Author: Whzcorcd
 * @Date: 2020-09-29 19:01:15
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-09 19:41:05
 * @Description: file content
-->

# EOS Uploader

EOS 浏览器端整合上传工具（当前默认 Bucket 为 gallery，后续可考虑开放配置），目前限用于完成简单的图片、文件上传

## usage

### NPM 安装

```bash
sudo npm install @gdyfe/uploader --save
sudo yarn add @gdyfe/uploader
```

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

## API

### Uploader.openUploader()

公共上传方法

```javascript
@param {Void}
@returns {Promise}
```

初始化后，直接调用方法即可发起上传流程，返回值为 `Promise`，上传成功后返回可访问文件的 url（其中文件名会被哈希加盐散列化，保留原后缀名）
