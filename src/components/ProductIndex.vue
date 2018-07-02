<template>
  <div class="h-full">
    <nav class="w-full p-2 bg-secondary-dark text-white flex justify-between">
      <h2>CAPP</h2>
      <button class="text-xl text-white">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
    <div class="p-4">
      <div v-for="product in products" class="my-2 rounded bg-white p-2 flex items-center">
        <div class="h-12 w-12 rounded flex-none bg-cover bg-center" :style="{'backgroundImage': `url('${product.img}')`}"></div>
        <div class="px-2">
          <h3>{{product.name}}</h3>
          <p>{{product.description}}</p>
        </div>
        <div class="px-2">
          <button @click="product.selected = !product.selected" class="opacity-25 text-primary" :class="{'opacity-100': product.selected}">
            <i class="far fa-check"></i>
          </button>
        </div>
      </div> 
    </div>
    <div v-if="selectedProducts.length > 0" class="fixed pin-b pin-r w-full bg-white p-2 flex items-center justify-between">
      <div>
        <p>{{selectedProducts.length}} items selected</p>
        <p class="font-bold">${{selectedProducts.length * 500}} <span class="text-xs font-light">AUD</span></p>
      </div>
      <router-link tag="btn" class="btn" to="/payment">
        BUY NOW
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      products: [
        {
          name: 'Coffee 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1',
          selected: false
        }, {
          name: 'Coffee 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1',
          selected: false
        }, {
          name: 'Coffee 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://i2.wp.com/ottosgranary.com/wp-content/uploads/2018/02/Macadamia-Kona.jpg?fit=3024%2C4032&ssl=1',
          selected: false
        }
      ]
    }
  },
  computed: {
    selectedProducts: function () {
      return this.products.filter(product => product.selected)
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
