<template>
    <div class="container">
        <img v-show="imagemVisivel" :src="urlImg" alt="imagem banner">
        <button @click="aparece_esconde(), segundoMetodo()">Aparece/Esconde</button>
    </div>
</template>

<style scoped>
    button{
        padding: 12px;
        font-weight: bold;
        color: darkcyan;
        background-color: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover{
        background-color: darkcyan;
        color: azure;
    }
    .container{
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightgray;
        padding: 16px;
    }

    img{
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 12px;
        box-shadow: 2px 2px 10px 2px darkcyan;
    }

</style>

<script>
    export default {
        name: "ImagemComponent",
        data(){
            return{
                //urlImg: "/img/banner.png",
                imagemVisivel: false
            }
        },
        props:{
            urlImg: String
        },
        methods: {
            aparece_esconde(){
                this.imagemVisivel = !this.imagemVisivel;
                console.log("Fui clicado!");
            },
            segundoMetodo(){
                setTimeout(function(){
                    console.log("Segundo método chamado juntamente do click");
                }, 2000);
            }
        }
    }
</script>