import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import Contact from '../views/Contact';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contato',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
