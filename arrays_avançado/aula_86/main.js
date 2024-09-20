const array=[5,50,80,1,2,3,5,8,7,11,15,22,27]

const total = array.reduce(function(acumulador,valor,indice,numeros){
    acumulador+=valor
    return acumulador
},0)

/*RETORNE UM ARRAY COM OS VALORES PARES:
posso fazer com filter:*/

const pares=array.filter(valor=>!(valor%2))

// posso fazer com reduce:

const pares_com_reduce = array.reduce(function(acumulador,valor){
    if (valor%2===0){
        acumulador.push(valor)
    }
    return acumulador
}, []) //LEMBRAR SEMPRE DE INICIALIZAR 


/*RETORNE UM ARRAY COM O DOBRO DOS VALORES
posso fazer com map*/
const dobro=array.map(valor=>valor*2)

//posso fazer com reduce:

const dobro_reduce= array.reduce(function(acumulador,valor){
    acumulador.push(valor*2)
    return acumulador
},[])

console.log(total) //eu reduzi o meu array para um único elemento.
console.log(pares)
console.log(pares_com_reduce)
console.log(dobro)
console.log(dobro_reduce)
