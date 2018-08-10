<template>
  <transition name="fade" mode="out-in">
    <div v-show="visible" class="fixed z-50 pin-t pin-l h-full w-full bg-pattern flex justify-center items-center">
      <button class="absolute pin-t pin-r m-4 text-2xl text-coffee" @click="visible = false">
        <span class="fal fa-times"></span>
      </button>
      <div class="flex flex-col items-center justify-center">
        <div class="w-full text-center">
          <img style="max-width:100px" src="/static/images/logo-light.svg" alt="capp logo">
        </div>
        <!-- <h1 class="font-bold text-4xl">CAPP</h1> -->
        <div class="flex flex-col pt-8 mt-1">
          <button @click="changeRoute('/')" class="text-2xl mb-4 text-coffee-light">
            Home
          </button>
          <button @click="changeRoute('/products')" class="text-2xl mb-4 text-coffee-light">
            Products
          </button>
          <button @click="changeRoute('/subscription')" class="text-2xl mb-4 text-coffee-light">
            Subscription
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'hello',
  props: ['priceDetails'],
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.visible = !this.visible
    },
    changeRoute: function (link) {
      var self = this
      this.$router.push(link)
      setTimeout(function () {
        self.visible = false
      }, 200)
    }
  },
  computed: {
  },
  mounted: function () {
    EventBus.$on('toggle-menu', () => {
      this.toggleMenu()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
