ESSA AULA É MUITO IMPORTANTE, POIS ELE MOSTRA COMO UTILIZAR UM JS LINKADO O MEU HTML!!!!!!!!!!!!!!!!!
Nessa aula ele falou sobre números, bem como apresentou funções.

toString(2) - o 2 é um parâmetro que transforma o número em binário
toFixed(2) - vai pegar só até a 2a casa decimal (arredonda)

Como o js não possui tipo inteiro e float, apenas, Number, para saber se é inteiro ou float temos que usar funçõeszinhas:
    Number.isInteger() e Number.isFloat() - o retorno delas é um bool

O js tem um bug muito bizarro na hora de executar contas, por ex:
    let num1= 0.1
    let num2= 0.7
    console.log(num1+num2) = 0.7999999999
    pra consertar isso, não adianta dar toFixed, só dando parse
    então, seria
    num2+=num1
    num2 = parseFloat(num2)

Na outra aula ele só foi mostrando uma porção de funções (métodos) do objeto math:
    floor, ceil, round, max, min, random...

ATENÇÃO:
100/0 vai resultar em Infinity e isso tem true como retorno de bool
