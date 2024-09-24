//new Object
const objA = {
    chaveA:'A'
}

const objB ={
    chaveB:'B'
}
//se eu quiser que o B tenho o protótipo de A:
Object.setPrototypeOf(objB,objA) 
console.log(objB.chaveA)

function Produto (nome, preco){
    this.nome=nome;
    this.preco=preco;
}

Produto.prototype.desconto=function(porcentagem){
    this.preco=this.preco * (1-porcentagem/100)
}
Produto.prototype.aumento=function(porcentagem){
    this.preco=this.preco * (1+porcentagem/100)
}

p2={
    nome:'Caneta',
    preco:40
}

//se eu chamar p2.aumento ou p2.desconto, n vai dar certo, pq esses métodos se referem a classe Pessoa, para que eu utilize ele também, devo fazer:
Object.setPrototypeOf(p2,Produto.prototype)

const p3 = Object.create(Produto.prototype) //Criei o meu objeto já setando o prototype dele igual ao da classe Produto
p3.preco=105

const p1= new Produto('Camiseta',50)

p3.aumento(10)
p1.aumento(10)
p2.aumento(10) //Posso fazer isso graças a linha 31
console.log(p1)
console.log(p2)
console.log(p3)