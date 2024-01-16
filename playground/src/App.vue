<template>
  <div>
    <EstiloComponent/>
    <h1>Meu Primeiro componente:</h1>
    <p class="subtitulo"> Sub Titulo</p>
    <UsuarioComponent/>
    <h1 v-show="imagemExibida">A imagem está sendo exibida</h1>
    <ImagemComponent urlImg="/img/banner.png" :nomeImagem="banner1" @visibilidadeImg="alterouImagem"/>
    <ImagemComponent urlImg="/img/banner2.png" :nomeImagem="banner2"/>

  </div>
</template>

<script>

import UsuarioComponent from './components/UsuarioComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';
import ImagemComponent from './components/ImagemComponent.vue';

export default {
  name: 'App',
  components: {
    UsuarioComponent,
    EstiloComponent,
    ImagemComponent
},
  data(){
    return {
      banner1: "Sou banner 1",
      banner2: "Sou banner 2",
      imagemExibida: false
    }
  },
  methods:{
     alterouImagem(imagemExibidaFilha){
      console.log("A imagem foi alterada via emit");
      if (imagemExibidaFilha === true){
        this.imagemExibida = true
      } 
      else{
        this.imagemExibida = false
      }
     }
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
  text-align: start;
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
