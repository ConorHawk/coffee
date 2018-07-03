<template>
  <transition name="fade" mode="out-in">
    <div v-show="visible" class="fixed z-50 pin-t pin-l h-full w-full bg-pattern flex justify-center items-center">
      <button class="absolute pin-t pin-r m-4 text-2xl text-coffee" @click="visible = false">
        <span class="fal fa-times"></span>
      </button>
      <div class="flex flex-col items-center justify-center">
        <div class="w-6">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="100%" height="auto" viewBox="0 0 326.05 326.05" style="enable-background:new 0 0 326.05 326.05;"
             xml:space="preserve">
          <g>
            <path fill="#f2dfc0" d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16
              c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z
               M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8
              C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169
              C322.479,191.585,343.526,103.869,310.81,48.75z"/>
          </g>
          </svg>
        </div>
        <h1 class="font-bold text-4xl">CAPP</h1>
        <span class="text-xs">~</span>
        <div class="flex flex-col pt-8 mt-1">
          <button @click="changeRoute('/')" class="text-2xl mb-4 text-coffee">
            Home
          </button>
          <button @click="changeRoute('/products')" class="text-2xl mb-4 text-coffee">
            Products
          </button>
          <button @click="changeRoute('/subscription')" class="text-2xl mb-4 text-coffee">
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
