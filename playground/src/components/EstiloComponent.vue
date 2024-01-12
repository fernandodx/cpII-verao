<template>
    <div>
        <h1> Titulo Padrão</h1>
        <p class="subtitulo"> Sub Titulo Estiloso</p>
    </div>
</template>

<script>
    export default {
        name : "EstiloComponent",
    }
</script>

<style scoped>

    .subtitulo {
        text-align: start;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: blueviolet;
    }


</style>