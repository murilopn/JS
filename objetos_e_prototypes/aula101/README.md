Usando map - não é o método do arrays e sim uma estrutura de dados


DESESTRUTURAÇÃO DE OBJETOS -> Ele vai no array pessoa e caçar os objetos com o nome 'id' e jogar esses valores para meu const {id}. 
obs: se fosse const id só pegaria o último valor. Fiz do const um obj para pegar tudo:
const {id} = pessoa 

Olhar o ex do main.js: Há 2 problemas:

1º A chave de um objeto é sempre string ou símbolo. Ele precisava que fosse um número (daí é fácil resolver, só tipar falando que é Number)

2º A ordem do print estava de forma crescente, mas ele queria a ordem natural do pessoa, ou seja, ordem decrescente.

O map foi utilizado para construir isso. Ele resolveu os 2 problemas numa tacada só. Os índices são números (sem tipar nem nada, de forma  "natural") e também é preservada a ordem que o const {id} recebeu.

Para usar o map, tenho que usar o .set e na hora de pegar um índice, para dar um print específico, por ex, devo usar o .get()

Último detalhe:
Se eu criar um for e iterar sobre o novasPessoas, ele vai me retornar um array. Isso é interessante, porque permite eu desestruturar com muita facilidade - coloquei um código no main.js
