function criaPessoas(nome,sobrenome){
    const pessoaPrototype = {
        falar (){
            console.log(`${this.nome} está falando`)
        },

        comer (){
            console.log(`${this.nome} está comendo`)
        },
        beber (){
            console.log(`${this.nome} está bebendo`)
        },
    }


    return Object.prototype(pessoaPrototype,{ 
        nome: {value:nome},
        sobrenome:{value:sobrenome} //são as propriedades (poderia colocar writable, enumerable e etc)
    })
}

const p1 = criaPessoas('Murilo','Nascimento')