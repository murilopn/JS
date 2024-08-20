let varA = 'A'
let varB = 'B'
let varC = 'C'
const aux = 'A'

varA=varB
varB=varC
varC=aux

console.log (varA,varB,varC)
//exercício
/*Outro jeito de fazer:
[varA,varB,varC] = [varB, varC, varA]
*/ 