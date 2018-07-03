<template>
  <div class="min-h-full flex justify-between items-center" style="padding:45px 0">
    <div class="min-h-full  p-4">
      <div>
        <h1>Complete Order</h1>
        <label for="email">Delivery Address</label><br>
        <vue-google-autocomplete
          id="map"
          classname="form-control"
          placeholder="Start typing"
          v-on:placechanged="getAddressData"
          :country="['nz']"
        >
        </vue-google-autocomplete>
        <label for="password">Delivery Frequency</label><br>
        <select>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
          <option value="3">Fortnightly</option>
        </select>
        <label for="password">Payment Type</label><br>
        <select>
          <option value="1">Credit Card</option>
          <option value="2">Paypal</option>
          <option value="3">Apple Pay</option>
        </select>
      </div>
    </div>
    <modal name="order-complete" width="90%">
      <div class="p-4">
        <div class="rounded-full text-5xl bg-primary h-16 w-16 flex justify-center items-center text-white mx-auto mb-4">
          <i class="fal fa-check"></i>          
        </div>
        <h2>Order Complete</h2>
        <p>Your order has been placed. You'll receive an email confirming your order and your invoice.</p>
        <p>Enjoy your coffee and thank you for using CAPP.</p>
      </div>
    </modal>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  name: 'hello',
  components: {VueGoogleAutocomplete},
  data () {
    return {
    }
  },
  methods: {
    getAddressData: function (address, place) {
      this.$emit('address-selected', place.formatted_address)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
