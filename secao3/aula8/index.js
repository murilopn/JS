let nome = 'Murilo'
var nome2= 'Matheus'
const v=true
//let nome = 'João' DÁ RUIM 
var nome2 = 'José' 

if (v){
    let nome = 'João' //apesar de ter o mesmo nome, não é a mesma variável, pois o escopo é de bloco, por isso dá certo.
    console.log(nome,nome2)
}

function fala(){
    console.log(nome2) 
    console.log(nome)
    var sobrenome='Nascimento'
}

fala()
//console.log(sobrenome) VAI DIZER QUE NÃO ESTÁ DEFINIDO