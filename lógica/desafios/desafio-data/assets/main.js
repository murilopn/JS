const h1 = document.querySelector('.container h1') //selecionando a tag h1 dentro da classe container
const date = new Date();

function zeroNaEsquerda(n){
    return n<10 ?`0${n}`:n;
}
    
function criaData(date){
    dia_semana=date.toLocaleDateString('pt-BR', { weekday: 'long' })
    dia_mes=date.getDate();
    mes=date.toLocaleDateString('pt-BR', { month: 'long' });
    ano=date.getFullYear();
    hora=zeroNaEsquerda(date.getHours());
    min=zeroNaEsquerda(date.getMinutes());
    seg=zeroNaEsquerda(date.getSeconds());
    
    return `${dia_semana}, ${dia_mes} de ${mes} de ${ano} \n${hora}:${min}:${seg}`;
}   
   h1.innerHTML = criaData(date)
    
