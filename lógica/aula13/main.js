frutas=['maça', 'pera', 'melao']


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//sem utilização de índice:
for (const fruta of frutas) {
    console.log(fruta);
}

//Outra forma:
frutas.forEach(function(valor){
    console.log(valor)
});
