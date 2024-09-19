Entendendo um pouco mais sobre o DOM (document object model)

No HTML, temos o window, como pai de tudo (é a 1º a aparecer, é o topo da cadeia), em seguida vem o document e dentro do document vem o html e tudo dentro dele vai ser child do document (body, head...)
Em suma,tudo que estiver dentro vai ser filho do outro (isso se aplica a texto, daí ele é chamado text node)

Essa hierarquia é usada como uma interface de objetos que é possível manipular elementos html a partir do js (detalhe, por mais q n seja muito indicado, é possível até mesmo alterar a estilização da página pelo js)