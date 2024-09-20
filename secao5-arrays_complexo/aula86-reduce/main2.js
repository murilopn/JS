const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Léticia', idade:19},
    {nome:'Rosane', idade:32},
    {nome:'Wallace', idade:47}
]
//retorne a pessoa mais velha
//forma mais eficiente:
const eficiente = pessoas.reduce(function(acumulador,valor){ //o acumulador é o 1º elemento e o valor é o 2º, logo posso fazer:
    if (acumulador.idade>valor.idade){
        return acumulador
    }
    return valor //caso valor seja maior que acumulador 
})
//LEMBRAR QUE REDUCE,MAP E FILTER JÁ TEM UM FOR IMBUTIDO NELES, NÃO É NECESSÁRIO FAZER ISSO:

const pessoa_mais_velha=pessoas.reduce(function(acumulador,valor,indice,array){ 
    for (i of array){
        if (valor>i){
            acumulador=valor
        }
    }
    return acumulador
})
console.log(eficiente)
console.log(pessoa_mais_velha)