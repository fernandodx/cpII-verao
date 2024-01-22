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
            <div id="pedidos-tabela-linhas">
                <div class="pedidos-tabela-linha">
                    <div id="ordem-numero">1</div>
                    <div>Fulano</div>
                    <div>Diretoria</div>
                    <div>Descricao</div>
                    <div>
                        <ul>
                            <li>Batata</li>
                        </ul>
                        <div class="divisor"></div>
                        <ul>
                            <li>Coca</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status">
                            <option value="">Selecione o status</option>
                            <option value=1>Pedido realizado</option>
                        </select>
                    </div>
                    <div id="div-acoes">
                        <img src="/img/icone_lixeira.png" alt="Excluir" width="35px" height="35px">
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>

export default {
    name: "ListaPedidosComponent"
}

</script>

<style scoped>

#pedidos-tabela {
    width: 100%;
    margin: 0 auto;
}

#pedidos-tabela-cabecalho, #pedidos-tabela-linhas, .pedidos-tabela-linha {
    display: flex;
    flex-wrap: wrap;
}

#pedidos-tabela-cabecalho {
    font-weight: bold;
    padding: 12px;
    border-bottom: 2px solid #333;
}

#pedidos-tabela-cabecalho div, .pedidos-tabela-linha div {
    width: 18%;
}
.pedidos-tabela-linha {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid gray;
}

#pedidos-tabela-cabecalho #ordem-id,
.pedidos-tabela-linha #ordem-numero,
.pedidos-tabela-linha #div-acoes,
#pedidos-tabela-cabecalho #div-acoes{
    width: 5%;
}

.pedidos-tabela-linha .div-acoes {
    width: 5%;
}

select {
    padding: 16px;
    width: 110px;
    border: #333 solid 1px;
    border-radius: 8px;
    height: 36px;
    margin-right: 8px;
    font-size: 12px;
}

.pedidos-tabela-linha .divisor {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: darkgoldenrod;
}

</style>