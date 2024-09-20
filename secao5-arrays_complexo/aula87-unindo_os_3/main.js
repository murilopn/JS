const array=[5,50,80,1,2,3,5,8,7,11,15,22,27]
//usando arrow functions:

//filtrar pares:
const pares =  array.filter(valores=>!(valores%2))

//dobrar os valores:
const dobrar = array.map(valores=>valores*2)

//somar todos:
const soma = array.reduce((acumulador,valores)=>acumulador+=valores,0)

console.log(pares)
console.log(dobrar)
console.log(soma)

//eu poderia unir tudo
const num_pares =  array.filter(valores=>!(valores%2)).map(valores=>valores*2).reduce((acumulador,valores)=>acumulador+=valores,0)

console.log(`Soma do dobro de todos os números pares = ${num_pares}`)
