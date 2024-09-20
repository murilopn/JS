const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Léticia', idade:19},
    {nome:'Rosane', idade:32},
    {nome:'Wallace', idade:47}
]
nome_da_pessoa=pessoas.map(valor=>valor.nome)
idade_da_pessoa=pessoas.map(valor=>valor.idade)
//se eu quiser transformar meu objeto só em idades:
idade_da_pessoa_chaves=pessoas.map(obj=>({idade:obj.idade})) //tive que envolver em parênteses para não dar problema entre as chaves do objeto e a das função

chave_id=pessoas.map((obj,indice)=> obj.id=indice) //estou criando um atributo (uma chave id) e atribuindo a ele o índice

console.log(nome_da_pessoa)
console.log(idade_da_pessoa)
console.log(idade_da_pessoa_chaves)
console.log(chave_id)
 
//COMO É PERCEPTÍVEL, O OBJETO ORIGINAL ESTÁ SENDO ALTERADO. SE EU QUISER PRESERVAR ELE, DEVO CRIAR UM NOVO:
//por ex: vou trocar o id
pessoas_nova=pessoas.map(function(obj,indice){
    obj_novo={...obj}
    obj_novo.id=indice*1000
    return obj_novo
})

console.log(pessoas)
console.log(pessoas_nova)


