import { RouteRecordRaw, createWebHashHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('/@views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('/@views/about/index.vue')
  }
]

const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes
})
