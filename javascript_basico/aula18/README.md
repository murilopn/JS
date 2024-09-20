Tipos de dados primitivos em JS: 
number, string, boolean, undefined, null, bignit e symbol

Em js, os tipos primitivos são IMUTÁVEIS (ou seja, não podem ter seu endereço de memória alterado), ex:
let nome = "murilo"
nome[0] = "l" 
na hora de printar, vai printar murilo


em js, os tipos por referência são MUTÁVEIS (ou seja, podem ter seu endereço de memória alterado), ex:
let a= [1,2,3]
a.push(4)
na hora de printar, vai printar [1,2,3,4]

Outra conclusão:
Os valores primitivos são copiados para outra variável quando usamos o sinal de atribuição, já os de refêrencia não, 
eles compartilham do mesmo endereço de memória, por isso a alteração em um implica na mudança para o outro também.

ATENÇÃO:
é possível copiar o valor de uma variável mutável para outra sem compartilhar do mesmo endereço de memória, ex:
let a = [1,2,3];
let b = [...a];