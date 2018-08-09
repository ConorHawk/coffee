<template>
  <div id="app" class="h-full min-h-full font-sans text-coffee-light leading-normal font-light overflow-y-auto overflow-hidden">
    <transition name="top-nav" mode="out-in">
      <top-nav v-if="$route.meta.showTopNav" class="top-nav"></top-nav>
    </transition>
    <transition name="page" mode="out-in">
      <router-view :products="products" :priceDetails="priceDetails" :coffee-count="coffeeCount" :subscription="subscription" :coffee-frequency-in-days="coffeeFrequencyInDays" :plan-details="planDetails"></router-view>
    </transition>
    <purchase-nav v-if="$route.meta.showBotNav" :priceDetails="priceDetails" :subscription="subscription" :coffee-frequency-in-days="coffeeFrequencyInDays"></purchase-nav>
    <main-menu></main-menu>
  </div>
</template>

<script>
import PurchaseNav from '@/components/partials/PurchaseNav'
import TopNav from '@/components/partials/TopNav'
import MainMenu from '@/components/partials/MainMenu'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'app',
  components: {PurchaseNav, TopNav, MainMenu},
  data: function () {
    return {
      coffeeCount: 1,
      subscription: true,
      products: [
        {
          name: 'Arabica',
          id: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee1.jpg',
          selectedPlan: null,
          prices: [
            {
              name: '250g',
              id: 1,
              amount: 250,
              price: 10
            }, {
              name: '500g',
              id: 2,
              amount: 500,
              price: 20
            }, {
              name: '1kg',
              id: 3,
              amount: 1000,
              price: 40
            }
          ]
        }, {
          name: 'Robusta',
          id: 2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee2.jpg',
          selectedPlan: null,
          prices: [
            {
              name: '250g',
              id: 1,
              amount: 250,
              price: 10
            }, {
              name: '500g',
              id: 2,
              amount: 500,
              price: 20
            }, {
              name: '1kg',
              id: 3,
              amount: 1000,
              price: 40
            }
          ]
        }, {
          name: 'Liberian',
          id: 3,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee3.jpg',
          selectedPlan: null,
          prices: [
            {
              name: '250g',
              id: 1,
              amount: 250,
              price: 10
            }, {
              name: '500g',
              id: 2,
              amount: 500,
              price: 20
            }, {
              name: '1kg',
              id: 3,
              amount: 1000,
              price: 40
            }
          ]
        }
      ]
    }
  },
  mounted: function () {
    EventBus.$on('change-product-amount', (id, priceId) => {
      var index = this.products.findIndex(product => product.id === id)
      this.products[index].selectedPlan = priceId
    })
    EventBus.$on('update-coffee-count', (count) => {
      this.coffeeCount = this.coffeeCount + count
    })
    EventBus.$on('change-purchase-type', (subscription) => {
      this.subscription = subscription
    })
  },
  computed: {
    priceDetails: function () {
      return this.products.find(product => product.selectedPlan)
    },
    planDetails () {
      if (this.priceDetails) {
        return this.priceDetails.prices.find(price => price.id === this.priceDetails.selectedPlan)
      }
    },
    coffeeFrequencyInDays () {
      if (this.planDetails) {
        var coffeePerDay = 18 * this.coffeeCount
        return Math.floor(this.planDetails.amount / coffeePerDay)
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/style.scss';
  html, body {
    height: 100%;
  }
  
  .page-enter-active, .page-leave-active {
    transition: all .2s;
  }
  .page-enter {
    opacity: 0;
    transform: translateX(10px);
  }
  .page-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }

  .top-nav-enter-active, .top-nav-leave-active {
    transition: all .2s;
    transform: translateY(0px);
  }
  .top-nav-enter, .top-nav-leave-to {
    opacity: 0;
    transform: translateY(-52px);
  }
</style>