const nomes = ['joao','maria','murilo']

const novo=nomes
novo.pop()
console.log(nomes) - como novo e pop estão apontando para o mesmo endereço de memória, nomes vai ser só o índice 0 e 1. Para solucionar isso, existe o spread operator:

const novo = [...nomes]
novo.pop()
console.log(nomes) - vai printar índice 0,1,2
console.log(novo) - vai printar índice 0,1

Lembrar sobre o slice()
const novo=nomes.slice(0,-1) - vai pegar do índice 0 até o penúltimo, pq ele remove o último

split('') - entre aspas simples devo colocar o critério de separação


