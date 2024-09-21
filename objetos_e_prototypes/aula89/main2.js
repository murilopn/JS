//Lembrar que factory e constructor functions são estilos de moldes:
//factory:
function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ //lembrando que o get simula um método sendo atributo da classe, uma key
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

function CriaPessoa2(nome,sobrenome){
    this.nome=nome,
    this.sobrenome=sobrenome
    Object.freeze(this)
}
pessoa=criaPessoa('Murilo', 'Nascimento')
console.log(pessoa.nomeCompleto) //se eu colocar () vai dar errado, porque agora não é mais método e sim atributo

pessoa2= new CriaPessoa2('José','Afonso')
delete pessoa2.nome //não vai deletar por causa do meu freeze
console.log(pessoa2) //NO COMEÇO PRINTA O CONSTRUTOR DO OBJETO, ou seja, o nome da função

//Pode-se perceber que o new cria um objeto na hora do print. Por isso que a função construtora é mais limitada, ela SÓ pode me retornar o objeto


