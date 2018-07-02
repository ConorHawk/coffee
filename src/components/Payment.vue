<template>
  <div class="h-full flex flex-col justify-between">
    <nav class="w-full p-2 bg-secondary-dark text-white flex justify-between">
      <h2>CAPP</h2>
      <button class="text-xl text-white">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
    <div class="flex items-center p-4">
      <div class="w-full text-white">
        <h1>Complete Order</h1>
        <label for="email">Delivery Address</label><br>
        <input type="text" id="email" name="">
        <label for="password">Delivery Frequency</label><br>
        <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label for="password">Payment Type</label><br>
        <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    </div>
    <div class="w-full bg-white p-2 flex items-center justify-between">
      <div>
        <p>1 items selected</p>
        <p class="font-bold">$500 <span class="text-xs font-light">AUD</span></p>
      </div>
      <button class="btn" @click="$modal.show('order-complete');">
        ORDER
      </button>
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
export default {
  name: 'hello',
  data () {
    return {
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
