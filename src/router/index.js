import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'
import AboutMe from '@/views/AboutMe.vue'
import CurriculumView from '@/views/CurriculumView.vue'
import CoursesView from '@/views/CoursesView.vue'
import ContactView from '@/views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    component: PerfilView, 
    children: [
      { path: 'about', component: AboutMe },
      { path: 'resume', component: CurriculumView },
      { path: 'courses', component: CoursesView },
      { path: 'contact', component: ContactView }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
