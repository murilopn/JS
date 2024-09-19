const data = new Date(0)
console.log(data.toString())

//const data2 = new Date('2024-7-19T10:30:10') //printa a data desejada (ano, mes, dia, hora, minuto, seg, miliseg).
//console.log(data2)


function zeroNaEsquerda(n){
    return n>=10 ? n :`0${n}`;
}


function formataData(date){
   
    const ano = zeroNaEsquerda(date.getFullYear());
    const mes = zeroNaEsquerda(date.getMonth() + 1);
    const dia = zeroNaEsquerda(date.getDate());
    const hora = zeroNaEsquerda(date.getHours());
    const min = zeroNaEsquerda(date.getMinutes());
    const seg = zeroNaEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


const date = new Date()
const dateBrasil = formataData(date)
console.log(dateBrasil)