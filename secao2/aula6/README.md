Aula sobre variáveis

Duas formas de declarar string:
let = 'Murilo'
var = 'Murilo'

A diferença principal é que var possui escopo de função e let possui escopo do blocoo, ou seja:

    function exemplo() {
        if (true) {
            var x = 10;
        }
        console.log(x); Vai printar o 10
    }

    function exemplo() {
        if (true) {
            let x = 10;
        }
        console.log(x); Vai printar 'Reference Error: x is not defined', pois está fora do bloco ao qual ela foi declarada
    }

    Vale pontuar que na hora do print eu vou cortando minha string com vírgulas e adicionando minhas variáveis entre elas.

    Se a variável n for inicializada, apenas declarada, dará undefined

    Só lembrar de usar camelCase na hora de declarar variáveis (boas práticas para quaisquer linguagens) - ex: nomeDoCliente