import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../views/Test.vue'
import Result from '../views/Result.vue'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test/:id',
    name: 'test',
    component: Test
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
