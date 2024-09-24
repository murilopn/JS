function Produto (nome, preco){
    this.nome=nome
    this.preco=preco
}
Produto.prototype.aumento = function(porcentagem) {
    this.preco += this.preco * (porcentagem / 100); 
}


Produto.prototype.desconto = function(porcentagem) {
    this.preco -= this.preco * (porcentagem / 100); 
}

function Camiseta (nome,preco,cor){
    Produto.call(this,nome,preco) // herdando as propriedades da função construtora pai
    this.cor=cor
}
//Definindo a herança do protótipo
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca (nome,preco,material,estoque){
    Produto.call(this,nome,preco) //herdando as propriedades da função construtuora pai
    this.material=material
    this.estoque=estoque
}
Caneca.prototype= Object.create(Produto.prototype)
Caneca.prototype.constructor=Caneca

//Criando instâncias
const camiseta = new Camiseta('Regata', 7.5, 'preto')
const caneca = new Caneca('Caneca', 13, 'Cerâmica', 5)

camiseta.aumento(10)
console.log(camiseta.preco)
console.log(caneca)
console.log(camiseta)
