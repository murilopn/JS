Operadores de comparção em js:
em vez de usar == na igualdade, usar ===, pois === garente igualdade numérica e de tipos também, o mesmo vale para !=, deve-se
usar !==, ex:

const num1=10
const num2='10'
console.log(num1==num2)
console.log(num1===num2)
console.log(num1!=num2)
console.log(num1!==num2)