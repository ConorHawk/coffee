<template>
  <div :class="{'active': priceDetails.totalProducts && priceDetails.totalProducts > 0}" class="fixed pin-b pin-r w-full bg-coffee-dark py-2 px-4 flex items-center justify-between border-t border-coffee purchase-nav-bar" style="height:62px">
    <div>
      <p class="m-0 text-xs">{{priceDetails.totalProducts}} item(s) selected</p>
      <p class="text-lg font-semibold m-0">${{priceDetails.totalPrice}} <span class="text-xs font-light">AUD</span></p>
    </div>
    <button @click="purchase()" v-if="$route.name === 'Payment'" class="btn">
      Purchase
    </button>
    <router-link v-else tag="button" class="btn" to="/payment">
      NEXT
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['priceDetails'],
  data () {
    return {
    }
  },
  methods: {
    purchase: function () {
      var self = this
      this.$swal({
        type: 'success',
        title: 'Order Complete',
        html:
            '<p>Your order has been placed. You\'ll receive an email confirming your order and your invoice.</p><p>Enjoy your coffee and thank you for using CAPP.</p>',
        confirmButtonClass: 'btn',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          self.$router.push('Subscription')
        }
      })
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .purchase-nav-bar {
    transform:translateY(62px);
    transition: 0.2s all;
    &.active {
      transform:translateY(0px);
    }
  }
</style>
