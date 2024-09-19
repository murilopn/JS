let nome = "murilo"
nome[0] = "l" 

console.log(nome[0],nome) // não muda, é imutável

let c='C'
let d=c
c='Outra coisa'
console.log(c,d) //o valor de d não muda


let a= [1,2,3]
let b=a
let e = [...a]
a.push(4)
console.log(a,b,e) //o valor de 'e' não muda e o de 'b' muda