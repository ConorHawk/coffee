<template>
  <nav class="w-full p-2 bg-coffee text-white flex justify-between items-center fixed pin-t pin-l z-50">
    <img style="max-width:50px" src="/static/images/logo-white.svg" alt="capp logo">
    <button @click="toggleMenu()" class="text-xl text-white">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<script>
import { EventBus } from '@/event-bus.js'
export default {
  name: 'hello',
  props: [],
  data () {
    return {
    }
  },
  methods: {
    toggleMenu: function () {
      EventBus.$emit('toggle-menu')
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
