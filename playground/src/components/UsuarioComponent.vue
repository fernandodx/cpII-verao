<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>Email: {{ email }}</p>
        <hr>
        <div v-if="ja_trabalhou">
            <p>Profissão anterior</p>
            <ul>
                <li v-for="profissao in listaProfissoes" :key="profissao.id">{{ profissao.profissao }}</li>
            </ul>
        </div>
        <div v-else>
            <p>Open to Work</p>
        </div>
        <p v-show="tem_rede_social">
            Linkedin: <a :href="url" :target="target" :alt="alt">Rede Social Clique Aqui</a>
        </p>

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
                nome: "Laion Default",
                ja_trabalhou: true,
                tem_rede_social: true,
                url: "http://g1.com.br",
                alt: "Minha rede solcial",
                target: "#",
                listaProfissoes: [
                    {id: 1, profissao: "Analista de Sistemas"},
                    {id: 2, profissao:"Programador"},
                    {id: 3, profissao: "Estagiário"}, 
                    {id: 4, profissao: "Professor"}
                ]
            }
        },
        created() {
            console.log(`URL ATUAL -> ${this.url}`)
        },
        mounted() {
        
            setTimeout(() => {
              this.url = "http://google.com.br"
              console.log(`URL ATUAL -> ${this.url}`);
              this.target = "_blank"
            }, 5000);
            
        }
        

    }

</script>