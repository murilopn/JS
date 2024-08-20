const pessoa = {
    nome:'Murilo',
    sobrenome:'Nascimento',
    idade:20,
    endereco:{
        rua:'Av.Vicente Machado',
        num:323
    },
    dedo:'Idoso'
}
const{idade} = pessoa
console.log(idade)

const {nome='', olhos='', sobrenome, dedo: fase_da_vida=''} = pessoa
console.log(nome,olhos, sobrenome,fase_da_vida)