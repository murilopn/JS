Atribuição via desestruturação para objetos:

const pessoa = {
    nome:'Murilo',
    sobrenome:'Nascimento',
    idade:20,
    endereco:{
        rua:'Av.Vicente Machado',
        num:323
    }
}
Forma normal de atribuição:
const nome = pessoa.nome

Assim, como no array, eu também posso fazer por desestruturação, mas, no caso do objeto, basta que a sua variável tenha o mesmo nome do atributo pertecentente ao objeto:

const{nome} = pessoa
se fosse const{idade} = pessoa, atribuiria a idade

Também posso mudar o nome da minha variável (está nome no objeto, mas quero q passe a se chamar dedos, por ex)

DICA VALIOSA: É bom colocarmos um valor vazio, pois caso aquele nome não exista, não vai printar, mas caso exista, o valor vazio é substituido (por valor vazio eu digo aspas sem nada)