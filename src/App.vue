<template>
  <div id="app" class="h-full min-h-full font-sans text-coffee-light bg-pattern leading-normal font-light overflow-y-auto overflow-hidden">
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
          img: 'http://fixationcoffee.co.nz/wp-content/uploads/Best-Price-ROASTED-ARABICA-COFFEE-BEANS.jpg',
          price: 100,
          count: 0
        }, {
          name: 'Robusta',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://enjoyjava.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg',
          price: 150,
          count: 0
        }, {
          name: 'Liberian coffee',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1',
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
  .bg-pattern {
    background-color: #1a1a19;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233c352a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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