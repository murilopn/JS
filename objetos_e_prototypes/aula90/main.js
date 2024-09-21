function Produto (nome,preco,estoque){
    this.nome=nome
    this.preco=preco

    Object.defineProperty(this, 'estoque', {
        enumerable:true, //mostra a key
        value:estoque,  //valor da key
        writable: false, // BLOQUEIA ALTERAR O VALOR DO ESTOQUE,
        configurable:false //Permite reconfigurar a chave, caso eu queira, ou seja, redefinir as propriedades (posso criar outro obj.def prop e alterar enumerable, por ex)
    })


    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:nome,
            writable:false,
            configurable:false
        },
        preco:{
            enumerable:true,
            value:nome,
            writable:false,
            configurable:false
        }

    })


}   

const prod1 = new Produto('Camiseta', 20, 3)
delete prod1.estoque // Se eu colocar configurable como false, eu não posso apagar
console.log(prod1)
console.log(Object.keys(prod1)) //se eu colocar enumerable:false, não vai mostrar estoque