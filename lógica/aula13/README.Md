Há um outro tipo de for no js, cbamado de "for of", ele é utilizado quando estamos trabablhando com "estruturas iteraveis", como uma string ou array. Isso porque nele não é preciso mandar o índice, ou seja, é facilitação. Logo, se eu der for of num objeto, vai dar ruim, pq ele não é iterável

Além dessa for, também há o comando forEach (está no main.js) que também realiza um loop sem utilizar índices.

Resuminho:
For clássico - Geralmente com iteráveis (array ou strings) 
For in - Retorna o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, arrays ou strings)