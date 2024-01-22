<template>
  <div>
    <h1>HOME PAGE</h1>
    <PedidoComponent :burguer="this.hamburguerSelecionado" />

  </div>
</template>

<script>

import PedidoComponent from '@/components/PedidoComponent.vue';

export default {
  name: 'ConfiguracaoPedidoView',
  components: {
    PedidoComponent
  },
  data() {
    return {
      hamburguerSelecionado: null,
    };
  },
  mounted() {
   console.log(this.$route.query.burguer);
 
  },
}
</script>
