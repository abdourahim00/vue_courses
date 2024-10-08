import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import Connexion from '../views/Connexion.vue'

// import Header from '../components/Header.vue'

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
      path: '/details/:slug',
      name : 'details',
      component: DetailsView
    },

    {
      path : '/connexion',
      name: 'connexion',
      component : Connexion
    },

    {
      path: '/user/course-bought',
      name: 'course-bought',
      component: () => import('../components/CoursePayment.vue')
    },

    {
      path: '/user/transaction',
      name: 'transaction',
      component: () => import('../components/Transaction.vue')
    },

    {
      path: '/user',
      name: 'updateUser',
      component: () => import('../components/UpdateUser.vue')
    }
    


  ]
})

export default router
