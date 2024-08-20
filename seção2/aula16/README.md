Aula sobre arrays

- Em js, para criar o array, basta:
<tipo> <nome da variavel> = [<informação>], ex:
const numeros = [5,8,10,2,-1]

obs:typeof(numeros) = OBJECT, para ter certeza de que meu object é um array => alunos instanceof Array

obs: É possível colocar vários tipos de dados em um array, mas não é uma boa prática.
const valores = ['josé','maria', 5, 7, 8, true, 1, -5, null]

Acréscimo:
função .push adiciona um elemento no final do meu array, ex:
    numeros.push(5)
função .unshift adiciona um elemento no início do meu array, ex:    
    numeros.unshift(12)

Remoção:   
função .pop elimina um elemento do fim do array, ex:
    numeros.pop() - obs: posso salvar esse elemento removido em uma variável!!!
função .shift elimina um elemento do início do array,ex:
    numeros.shift() - obs: posso salvar esse elemento removido em uma variável!!!

ATENÇÃO:
a função delete[], elimina um elemento da posição indicada nos '[]', mas NÃO altera os índices!!, ex:
    const numeros = [5, 8, 10, 2, -1]
    delete numeros[ 1 ]
    console.log(numeros) - vai ser igual a: [5, <1 empty item>, 10, 2, -1]

OBS:
No js, tem como eu acessar posições que não existem do meu array, o meu retorno vai ser: 'undefined'

ATENÇÃO:
Em js, é possível alterar o meu array para outro tipo no meio do código, ex:
let alunos = ['João', 'Maria', 'Murilo']
alunos = 123
