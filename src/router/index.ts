import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/matches/details',
    name: 'match-details',
    component: () => import('@/pages/matches/MatchDetails.vue')
  },
]

const router = createRouter({history: createWebHistory(), routes})
export default router
