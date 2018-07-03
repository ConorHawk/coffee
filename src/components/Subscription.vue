<template>
  <div class="min-h-full flex justify-between items-center" style="padding:45px 0">
    <div class="min-h-full w-full p-4">
      <div>
        <h1 class="text-coffee-light">My Subscription</h1>
        <div class="py-2">
          <div class="flex flex-wrap justify-start">
            <!-- <div class="coffee-item" v-for="product in selectedProducts">
              <div class="coffee-img w-24 h-24 rounded-full bg-center bg-cover flex justify-center items-center" :style="{'backgroundImage': `url(${product.img})`}">
                <span class="text-3xl font-bold text-coffee-light">{{product.count}}</span>
              </div>
              <div class="px-4">
                <p class="text-center">{{product.name}}</p>
              </div>
            </div> -->
            <div class="my-2 product-button w-full" v-for="(product, index) in selectedProducts">
              <div class="rounded bg-coffee-lighter text-coffee-dark flex">
                <div class="w-1/3 flex-none bg-cover bg-center" :style="{'backgroundImage': `url('${product.img}')`}"></div>
                <div class="p-2 text-left">
                  <h3 class="text-base">{{product.name}}</h3>
                  <h4 class="font-light text-lg">${{product.price}} <span class="text-xs">each</span></h4>
                  <div class="pb-2 pt-4 flex flex-col items-start justify-center">
                    <p class="text-xs uppercase tracking-wide text-coffee m-0 inline">Quantity</p>
                    <div class="border-coffee border rounded-full inline-flex items-center justify-between">
                      <button :disabled="product.count === 0" class="px-4 py-2 text-coffee product-count-button" @click="changeProductCount(index, -1)">
                        <i class="text-xs fal fa-chevron-left"></i>
                      </button>
                      <p class="w-6 text-center m-0">
                        {{product.count}}
                      </p>
                      <button class="px-4 py-2 text-coffee" @click="changeProductCount(index, 1)">
                        <i class="text-xs fal fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div class="w-full">
            <table>
              <tr>
                <td><p class="text-lg">Subscription Status:</p></td>
                <td>
                  <div class="flex">
                    <button style="min-width:auto" @click="subStatus = true" :class="{'hollow': !subStatus}" class="btn text-sm px-2 mr-2">Active</button>
                    <button style="min-width:auto" @click="subStatus = false" :class="{'hollow': subStatus}" class="btn text-sm px-2">Paused</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><p class="text-lg">Next payment:</p></td>
                <td><span class="font-semibold text-xl">${{priceDetails.totalPrice}}</span></td>
              </tr>
              <tr>
                <td><p class="text-lg m-0">Next shipment in:</p></td>
                <td>
                  <div class="border-coffee border rounded-full inline-flex items-center justify-between">
                    <button :disabled="shipmentDays === 0" class="px-4 py-2 text-coffee product-count-button" @click="shipmentDays--">
                      <i class="text-xs fal fa-chevron-left"></i>
                    </button>
                    <p class="text-center m-0 text-lg font-semibold">
                      {{shipmentDays}} days
                    </p>
                    <button class="px-4 py-2 text-coffee" @click="shipmentDays++">
                      <i class="text-xs fal fa-chevron-right"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
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
      shipmentDays: 14,
      subStatus: true
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
  .coffee-item {
    margin-right:-10px;
    
  }
  .coffee-img {
    background-color: rgba(0,0,0,0.3);
    background-blend-mode: multiply;
  }
  td {
    padding:.5rem;
    p {
      margin: 0;
    }
  }
</style>
