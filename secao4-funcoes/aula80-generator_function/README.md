Função geradora
function * 

Ao invés de usar return, é melhor usar yield (tem a mesma funcionalidade do return habitual)

function * geradora1 (){
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';
}

const g1 = geradora1();
console.log(g1) - vai printar object [generator] e não o valor do yield
console.log(g1.next().value) - o "next" é um método dentro do objeto gerador.


A grande vantagem da generator function é que ela pode interromper e voltar uma execução.Ao invés de dar return, usamos o yield justamente
porque ele possibilita que possamos retornar um valor, chamar a função e continuaremos do valor em seguinte em diante, caso seja necessário. Então ali, naquele caso, poderíamos chamar:

console.log(g1.next().value) - vai printar ('Valor1)
console.log(g1.next().value) - vai printar ('Valor2)
console.log(g1.next().value) - vai printar ('Valor3)
