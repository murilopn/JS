const produto = {nome: 'Caneca', preco: 1.8};
//spread operator + acrescentando coisas novas:
const outraCoisa={
    ...produto,
    material:'cerâmica'
}
produto.nome='Camiseta'
const apelido = {nome: produto.nome} //Se eu quiser criar um objeto com só um ou alguns atributos específicos de outro objeto


console.log(produto)
console.log(outraCoisa)
console.log(apelido.nome)
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
console.log(Object.keys(produto))
console.log(Object.values(produto))
console.log(`${Object.entries(produto)}\n`)

for (let valor of Object.entries(outraCoisa)){
    console.log(valor[0],valor[1])  //é um array. Consigo fazer isso tranquilo, porque eu sei que meu array só 1, eu conheço o tamanho dele
}