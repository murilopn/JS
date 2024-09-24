PROTOTYPES:

É um objeto vazio.

É a base que o js usa para trabalhar com Programção Orientada a Objetos. É utilizado quando eu tenho métodos (NÃO atributos) que fazem a mesma coisa para TODOS os objetos.

Ponto inicial:
Uma função construtora é um molde que cria objetos, ou seja, uma classe. Esse processo da classe criando novos objetos é chamado de INSTÂNCIAÇÃO, ou seja:

function Pessoa (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
const pessoa1 = Pessoa ('murilo','nascimento') <-- pessoa 1 = Objeto instanciado pela classe Pessoa


Para que serve:
É uma melhoria DRÁSTICA de performace do programa (em tempo de execução e eficiência de memória): 

Eficiência de Memória: 
    Se meu método estiver dentro da classe (solto, sem prototype), ele será criado a cada instância, independentemente se ele já foi usado outras vezes. O prototype faz ele ser criado apenas 1 vez, ou seja, o método é compartilhado, evitando a criação de cópias.

Menor tempo de execução:
    Logicamente, ao invés de criar várias cópias, eu crio apenas uma e compartilho, isso reduz bastante o tempo de execução do meu código.


O prototype é uma propriedade da minha função construtora, por conta disso, TODOS os objetos instanciados por tal função construtuora terão uma REFERÊNCIA INTERNA para o prototype. 

PARA USAR: é só chamar 'nome da função construtora'.prototype.'nome da função criada' = function () {} - ex no main.js


Prototype chain:
- É a ordem a qual a engine do js procura os objetos:

Primeiro ele vai no próprio objeto (a instância), caso não esteja lá, ele vai no prototype do objeto e, se não encontrar lá também, a engine vai subindo até chegar no topo da cadeia que é Object.prototype (ele é o PAI), todos os protótipos DERIVAM DELE (de todos os métodos e afins). Se não encontrar o objeto em nenhum desses 3 lugares, o resultado é undefined.
ex:
date (minha instância) --> date.prototype --> Object. prototype