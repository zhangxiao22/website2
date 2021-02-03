import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/common.css'

import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min'

import './assets/iconfont/css/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
