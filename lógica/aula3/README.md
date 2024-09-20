Em js, tudo tem valor booleano, por ex, uma string com qualquer coisa escrita tem um valor de true. Por conta disso, é dito que
há duas possibildades, o valor pode ser Falsy ou Truthy.

Falsy:
false (do bool)
0
-0
0n (BigInt zero)
"" (string vazia)
null
undefined
NaN (Not-a-Number)

As demais entradas são Truthy.

detalhe: se eu uso o operador lógico: || e printo, irá printar a primeira entrada Truthy. Caso use &&, vai printar a última entrada Truthy.
ex:
console.log('Luiz' && 2 && 'Jose') - vai printar 'Jose' - obs: se tivesse um Falsy aqui, printaria o Falsy 
console.log('Luiz' || 2 || 'Jose') - vai printar 'Luiz'

É útil saber disso, pois isso evita a utilização de estruturas condicionais "a toa", ex prático:

const corUsuario=null;
const corpadrao = corUsuario || 'preto';
console.log(corPadrao)

se o usuário escolher a cor, como, por exemplo, vermelho, vai printar a cor desejada, pois no uso do operador "||" printa o primeiro.