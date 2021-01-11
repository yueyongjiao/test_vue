import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'brand',
    component: () => import('@/views/Brand.vue'),
    meta: {
      title: '监控首页'
    }
  },
  {
    path: '/brand',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
