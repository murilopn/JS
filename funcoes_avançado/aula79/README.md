Igual no C
function recursiva(max){
    if (max>=10){
        return
    }
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)


//novamente, deve-se ficar atento para a condição de saída da recursividade (a condição para dar o return)