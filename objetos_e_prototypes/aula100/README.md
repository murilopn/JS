Factory functions +  prototypes
 
 A vantagem de usar Object.prototype é justamente criar um objeto vazio e poder falar quem é o prototype deste objeto.

 Usar prototypes com factory functions é bom por causa do Object.prototype que possibilita, além de retornar um objeto(como pessoaPrototype no ex do main.js), retornar meus atributos juntos, sendo que é possível enviá-los com propriedades definidas já (writable,enumerable, e etc).

 Outra forma de fazer o que está no main.js (por composição - compor um objeto com vários outros):

        const falar = {
            console.log(`${this.nome} está falando`)
        },

        const comer = {
            console.log(`${this.nome} está comendo`)
        },
        const beber = {
            console.log(`${this.nome} está bebendo`)
        }

        const pessoaPrototype = {...comer, ...falar, ...beber} ou Object.assing({}, falar, comer, beber)

Tudo isso fora da factory function, daí na hora da factory function eu retorno nome, sobrenome, pessoaPrototype (da mesma forma)