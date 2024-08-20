Atribuição via desestruturação (arrays)

é vc alterar o valor de outras variáveis com novas, ex: tenho 3 variáveis a,b,c com valor A,B,C, mas quero prinatr B,C,A com essas mesmas variáveis. Eu posso criar uma variável temporária ou posso fazer essa atribuição via desestruturação:
let a = A;
let b = B;
let c = C;
[a,b,c] = [C,A,B]

Essa atribuição via desestruturação veio para "arrancarmos" coisas do array e já jogarmos em uma variável, ou seja, ao invés de fazermos atribuição atrás de atribuição:
const numeros=[10,15,20]
const primeiro_num=numeros[0]
const segundo_num=numeros[1] ... e assim sucessivamente
Agora com a atribuição via desestruturação podemos fazer isso de forma direta:

const numeros=[10,15,20]
const [primeiro_num, segundo_num] = numeros - o js já entende que é o de índice 0 e 1

Além disso, há como pegar o "resto", ou seja, aquilo que não foi utilizado na atribuição:
const numeros=[10,15,20,35,42,57,68]
const [primeiro_num, segundo_num, ... resto] = numeros (tem q ter "...")