let contador = 0

console.log(contador++) //incrementa, mas não mostra!
console.log(++contador) 

const num = 10
const palavra = 'flu'
console.log(num + palavra)//vai concatenar
console.log(num*palavra) //vai dar NaN

let pala='5'
console.log(num+pala) //concatena string
console.log(num*pala) //o js corrige automaticamente
pala = parseInt('5') //converteu pra inteiro
console.log(num+pala)