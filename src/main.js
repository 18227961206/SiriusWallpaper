// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
import $ from 'jquery'

import './assets/css/bootstrap.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/font-awesome.css'
import '../static/js/bootstrap.js'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Toast)
Vue.use(ElementUI);

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/wallpaper'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // console.log(config)
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
