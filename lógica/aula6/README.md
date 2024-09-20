Nessa aula ele apresentou a representação ternária em js. Basicamente, é uma outra representação de if e else, entretanto é uma forma mais
econômica no que diz respeito a espaço de código.

A representação ternária em js é:  ? :

? significa if e : else

ex:
const pontuacaoUsuario=1000
if (pontuacaoUsuario >=1000){
    console.log('usuário vip')
}else{
    console.log('usuário normal')
}

Em vez de fazer isso, eu posso fazer:
const nivelUsuario= pontuacaoUsuario >=1000 ? 'usuario vip' : 'usuario normal'
console.log(nivelUsuario)