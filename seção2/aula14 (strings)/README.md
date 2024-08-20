Pode-se usar aspas duplas ou simples
obs: se eu fizer: "Um "texto"", vai dar errado, eu posso fazer 'Um "texto"' ou "Um \"texto\"" (esse segundo jeito é super incomum)

consigo pegar o elemento referente ao índice da minha string, por ex:
    let str = "Olá, Mundo"
    console.log (str[5]) = M, números fora do range resulta em undefined

Alguma funções padrões, ex:
indexOf - coloca a palavra desejado e é dito o índice ao qual aquela palavra começa na sua string. O lastindexOf é o contrário, mostra o índice final

match - encontra um caractér desejado e printa ele na tela, ex:  match (/[a-z]/g) vai printar todas as minúsculas do meu texto (se eu tirar o g, vai printar só a 1a minúscula)

search - retorna o índice do caracter encontrado, search(/[a-z]/) - retorna o índice da primeira letra nesse intervalo

Outras funções: replace, lenght, slice, split (coloco o critério p gerar a divisão dentro do (), por ex, espaço), toUpperCase, toLowerCase.

sites com boas documentações de js: w3schools, mdn javascript e ecma