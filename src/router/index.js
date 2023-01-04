import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
