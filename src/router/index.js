import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import ProductIndex from '@/components/ProductIndex'
import Register from '@/components/Register'
import Onboarding from '@/components/Onboarding'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/onboarding',
      name: 'Onboarding',
      component: Onboarding
    }, {
      path: '/products',
      name: 'ProductIndex',
      component: ProductIndex
    }, {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
