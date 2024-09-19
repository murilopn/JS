const pessoa1 = {
    nome:'Murilo',
    sobrenome:'Nascimento',
    idade:20,

    fala(){
        console.log(`A minha idade atual é de: ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
        console.log(this.idade)
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()