<template>
    <div id="pedidos-tabela">
 
      <div>
        <div id="pedidos-tabela-cabecalho">
          <div id="ordem-id">#ID</div>
          <div>Nome</div>
          <div>Hamburguer</div>
          <div>Ponto</div>
          <div>Opcionais</div>
          <div>Status</div>
          <div id="div-acoes">Ações</div>
        </div>
      </div>
      <div
        id="pedidos-tabela-linhas"
        v-for="pedido in listaPedidosRealizados"
        :key="pedido.id"
      >
        <div class="pedidos-tabela-linha">
          <div id="ordem-numero">{{ pedido.id }}</div>
          <div>{{ pedido.nome }}</div>
          <div>
            {{ pedido.hamburguer.nome }}
          </div>
          <div>{{ pedido.ponto.descricao }}</div>
          <div>
            <ul>
              <li
                v-for="(complemento, index) in pedido.complementos"
                :key="index"
              >
                {{ complemento.nome }}
              </li>
            </ul>
            <div class="divisor"></div>
            <ul>
              <li v-for="bebida in pedido.bebidas" :key="bebida.id">
                {{ bebida.nome }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
           
            >
              <option value="">Selecione</option>
              <option
                v-for="status in listaStatusPedido"
                :key="status.id"
                :value="status.id"
                :selected="status.id == pedido.statusId"
              >
                {{ status.descricao }}
              </option>
            </select>
          </div>
          <div id="div-acoes">
            <img
              src="/img/icone_lixeira.png"
              alt="Excluir"
              width="35px"
              height="35px"
             
            />
  
            <!-- <button class="cancelar-btn" @click="deletarPedido(pedido.id)">
              Cancelar
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    name: "ListaPedidosComponent",
    components: {
   
    },
    data() {
      return {
        listaPedidosRealizados: [],
        listaStatusPedido: [],
      };
    },
    methods: {
      async consultarPedidos() {
        const response = await fetch("http://localhost:3000/pedidos");
        this.listaPedidosRealizados = await response.json();
        console.log(this.listaPedidosRealizados);
      }
    },
    mounted() {
      this.consultarPedidos();
    //   this.consultarListaStatus();
    },
  };
  </script>
  
  <style scoped>
  #pedidos-tabela {
    width: 100%;
    margin: 0 auto;
  }
  
  #pedidos-tabela-cabecalho,
  #pedidos-tabela-linhas,
  .pedidos-tabela-linha {
    display: flex;
    flex-wrap: wrap;
  }
  
  #pedidos-tabela-cabecalho {
    font-weight: bold;
    padding: 12px;
    border-bottom: 2px solid #222;
  }
  
  #pedidos-tabela-cabecalho div,
  .pedidos-tabela-linha div {
    width: 18%;
  }
  
  .pedidos-tabela-linha {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }
  
  #pedidos-tabela-cabecalho #ordem-id,
  .pedidos-tabela-linha #ordem-numero,
  .pedidos-tabela-linha #div-acoes,
  #pedidos-tabela-cabecalho #div-acoes {
    width: 5%;
  }
  
  .pedidos-tabela-linha .div-acoes {
    width: 5%;
  }
  
  select {
    padding: 12px;
    width: 110px;
    border: #222 solid 1px;
    border-radius: 8px;
    height: 36px;
    margin-right: 8px;
    font-size: 12px;
  }
  
  .cancelar-btn {
    background-color: #222;
    color: darkgoldenrod;
    transition: 0.5s;
    font-weight: bold;
    border: 2px solid darkgoldenrod;
    padding: 8px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .cancelar-btn:hover {
    background-color: transparent;
    color: #222;
  }
  
  .pedidos-tabela-linha .divisor {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: darkgoldenrod;
  }
  </style>
  