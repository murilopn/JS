function Pessoa (nome, sobrenome){
    this.nome=nome
    this.sobrenome=sobrenome
    Pessoa.prototype.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome
    }
    
}

pessoa1= new Pessoa('Murilo','Nascimento')
pessoa2= new Pessoa('José', 'De Arimateia')
console.log(pessoa1.nomeCompleto())
console.log(pessoa2.nomeCompleto())
