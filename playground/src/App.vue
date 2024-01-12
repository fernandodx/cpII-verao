<template>
  <div>
    <EstiloComponent/>
    <h1>Meu Primeiro componente:</h1>
    <p class="subtitulo"> Sub Titulo</p>
    <UsuarioComponent/>
  </div>
</template>

<script>

import UsuarioComponent from './components/UsuarioComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';

export default {
  name: 'App',
  components: {
    UsuarioComponent,
    EstiloComponent
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

h1 {
  font-weight: bold;
  padding: 16px;
  color: darkcyan;
  background: lightblue;
  border-radius: 16px;
}
</style>
