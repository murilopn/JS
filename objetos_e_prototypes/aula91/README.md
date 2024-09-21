GETTERS e SETTERS

No fundo no fundo, getters e setter são formas de proteger a propriedade do meu atributo.

ex: tenho um estoque e fulano ao invés de colocar um número, manda uma string. Uma maneira de evitar que o meu atributo receba esse valor é justamente usando o setter para, literalmente, setar (configurar) o valor e o getter para obter o valor.

Logo: value e writable (propriedades do Object.definePropoerty()) não serão mais utilizadas, pois utilizarei getter e setter. Não faz sentido usar value, pq tem o getter writable, pq tanto quanto getter quanto setter vão trabalhar com esse valor

ATENÇÃO: ao criar o property, não é necessário usar o this do js, porque pode gerar um loop. É para usar tudo dentro da property e sem a utilização do "this" dentro das chaves do property