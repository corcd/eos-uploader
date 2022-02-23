/*
 * @Author: Whzcorcd
 * @Date: 2021-10-12 11:27:36
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-10-12 13:33:58
 * @Description: file content
 */
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const Controller = require('./controller')
const controller = new Controller()

app.post('/', async (req, res) => {
  await controller.handleFormData(req, res)
})

app.post('/verify', async (req, res) => {
  await controller.handleVerifyUpload(req, res)
  return
})

app.post('/merge', async (req, res) => {
  await controller.handleMerge(req, res)
  return
})

app.listen(3000, () => {
  console.log('正在监听 3000 端口')
})