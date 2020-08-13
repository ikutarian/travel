import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home' // @是src目录的别名

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }]
})