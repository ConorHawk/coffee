<template>
  <div class="min-h-full flex items-center justify-center p-4">
    <div class="w-full flex flex-col items-center justify-center">
      <div style="max-width:80px" class="mb-8">
        <img class="w-full" src="/static/images/logo-light.svg" alt="Capp Logo">
      </div>
      <p class="m-0">Get beautifully roasted<br>coffee to you door with</p>
      <h1 class="font-bold" style="font-size:5em">CAPP</h1>
      <router-link tag="btn" class="btn" to="/onboarding">
        Enter
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
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
.st0{fill:#f2dfc0;}
</style>
