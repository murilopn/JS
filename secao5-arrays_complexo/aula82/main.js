const nomes = ['murilo','josé','maria','otavio','joana']

const removidos = nomes.splice(2,2)
console.log(nomes,removidos)

const adiciona=nomes.splice(3,0,'luiz')
console.log(nomes,adiciona)

const troca = nomes.splice(3,1,'antonio')
console.log(nomes,troca)
