import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import Contact from '../views/Contact';
import Courses from '../views/Courses';
import Course from '../views/Course';

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
  },
  {
    path: '/cursos',
    name: 'courses',
    component: Courses
  },
  {
    path: '/cursos/:course',
    name: 'course',
    component: Course,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
