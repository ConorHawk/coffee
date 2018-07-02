<template>
  <div id="app" class="h-full min-h-full font-sans text-grey-darkest bg-coffee-light leading-normal font-light">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import 'src/assets/css/style.scss';
  html, body {
    height: 100%;
  }
</style>