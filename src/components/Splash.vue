<template>
  <div class="min-h-full flex items-center justify-center p-4">
    <div class="w-full flex flex-col items-center justify-center">
      <div class="w-10 mb-8">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="100%" height="auto" viewBox="0 0 326.05 326.05" style="enable-background:new 0 0 326.05 326.05;"
           xml:space="preserve">
        <g>
          <path fill="#f2dfc0" d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16
            c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z
             M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8
            C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169
            C322.479,191.585,343.526,103.869,310.81,48.75z"/>
        </g>
        </svg>
      </div>
      <p class="m-0">Get beautifully roasted<br>coffee to you door with</p>
      <h1 class="font-bold" style="font-size:5em">CAPP</h1>
      <router-link tag="btn" class="btn" to="/register">
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
