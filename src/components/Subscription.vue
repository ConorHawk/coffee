<template>
  <div class="min-h-full flex justify-between items-center" style="padding:45px 0">
    <div class="min-h-full w-full p-4">
      <div class="py-4">
        <div class="mb-12">
          <h1 class="text-coffee-light">My Account</h1>
          <div>
            <p>How many cups of coffee does your household drink each day?</p>
            <div style="min-height:4.5em">
              <transition-group name="list-complete" tag="div" class="text-center flex flex-wrap justify-center">
                  <div class="list-complete-item text-xl" v-for="i in coffeeCount" :key="i + 'test'">
                    <i class="fas fa-coffee"></i>
                  </div>
                </transition-group>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="flex justify-center text-coffee text-lg w-12 h-10 border-coffee rounded-l-full border-r border-t border-l border-b focus:outline-none" @click="changeCount(-1)">
              <i class="fal fa-minus"></i>
            </button>
            <button class="flex justify-center text-coffee text-lg w-12 h-10 border-coffee rounded-r-full border-r border-t border-b focus:outline-none" @click="changeCount(1)">
              <i class="fal fa-plus"></i>
            </button>
          </div>
        </div>
      
        <h1 class="text-coffee-light">My {{subscription ? 'Subscription' : 'previous order'}}</h1>
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
            <div class="my-2 product-button w-full">
              <div class="rounded bg-coffee-lighter text-coffee-dark flex">
                <div class="w-1/3 flex-none bg-cover bg-center" :style="{'backgroundImage': `url('${priceDetails.img}')`}"></div>
                <div class="p-2 text-left">
                  <h3 class="text-base">{{priceDetails.name}}</h3>
                  <h4 class="font-light text-lg">{{planDetails.name}}</h4>
                  <div class="pb-2 pt-4 flex flex-col items-start justify-center">
                    <h4 class="text-sm font-grey-darker font-normal">${{planDetails.price}} <span class="text-xs"></span><span v-if="subscription"> per month</span></h4>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div key="sub" v-if="subscription" class="w-full">
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
                <td><p class="text-lg m-0">Next shipment in:</p></td>
                <td>
                  <div class="border-coffee border rounded-full inline-flex items-center justify-between">
                    <button :disabled="shipmentDays === 2" class="px-4 py-2 text-coffee product-count-button" @click="shipmentDays--">
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
          <div class="py-4" v-else key="nosub">
            <button @click="repurchase()" class="btn">Re-purchase previous order</button>
          </div>
          <div>
            <div style="padding:.5rem;">
              <p class="text-lg mr-4 inline" for="byDoor">Leave by my door</p> <input id="byDoor" type="checkbox">
            </div>
            <div style="padding:.5rem;">
              <p class="text-lg m-0">Notes</p>
              <textarea name="" id="" rows="4"></textarea>
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
  props: ['products', 'priceDetails', 'coffeeFrequencyInDays', 'planDetails', 'subscription', 'coffeeCount'],
  data () {
    return {
      shipmentDays: 14,
      subStatus: true
    }
  },
  mounted () {
    this.shipmentDays = this.coffeeFrequencyInDays
  },
  methods: {
    changeCount (amount) {
      EventBus.$emit('update-coffee-count', amount)
    },
    changeProductCount: function (index, count) {
      EventBus.$emit('change-product-count', index, count)
    },
    repurchase () {
      this.$swal({
        type: 'success',
        title: 'Order Complete',
        html:
            '<p>Your order has been placed. You\'ll receive an email confirming your order and your invoice.</p><p>Enjoy your coffee and thank you for using CAPP.</p>',
        confirmButtonClass: 'btn',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
        }
      })
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
  .list-complete-item {
    transition: all 0.2s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
