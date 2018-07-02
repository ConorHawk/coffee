<template>
  <div class="h-full flex items-center p-4">
    <div class="w-full">
      <h1>Quick question!</h1>
      <p>How many cups of coffee does your household drink each day?</p>
      <!-- <input type="text" id="coffeeCount" name=""> -->
      <div style="min-height:4.5em">
        <transition-group name="list-complete" tag="div" class="text-center flex flex-wrap justify-center">
            <div class="list-complete-item text-xl" v-for="i in coffeeCount" :key="i + 'test'">
              <i class="fas fa-coffee"></i>
            </div>
          </transition-group>
      </div>
      <div class="flex justify-center">
        <button class="flex justify-center text-coffee text-lg w-10 h-8 border-coffee rounded-l-full border-r border-t border-l border-b focus:outline-none" @click="coffeeCount--">
          <i class="fal fa-minus"></i>
        </button>
        <button class="flex justify-center text-coffee text-lg w-10 h-8 border-coffee rounded-r-full border-r border-t border-b focus:outline-none" @click="coffeeCount++">
          <i class="fal fa-plus"></i>
        </button>
      </div>
      
      <div class="pt-8 text-right">
        <router-link tag="button" class="btn" to="/products">
          Next
        </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      coffeeCount: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
