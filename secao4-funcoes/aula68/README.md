Um pouco mais sobre funções em JS 


só lembrando: hoisting - a engine do js eleva as palavras "var" e declarações de função para o topo do código. Em resumo, isso possibilita que eu chame a função antes de declarar ou vice-versa, uma vez que a engine do js vai jogar a função lá para cima.

Em js as funções são first-class objects - resumidamente, eu posso tratar a função como um dado, ou seja, posso atribuir a uma variável uma função. Isso faz com que a minha variável se torne uma função também.
const nome =  function (){
    console.log(Joao);
}
nome(); - a variável se tornou a função. O resultado seria o print ("Joao").

Também consigo usar esse recurso para Arrow functions:
const arrow func = () => {
    console.log("Sou uma arrow function");
};

Como a minha função é um dado, eu posso utilizar como parâmetro de um função uma outra função

OBS:
posso criar um objeto com uma função (que é um método) dentro dele:
const obj = {
    falar: function(){      //ao invés de function, posso colocar falar () e começar a função, mais prático
        console.log('testando');
    }
};
obj.falar();