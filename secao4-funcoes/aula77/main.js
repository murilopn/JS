function Pessoa (nome,sobrenome) {
    this.nome=nome
    this.sobrenome=sobrenome
}

const p1 = new Pessoa('Luiz', 'Otavio');

console.log(p1.nome)