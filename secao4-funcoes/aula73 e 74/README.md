Callback functions - resumidamente, no js vc n sabe exatamente quanto tempo demorará para se ler um banco de dados, por ex. Por causa disso, existem essas funções que fazem com que uma função só seja executada uma outra anterior for executada antes que ela.

IIFE - Immediately invoked function expression:
Em suma, se vc quiser invocar uma função anônima e deseja que ela seja executada imediatamente, vc deve envolvê-la em parênteses e colocar um parênteses ao final. 

(function () {
    console.log("Olá, mundo")
}) () ;

Detalhe: como a função é anônima ela não "toca" o escopo global, por isso essa necessidade de ter que sinaliar a necessidade de executar ela imediatamente.

obs: eu posso passar parâmetros para a função ao final da function, qnd eu chamo (no último parênteses)