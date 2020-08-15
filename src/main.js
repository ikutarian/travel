import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@styles/reset.css' // 重置样式表，使得在不同设备上有一个一致的表现
import '@styles/border.css' // 解决不同设备上1px边框不一致的问题
import fastClick from 'fastclick' // 解决移动端300ms点击延迟的问题
import '@styles/iconfont.css' // 引入iconfont
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入轮播组件1
import 'swiper/dist/css/swiper.css' // 引入轮播组件2

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper) // 引入轮播组件3

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')