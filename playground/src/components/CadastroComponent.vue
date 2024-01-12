<template>
    <div>
        <p>Nome: </p>
        <input type="text" placeholder="Digite Seu Nome" v-model="inputNome"/>
    </div>    
</template>

<script>
    export default {
        name: "CadastroComponent",
        data() {
            return {
                inputNome : null
            }
        }
    }

</script>