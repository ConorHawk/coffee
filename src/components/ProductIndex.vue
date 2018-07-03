<template>
  <div class="min-h-full" style="padding-bottom:62px">
    <div class="p-4">
      <div class="my-2 product-button" v-for="(product, index) in products">
        <div class="rounded bg-coffee-lighter text-coffee-dark flex">
          <div class="w-1/3 flex-none bg-cover bg-center" :style="{'backgroundImage': `url('${product.img}')`}"></div>
          <div class="p-2 text-left">
            <h3 class="text-base">{{product.name}}</h3>
            <h4 class="font-light text-lg">${{product.price}} <span class="text-xs">each</span></h4>
            <br>
            <p class="m-0 text-sm">{{product.description}}</p>
            <div class="py-2 flex flex-col items-start justify-center">
              <p class="text-xs uppercase tracking-wide text-coffee m-0 inline">Quantity</p>
              <div class="border-coffee border rounded-full inline-flex items-center justify-between">
                <button :disabled="product.count === 0" class="px-2 text-coffee product-count-button" @click="changeProductCount(index, -1)">
                  <i class="text-xs fal fa-chevron-left"></i>
                </button>
                <p class="w-6 text-center m-0">
                  {{product.count}}
                </p>
                <button class="px-2 text-coffee" @click="changeProductCount(index, 1)">
                  <i class="text-xs fal fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="px-2">
            <button class="opacity-25 text-primary">
              <i class="far fa-check"></i>
            </button>
          </div> -->
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'hello',
  props: ['products', 'priceDetails'],
  data () {
    return {
    }
  },
  methods: {
    changeProductCount: function (index, count) {
      EventBus.$emit('change-product-count', index, count)
    }
  },
  computed: {
    selectedProducts: function () {
      return this.products.filter(product => product.count > 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .product-count-button:disabled {
    visibility: hidden
  }
</style>
