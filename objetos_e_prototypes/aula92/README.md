AULA SOBRE MÉTODOS ÚTEIS PARA TRATAMENTO DE OBJETOS!!

Assim como em arrays, para evitar o problema dos 2 apontarem para o mesmo local de memória e um alterar o outro, é melhor separá-los, usando spread operator.
outraCoisa= {... produto}
obs: lembrar que como estou trabalhando com objetos, não é [] e sim {}. Além disso, consigo acrescentar atributos, se eu quiser (ex no código)

Já vi em aulas anteriores:
Object.keys() - retorna as chaves
Object.freeze() - impede a alteração do atributo, ou do objeto se vc quiser
Object.defineProperty - define as propriedades de 1 atributo
Object.defineProperties - define as propriedades de vários atributos

Coisas novas:
Object.getOwnPropertyDescriptor() - me retona as propriedades de dado atributo (atenção que os parâmetros são chatos, ex no main.js)
Object.values() - valores das keys
Object.entries() - pegas os valores e as keys, em resumo, as entradas