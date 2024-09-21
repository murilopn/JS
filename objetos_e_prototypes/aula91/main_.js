//COM  CONSTRUCTOR FUNCTION
function Produto (nome,preco,estoque){
    this.nome=nome
    this.preco=preco

    Object.defineProperty(this, 'estoque', {
        enumerable:true, 
        configurable:false,

        get: function(){ //serve para OBTER o valor. Geralmente só pega o valor e mostra
            return estoque
        },

        set: function(valor){//diferente do get, ele não me retorna nada, ele só altera e eu valido o valor
             if (typeof valor !== 'number'){
                console.log("bad value")
                return 
             }
        }
    })
}
const p1= new Produto('Camiseta',20,3)
p1.estoque=('ajdbsajsbd')
console.log(p1.estoque)