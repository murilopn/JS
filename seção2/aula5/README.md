Nessa aula ele começou a integração entre JS e HTML

Assim como no  CSS, tem como eu acrescentar meu JS dentro do código HTML de várias formas, podendo fazer por tag <script></script>, mas não é indicado, pois acaba retardando o carregamento da página (se estiver no head, se for no body não tem problema). A maneira mais indicada é "linkando" a meu arquivo JS lá dentro.

Para ver o código fonte da página: CTRL + U

Para pegar um trecho e voltar 1 identação: SHIFT + TAB

Vale lembrar que por mais que html e js estejam utilizando a mesma engine, eles não se comportam de maneira igual. Por exemplo, eu posso colocar o comando
alert ('A página não funciona'), cria uma 'pop-up box' no alta da sua página, mas esse comando NÃO funciona em JS, apenas em html. 

A maneira mais "profissional" de integrar as 2 linguagens é criando um diretório e adicionando lá dentro os códigos de js. Quando for linkar com o html, eu puxo a pasta e em seguida o arquivo desejado de js.