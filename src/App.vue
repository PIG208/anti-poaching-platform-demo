<template>
  <Main>
    <router-view></router-view>
  </Main>
</template>

<script>
import Main from './layout/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
@import "./assets/css/font-awesome.min.css";
body {
  margin: 0;
}
:root {
  --header-height: 2.2rem;
  --header-font-size: 2rem;
  --header-vert-padding: 1.5rem;
  --main-padding: 3rem;
  --footer-height: 1.5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
