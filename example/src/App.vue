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
        sslEnabled: false
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
