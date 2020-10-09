<!--
 * @Author: Whzcorcd
 * @Date: 2020-10-09 10:03:16
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-10-09 19:40:34
 * @Description: file content
-->
<template>
  <div id="app">
    <button @click="openUploader">open uploader</button>
  </div>
</template>

<script>
import Uploader from '@gdyfe/uploader'

export default {
  name: 'App',
  methods: {
    async openUploader() {
      const uploader = new Uploader({
        accessKeyId: '',
        secretAccessKey: '',
        endpoint: 'eos-beijing-4.cmecloud.cn',
        sslEnabled: false,
        multiFiles: true
      })
      const res = await uploader.openUploader()
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
