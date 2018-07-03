<template>
  <div id="app" class="h-full min-h-full font-sans text-coffee-light leading-normal font-light overflow-y-auto overflow-hidden">
    <transition name="top-nav" mode="out-in">
      <top-nav v-if="$route.meta.showTopNav" class="top-nav"></top-nav>
    </transition>
    <transition name="page" mode="out-in">
      <router-view :products="products" :priceDetails="priceDetails"></router-view>
    </transition>
    <purchase-nav v-if="$route.meta.showBotNav" :priceDetails="priceDetails"></purchase-nav>
  </div>
</template>

<script>
import PurchaseNav from '@/components/partials/PurchaseNav'
import TopNav from '@/components/partials/TopNav'
import { EventBus } from '@/event-bus.js'
export default {
  name: 'app',
  components: {PurchaseNav, TopNav},
  data: function () {
    return {
      products: [
        {
          name: 'Arabica',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee1.jpg',
          price: 100,
          count: 1
        }, {
          name: 'Robusta',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee2.jpg',
          price: 150,
          count: 2
        }, {
          name: 'Liberian',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: '/static/images/coffee3.jpg',
          price: 200,
          count: 0
        }
      ]
    }
  },
  mounted: function () {
    EventBus.$on('change-product-count', (index, count) => {
      this.products[index].count = this.products[index].count + count
    })
  },
  computed: {
    priceDetails: function () {
      var totalProducts = 0
      var totalPrice = 0
      for (var i = 0; i < this.products.length; i++) {
        totalProducts = totalProducts + this.products[i].count
        totalPrice = totalPrice + (this.products[i].count * this.products[i].price)
      }
      return {
        totalProducts: totalProducts,
        totalPrice: totalPrice
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