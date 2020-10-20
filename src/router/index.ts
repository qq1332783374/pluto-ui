import { RouteRecordRaw, createWebHashHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('/@views/Home/index.vue')
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('/@views/Doc/index.vue')
  }
]

const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes
})
