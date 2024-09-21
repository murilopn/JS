//COM FACTORY FUNCTIONS

function produto (nome,preco,estoque){
    return {
        nome,
        preco,
        get estoque(){
            return estoque
        },

        set estoque (valor){
            if (typeof valor!=='number'){
                console.log('Digite um número')
                return
            }
        }
    }
}
prod = produto('Camiseta',20,3)
prod.estoque='adskdsa'
console.log(prod.estoque)



