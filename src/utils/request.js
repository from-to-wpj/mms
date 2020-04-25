import axios from 'axios'
import { Loading, Message } from 'element-ui'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

const loading = {
  loadingInstance: null,
  open: function () {
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        text: '拼命加载中',
        target: '.main',
        background: 'rgba(0, 0, 0, 0.5)'
      })
    }
  },
  close: function () {
    if (this.loadingInstance != null) {
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}

request.interceptors.request.use(config => {
  loading.open()
  return config
}, error => {
  loading.close()
  return Promise.reject(error)
})

request.interceptors.response.use(res => {
  loading.close()
  const resp = res.data
  if (resp.code !== 2000) {
    Message({
      message: resp.message || '系统异常',
      type: 'warning',
      duration: 5 * 1000
    })
  }
  return res
}, error => {
  loading.close()
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})


export default request