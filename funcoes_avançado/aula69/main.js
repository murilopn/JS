function funcao () {
    console.log(arguments[8]);
}
funcao ('Valor' , 1 ,2 ,3, 4, 5, 6, 7, 'josé');

function conta (operador, acumulador, ...numeros){
    console.log(`${operador}, ${acumulador}, ${numeros}`);
}
conta ('+', 0, 50, 150, 250, 50)