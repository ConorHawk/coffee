<template>
  <div class="min-h-full" style="padding:45px 0">
    <div>
        <div class="w-full h-32 bg-cover bg-center relative" :style="{backgroundImage: `url(${activeCoffee.img})`}">
            <div class="z-0 absolute pin-t pin-l h-full w-full bg-red" style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(22,22,22,1) 88%);">
            </div>
        </div>
        <div class="px-4 -mt-2 z-10 relative">
            <div>
                <h1>{{activeCoffee.name}}</h1>
                <p class="mt-0">{{activeCoffee.description}}</p>
                <div class="my-4">
                    <p class="font-bold mb-1">Select your purchase type</p>
                    <div>
                        <div class="rounded border border-coffee inline-flex">
                            <button @click="changePurchaseType(true)" style="min-width:auto" :class="[subscription ? 'bg-coffee text-white' : 'text-coffee' ]" class="border-r border-coffee text-sm py-2 px-4">Subscription</button>
                            <button @click="changePurchaseType(false)" style="min-width:auto" :class="[!subscription ? 'bg-coffee text-white' : 'text-coffee' ]" class="border-r border-coffee text-sm py-2 px-4">One off</button>                          
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <p class="font-bold mb-1">Select your amount</p>
                    <div>
                        <div class="rounded border border-coffee inline-flex">
                            <button v-for="price in activeCoffee.prices" :key="price.name" @click="changeProductAmount(activeCoffee.id, price.id)" style="min-width:auto" :class="[price.id === activeCoffee.selectedPlan ? 'bg-coffee text-white' : 'text-coffee' ]" class="border-r border-coffee text-sm py-2 px-4">{{price.name}}</button>
                        </div>
                    </div>
                    <div v-if="activeCoffee.selectedPlan">
                        <p>You told us your household drinks <span class="text-coffee font-bold">{{coffeeCount}}</span> cup of coffee a day.</p>
                        <p v-if="subscription">Based on the selection above, you will receive coffee every:</p>
                        <p v-else>Based on the selection above, this will last you:</p>
                        <h2>{{coffeeFrequencyInDays}} days</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  props: ['products', 'priceDetails', 'coffeeCount', 'subscription', 'coffeeFrequencyInDays'],
  data () {
    return {
    }
  },
  methods: {
    changeProductAmount: function (index, id) {
      EventBus.$emit('change-product-amount', index, id)
    },
    changePurchaseType: function (subscription) {
      EventBus.$emit('change-purchase-type', subscription)
    }
  },
  computed: {
    activeId () {
      return this.$route.params.id
    },
    activeCoffee: function () {
      return this.products.find(product => product.id === parseInt(this.$route.params.id))
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
