<!--
 * @Author: Whzcorcd
 * @Date: 2020-10-09 10:03:16
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2020-11-06 16:55:01
 * @Description: file content
-->
<template>
  <div id="app">
    <button @click="upload">open uploader</button>
  </div>
</template>

<script>
import Uploader from '@gdyfe/uploader'

export default {
  name: 'App',
  methods: {
    async upload() {
      const uploader = new Uploader()
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
