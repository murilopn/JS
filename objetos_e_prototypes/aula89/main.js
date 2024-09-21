const pessoa = new Object()
pessoa.nome='murilo'
pessoa.sobrenome='nascimento'
pessoa.idade = 20
pessoa.falar_nome= function(){
    console.log(pessoa.sobrenome)
}
pessoa.getDataNascimento = function(){
    const dataAtual = new Date() //preciso da constructor function Date para pegar o ano 
    return dataAtual.getFullYear() - pessoa.idade
}

pessoa.falar_nome()
console.log(pessoa.getDataNascimento())

for (let key in pessoa) {
    console.log(key)
    console.log(pessoa[key])
}