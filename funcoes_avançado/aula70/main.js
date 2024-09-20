//basicamente, ele apresenta os retornos possíveis. Igual ao C, a diferença é que da pra retornar uma função direto
let cont=0

function cria (multiplicador){
    cont++
    return function teste (n){
        cont++
        return n * multiplicador;
    };
}

const num = cria(10);
console.log(num(2));
console.log(cont)

/*
 Lendo a cronologia do código:
 a função cria é chamada a atribuida a variável num. A variável num recebe como retorno function teste (n), ou seja,
 ela passa a ser isso.

 Quando eu dou console.log, eu estou chamando a função num (que é igual a teste (n)) e passando o meu argumento 2 para o parâmetro
 da teste. Logo, irá me retornar n * multiplcador.

 Por isso o cont é igual a 2 e não igual a 4. Eu só entro em teste 1 vez.
 
 */
