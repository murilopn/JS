No JS, eu consigo passar uma variável como argumento e não ter um parâmetro na minha função e isso não vai dar erro.
Isso acontece, porque o js tem por standard um array chamado "arguments", ex:

function funcao () {
    console.log(arguments);
}
funcao ('Valor' , 1 ,2 ,3, 4, 5, 6, 7, 8);

REST OPERATOR - Se na hora de colocar o argumento da minha função, eu quiser colcoar várias coisas e escrever só um parametro para receber tudo, eu uso esse operador, ex:
function conta (operador, acumulador, numeros){
    console.log(operador,acumulador,numeros);
}
conta ('+', 0, 50, 150, 250, 50)