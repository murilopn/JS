forEach e Arrow functions:

O forEach é um MÉTODO que é a melhor forma de iteração em arrays, quando o assunto é DOM, haja vista que ele percorre todos os valores, ex:
const imgs = document.querySelectorAll('.imgs');

imgs.forEach(function(item){ - observar que eu faço imgs.forEach(), freezando que ele é um método
    console.log(item) - poderia colocar algo para alterar a classe, tudo que possua essa class
})
PARÂMETROS DA FUNÇÃO DE CALLBACK:
forEach(function (VALOR ATUAL, INDEX, ARRAY INTEIRO))

-recordar que HTML collection não possui array, então é viável transformar em array para usar o forEach.
const titulos = document.getElementbyClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){console.log(item);});

Arrow functions servem para encurtar a expressão de uma function, é só excluir o termo "function" e adicionar =>., ex:
imgs.forEach((item) => {
    console.log(item)
}) - obs: eu escrevo o parâmetro da mesma forma.

- Argumentos da Arrow function:
    Se tiver 1 único argumento (como o item ali em cima), não precisa de parênteses, pode ser (item =>{});

    Sem argumentos e múltiplos argumentos precisam de parênteses

se for só 1 linha a função:
imgs.forEach(item => console.log(item));