import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DogsList from '../views/DogsList.vue'
import Locator from '../views/Locator.vue'
import Walkers from '../views/Walkers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Locator',
    component: Locator
  },
  {
    path: '/',
    name: 'Walkers',
    component: Walkers
  },
  {
    path: '/',
    name: 'DogsList',
    component: DogsList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
