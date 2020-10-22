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
    redirect: '/doc/button',
    component: () => import('/@views/Doc/index.vue'),
    children: [
      {
        path: 'intro',
        name: 'intro',
        component: () => import('/@views/Doc/pages/intro.doc.vue')
      },
      {
        path: 'install',
        name: 'install',
        component: () => import('/@views/Doc/pages/install.doc.vue')
      },
      {
        path: 'get-started',
        name: 'get-started',
        component: () => import('/@views/Doc/pages/get-started.doc.vue')
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('/@views/Doc/pages/button.demo.vue')
      }
    ]
  }
]

const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes
})
