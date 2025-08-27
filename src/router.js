import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import LandingPage from './components/LandingPage.vue'
import LoginPage from './components/LoginPage.vue'

const routes = [
  { path: '/', component: LandingPage },   // default homepage
  { path: '/login', component: LoginPage } // login page
]

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' // smooth scroll
      }
    }
    return { top: 0 }
  }
})

export default router
