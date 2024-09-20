array=[5,50,80,1,2,3,5,8,7,11,15,22,27]
new_array=[]

for (let i of array){
    if (i>10){
        new_array.push(i)
    }
}
console.log(new_array)

//funcionamento da filter:

function callBack(valor){
    /*ao invés de fazer um:
    if (valor>10){
        return true
    }
    else {
      return false
    }*/ 
   //MELHOR FAZER ASSIM:
    return valor>10
}
new_array_filter=array.filter(callBack)/*O FILTER FAZ COM QUE AUTOMATICAMENTE A MINHA FUNÇÃO callBack receba os valores, índices e o array completo 
                                        sem precisar de parâmetro*/
console.log(new_array_filter)

//PARA SER MAIS PRÁTICO, É MELHOR JOGAR A FUNÇÃO DE CALLBACK DIRETO NO PARAMETRO DO FILTER:
/*DÁ P FAZER ASSIM:
    new_array_filter=array.filter(function (valor){
    return valor>10;
}) ou da forma mais otimizada:   */
new_array_filter=array.filter(valor => valor>10) //usei arrow function valor>10; Acredite se quiser, é uma função   
console.log(new_array_filter)