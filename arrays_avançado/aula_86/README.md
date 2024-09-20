REDUCE - reduzindo o array

PARÂMETROS:
const total = numeros.reduce(function (acumulador , valor , índice , array))

Papel é reduzir o array a um único elemento (ex no main.js)

obs:eu incializo o acumulador fora da função:
const total = numeros.reduce(function (acumulador , valor , índice , array){
        console.log('oi')
},0) - acumulador vai começar em 0. (se não iterar, vai dar como undefined)

DETALHE SUPER VALIOSO: SE EU NÃO INICIALIZAR , O VALOR VAI SER O 2º ELEMENTO E O ACUMULADOR O 1º