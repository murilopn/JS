Factory Functions:
Quando eu coloco uma função dentro do meu objeto, eu chamo ela de método.A minha factory function SEMPRE retorna um objeto.

 Ele ensina nesse aula a utilização do "this". Basicamente, o this possibilita o meu método acessar um dos atributos do meu objeto a partir da função, ex:

function teste (nome, sobrenome){
    return {
        nome,   
        sobrenome,
        fala : function (assunto)
        return `${this.nome} está ${assunto}` - O THIS ESTÁ SE REFERENDO A QUEM CHAMOU A FUNÇÃO, ou seja a p (linha 14)
    }
}
const p = teste (nome,sobrenome)
console.log(p.fala('Está aprendendo js'))

É vantajoso colocar essa função dentro do meu objeto, pq por vezes ele deixa o código bem mais enxuto. Por exemplo, eu poderia passar mais 2 parâmetros (altura, peso) e criar um novo método q calcula o imc e retorna ele.

const p = teste (nome,sobrenome, 1.8, 70)
console.log(p.imc())

OBS: getter - é um gambiarra feia, mas pode ser útil as vzs. Resumidamente, vc força um método virar um atributo colocando get na frente,no ex de cima, eu posso fazer com que o imc se torne um atributo, pois eu não preciso de parâmetros, uma vez que acesso tudo q eu preciso pelo this:

function teste (nome, sobrenome,p, a){
    return {
        nome,   
        sobrenome,
        fala : function (assunto)
        return `${this.nome} está ${assunto}` - O THIS ESTÁ SE REFERENDO A QUEM CHAMOU A FUNÇÃO, ou seja a p (linha 14)
    }
        peso:p,
        nome:a,
        get imc () {
            return this.peso/(this.nome**2)
        }

}
const p = teste (nome,sobrenome, 1.8, 70)
console.log(p.imc)

setter - permite vc alterar o valor gerado pelo método no próprio método 
