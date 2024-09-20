let a = 'A';
let b = 'B';
let c = 'C';

/* Poderia fazer dessa maneira também:
const letras= [b,c,a];
[a, b, c] = letras;
*/
[a,b,c] = ['C','A','B']
console.log(a,b,c)


const numeros=[10,15,7,39,25,32,42,7,20]
const[um,dois, ,...resto]= numeros
console.log(um,dois, resto)