<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>Email: {{ email }}</p>
        <cadastro-component/>

    </div>
</template>

<script>
import CadastroComponent from './CadastroComponent.vue'

    export default {
        name: "UsuarioComponent",
        components: {
                CadastroComponent
            
        },
        data() {
            return {
                email: "fernando.dias@ifb.edu.br",
                nome: "Laion Default"
            }
        },
        created() {
            console.log(`Tela criada -> nome: ${this.nome}`)
        },
        mounted() {
            console.log(`Tela Montada -> nome: ${this.nome}`)
            setTimeout(() => {
                this.nome = "Fernando";
                console.log(`Tela Alterada -> nome: ${this.nome}`)
            }, 2000);
            
        }
        

    }

</script>