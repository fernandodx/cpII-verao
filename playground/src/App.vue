<template>
  <div>
    <h1>Meu Primeiro componente:</h1>
    <UsuarioComponent/>
  </div>
</template>

<script>

import UsuarioComponent from './components/UsuarioComponent.vue';

export default {
  name: 'App',
  components: {
    UsuarioComponent
  },
  updated() {
    console.log("APP -> updated")
  },
  mounted() {
    console.log("APP -> mounted")
  },
  unmounted() {
    console.log("APP -> unmounted")
  },
  errorCaptured() {
    console.log("APP -> errorCaptured ")
  },
  created() {
    console.log("APP -> created")
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
