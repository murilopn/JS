existe um método para filtrar o meu array, então eu não preciso ficar aplicando um for.Para usar esse método, eu tenho que criar um array novo, igual ao que eu quero mexer e usar esse array

Uma dica para maior eficiência: ao invés de retornar true ou false, é melhor retornar logo a condição que estaria no meu if, porque ela vai ser true ou false já

FUNCIONAMENTO DA FILTER: ela precisa receber uma retorno de true ou false para funcionar, ou seja, eu tenho que criar uma função "auxiliar" para fazer essa análise (exemplo no código main.js). Ela faz com que a função receba o array, os valores e índices desse array de forma completa.

Para ser ainda mais prático, é melhor fazer uma função anônima de callback e chamar já como parâmetro, ex:
new_array_filter=array.filter(function (valor){
    return valor>10;
})

Parâmetros do filter: numeros.filter(valor, índice desse valor, array inteiro)