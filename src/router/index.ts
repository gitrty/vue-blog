import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 关于
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // 首页文章详情页
  {
    path: '/articledetails',
    name: 'ArticleDetails',
    component: () => import('../views/ArticleDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
