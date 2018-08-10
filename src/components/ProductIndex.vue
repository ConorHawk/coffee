<template>
  <div class="min-h-full" style="padding:45px 0">
    <div class="px-4 py-8">
      <router-link tag="button" :to="`/product/${product.id}`" aria-label="selectCoffee" class="w-full my-2 product-button" v-for="(product, index) in products" :key="product.id">
        <div class="rounded bg-coffee-lighter text-coffee-dark flex">
          <div class="w-1/3 flex-none bg-cover bg-center" :style="{'backgroundImage': `url('${product.img}')`}"></div>
          <div class="p-2 text-left">
            <h3 class="text-base">{{product.name}}</h3>
            <h4 class="font-light text-lg">${{product.prices[0].price}}<span class="text-xs font-normal text-grey-darkest">/ {{product.prices[0].name}}</span></h4>
            <br>
            <p class="m-0 text-sm">{{product.description}}</p>
          </div>
        </div>
      </router-link> 
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
