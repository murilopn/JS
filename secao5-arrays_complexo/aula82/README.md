método splice:
É semelhante ao pop, só que ao invés de retornar o próprio elemento, retorna um array, uma vez que é possível remover mais de um elemento.

splice (índice que vai iniciar a remoção, nº de elementos a serem deletados)

obs: se eu quiser que vá deletando até o final do meu array, eu posso fazer: splice(índice que vai iniciar a remoção, Number.MAX_VALUE )

Além disso, com o splice eu posso tanto trocar como adicionar elementos, ex:
splice (índice que vai iniciar, nº de elementos que vão sair, 'elemento')

Se for adicionar, basta fazer com que o nº de elementos que vão sair seja 0.
Se eu quiser adicionar sempre no final, posso colocar splice(nomes.lenght, 0, 'luiz','joão','zé',.....)
 



