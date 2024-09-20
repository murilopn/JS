const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Léticia', idade:19},
    {nome:'Rosane', idade:32},
    {nome:'Wallace', idade:47}
]
nomes_grandes = pessoas.filter(valor=>valor.nome.length>=5)
pessoas_velhas = pessoas.filter(anos=>anos.idade>=50)
pessoas_comA = pessoas.filter(valor=>valor.nome.toLowerCase().endsWith('a'))


console.log(nomes_grandes)
console.log(pessoas_velhas)
console.log(pessoas_comA)
