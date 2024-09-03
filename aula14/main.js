try{
    console.log(variavel_inexistente)
}
catch{ //eu poderia colocar catch(e) - daria a mesma coisa
    console.log("ela não existe")
}

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('tanto x quanto y precisam ser números')
    }

    return x+y
}
console.log(soma(1,'1'))