const nomes = ['João','Murilo', 'Amélia']

for (let i=0; i<nomes.length; i++){
    console.log(nomes[i])
}

for (let i in nomes){
    console.log(nomes[i])
}

const pessoa={
     nome:'Murilo',
    sobrenome:'Nascimento',
    idade:20
}

for (key in pessoa){
    console.log(key)
}

for (key in pessoa){
    console.log(pessoa[key])
}