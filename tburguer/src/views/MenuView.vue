<template>
    <div>
        <h1> Menu</h1>
        <div id="scroll-horizontal">
            <div id="card-container">
                <div id="card-linha">
                    <div class="foto-hamburguer">
                        <img src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1696429768651d76c8124dc_75_75.jpeg" alt="Diretoria">
                        <div class="card-coluna">
                            <p id="nome-content">Diretoria</p>
                            <p id="preco-content"> R$ 45,00</p>
                            <p id="descricao-content"> hamburguer muito bom!!!!</p>
                            <button>Selecionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuView"
    }
</script>

<style scoped>

#card-container {
    display: inline-block;
    width: 250px;
    min-height: 500px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px darkgray;
    position: relative; 
}

#scroll-horizontal {
    flex: 1;
    overflow-x: auto;
    white-space: nowrap;
    width: 600px;
    margin: 0px;
    box-shadow: inset -10px 0px 15px -20px gray;
}
.foto-hamburguer {
    flex-shrink: 0;
}

#preco-content {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    color: lightcoral;
}

#nome-content {
    font-size: large;
    text-align: center;
    margin: 12px;
}

#descricao-content {
    color: gray;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}

.foto-hamburguer img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px 0 0;
}

.card-coluna {
    flex-grow: 1;
    padding: 15px;
    height: 100%;
}

.card-coluna p {
    margin: 0;
}

#card-linha {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-coluna button {
    margin-top: auto;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: .3s;
    width: 100%;
}

.card-coluna button:hover {
    background-color: transparent;
    color: #333;
    border: solid #4caf50 2px;
}






</style>