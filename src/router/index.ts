import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/games/:id',
    name: 'game-details',
    component: () => import('@/pages/games/GameDetails.vue')
  },
]

const router = createRouter({history: createWebHistory(), routes})
export default router
