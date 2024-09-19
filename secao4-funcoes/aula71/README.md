Escopo léxico - Em js as funções possuem escopo léxico, resumidamente:

A função sabe aonde ele está declarada, tudo que está declarada dentro dela e o que está fora dela. Isso possibilita que eu consiga 
acessar variáveis externas à minha função (variáveis globais), independentemente da keyword que a palavra tiver, ex:

nome = 'Murilo'

function name (){
    console.log(nome)
}
name()

obs: É válido lembrar que let e const tem escopo de bloco e var tem escopo global. Ou seja, ao declarar um const numa função, ele não
aparecerá na outra.