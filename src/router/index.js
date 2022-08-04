import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HousesView from '../views/HousesView.vue'
import MortagesView from '../views/MortagesView.vue'
import RentalsView from '../views/RentalsView.vue'
import LandView from '../views/LandView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/houses',
      name: 'Houses',
      component: HousesView
    },
    {
      path: '/mortages',
      name: 'mortages',
      component: MortagesView
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: RentalsView
    },
    {
      path: '/land',
      name: 'land',
      component: LandView
    }
 
  ]
})

export default router
