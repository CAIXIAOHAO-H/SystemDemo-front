// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ViewUI)

Vue.prototype.$axios = axios
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/' // api 即上面 vue.config.js 中配置的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
