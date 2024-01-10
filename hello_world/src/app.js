const myNameApp = {
    data() {
        return  {
            nome : "Fernando Dias",
            idade : 35,
            inputName: ""
        }
    },
    methods: {
        darAula(){
          console.log(`VALOR DO INPUT É: ${this.inputName}`);
          this.nome = this.inputName;
        }
    }
}

Vue.createApp(myNameApp).mount('#app');