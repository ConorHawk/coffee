import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import ProductIndex from '@/components/ProductIndex'
import ProductShow from '@/components/ProductShow'
import Register from '@/components/Register'
import Onboarding from '@/components/Onboarding'
import Payment from '@/components/Payment'
import Subscription from '@/components/Subscription'

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
      component: ProductIndex,
      meta: {
        showTopNav: true,
        showBotNav: true
      }
    }, {
      path: '/product/:id',
      name: 'ProductShow',
      component: ProductShow,
      meta: {
        showTopNav: true,
        showBotNav: true
      }
    }, {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        showTopNav: true,
        showBotNav: true
      }
    }, {
      path: '/subscription',
      name: 'Subscription',
      component: Subscription,
      meta: {
        showTopNav: true
      }
    }
  ]
})
