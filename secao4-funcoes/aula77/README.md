CONSTRUCTOR FUNCTIONS

Sempre se inicia uma função construtora com letra maiúscula e também colocamos (new). A função construtora cria objetos e define suas propriedades a partir
do "this".

DETALHE: Não é necessário dar return, pois já é entendido que a função construtuora retornará os objetos criados

function Pessoa (nome,sobrenome) {
    this.nome=nome
    this.sobrenome=sobrenome
}

const p1 = new Pessoa('Luiz', 'Otavio');

A utilização do "this": essa palavra é utilizada para se referenciar ao objeto atual que está sendo manipulado ou criado, ou seja, ele NÃO CRIA OBJETOS. Na função construtora, ele é muito importante, pois é a partir dele que se sabe o objeto ao qual está sendo instanciado.

o termo "new": Ele cria um objeto vazio (dentro da minha função construtora), faz o "this" apontar para a pessoa que chamou a função e daí retorna implicitamente esse objeto para essa variável.   

ATENÇÃO:Se eu não colocar this na frente, não irá retornar para a quem chamou a função. Isso pode ser vantajoso, pq eu posso usar isso para alguma coisa específica sem preocupação, pq vai ser descartado quando sair da construtora (só criar normal, ex: var cont)

NÃO PRECISO DE USAR VÍRGULA, COMO NAS FACTORY FUNCTIONS