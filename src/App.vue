<template>
  <div id="app" class="h-full min-h-full font-sans text-coffee-light bg-pattern leading-normal font-light overflow-y-auto overflow-hidden">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
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
  .bg-pattern {
    background-color: #1a1a19;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233c352a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .page-enter-active, .page-leave-active {
    transition: all .2s;
  }
  .page-enter {
    opacity: 0;
    transform: translateX(10px);
  }
  .page-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
</style>