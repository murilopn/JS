function teste (nome, sobrenome){
    return {
        nome,   
        sobrenome,
        fala : function (assunto){
            return `${this.nome} ${assunto}`
        }
    }
}

const p = teste ('murilo','nascimento')
console.log(p.fala('está aprendendo js'))