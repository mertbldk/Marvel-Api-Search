import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Marvel',
    name: 'Marvel',
    component: () => import('../views/Marvel.vue')
  },
  {
    path: '/Character/:id',
    name: 'Character',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Error',
    component: () => import('../views/Error.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router