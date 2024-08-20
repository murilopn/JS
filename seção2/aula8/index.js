const nome = 'Murilo Patrício Nascimento'
const idade = 20, massa = 70, altura = 1.75
let imc=0

console.log(nome, 'tem',idade,'anos e pesa:',massa,'kg')
imc= massa/(altura*altura)
console.log('ele possui:',altura, 'e seu IMC é de:', imc)
//forma mais eficiente de fazer (template strings):
console.log(`${nome} tem ${idade} anos e pesa: ${massa}kg`) //atenção que é com crase!!!!


//obs eu poderia concatenar tudo também, ou seja, nome + 'tem' + idade... 