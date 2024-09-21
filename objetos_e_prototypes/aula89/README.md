Revisando objetos

const pessoa = {
    nome:'murilo'
    sobrenome:'nascimento'
}
nome é key e pessoa é objeto. Em c++ em vez de key, chamamos de atributo.

posso acessar a key de 2 formas:
    pessoa.nome e pessoa ['nome']
    A 2º forma é mais eficiente quando quero acessar de forma dinâmica. Ou seja, toda hora vai mudar o que eu preciso acessar e/ou não sei o que preciso acessar ainda, a informação virá de algum lugar no meio do código

Além da possibilidade de criar meu objeto de forma literal (com os {}), eu também posso criar da forma que usava em arrays:
const pessoa = new Object()
pessoa.nome='murilo'
pessoa.sobrenome='nascimento'

para DELETAR eu posso simplesmente chamar o comando delete: delete pessoa.nome

A vantagem das funções estarem denrto do objeto é que temos acesso as chaves do meu objeto dentro desse método. Essa utilização é feita através do "this". A questão é que na hora de chamarmos, ao invés de ser pessoa1.nome, temos que acrescentar um () ao final

Vale a pena lembrar que factory e constructor functions são moldes, ou seja, é muito interessante usá-los em inúmeros casos, como por exemplo, hora de cadastrar clientes, uma vez que o "molde" já está pronto. Uma alternativa ao uso dessas funções é a utilização de Classes.  

Só recordando , o new cria o novo objeto e atrela o "this" a esse objeto criado

POSSO TRAVAR MEU OBJETO: Object.freeze(nome do objeto) - isso faz com que eu não acrescente nenhum atributo, mas eu posso chamar o objeto e usar o molde qnts vzs quiser. Posso travar o this também (daí usaria dentro da minha construtora) - FUNCIONA COM ARRAYS TAMBÉM