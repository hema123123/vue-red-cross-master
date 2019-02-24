// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

// libs
import '@/libs/cube-ui'
import '@/libs/rem'
import '@/component'

import httpRequest from '@/libs/axios'

Vue.config.productionTip = false
Vue.prototype.$http = httpRequest // axios请求方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
