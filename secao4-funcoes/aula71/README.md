Escopo léxico - Em js as funções possuem escopo léxico, resumidamente:

A função sabe aonde ele está declarada, tudo que está declarada dentro dela e o que está fora dela. Isso possibilita que eu consiga 
acessar variáveis externas à minha função (variáveis globais), independentemente da keyword que a palavra tiver.É como se ela lembrase do ambiente onde ela foi declarada ex:

nome = 'Murilo'

function name (){
    console.log(nome)
}
name()

obs: É válido lembrar que let e const tem escopo de bloco e var tem escopo global. Ou seja, ao declarar um const numa função, ele não
aparecerá na outra.

OUTRO EXEMPLO:

function outerFunction() {
  let outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); 
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); 

Quando eu chamo closureExample para rodar outerFunction(), o valor de outerVariable será "lembrado", porque está no escopo léxico da função, ou seja, está no "ambiente". Se closureExample estivesse em outro lugar, não estaria no escopo léxico. O que me garante essa "lembrança" é o closeure.