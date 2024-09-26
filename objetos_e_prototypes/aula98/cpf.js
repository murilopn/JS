function Validacpf(cpfEnviado){

    Object.defineProperty(this,'cpfLimpo', {
        enumerable:true,
        get : function (){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

Validacpf.prototype.valida = function(){
    if (typeof this.cpfLimpo ==='undefined') return false;
    if(this.cpfLimpo.length!==11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial=this.cpfLimpo.slice(0,-2)//pegando do 0 ao antipenúltimo dígito (fica de fora o -1 e o -2)
    const digito1=this.criaDigito(cpfParcial)
    const digito2=this.criaDigito(cpfParcial+digito1)

    const novoCpf= cpfParcial+digito1+digito2
    return novoCpf===this.cpfLimpo;
}

Validacpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray=Array.from(cpfParcial) //transformando de string para array
    let regressivo=cpfArray.length+1
   
    const total = cpfArray.reduce((cont,valor)=>{
        cont+=regressivo*Number(valor)
        regressivo--;
        return cont;
    },0)
    const digito = 11 - (total%11)
    return digito > 9 ? '0' : String(digito) //usando notação ternária para caso o digito for maior que 9
}

Validacpf.prototype.isSequencia = function(){
    sequencia=(this.cpfLimpo[0].repeat(this.cpfLimpo.length))//está chegando se o índice 0 se repete até o último dígito (this.cpfLimpo.length)
    return sequencia===this.cpfLimpo
}



cpf= new Validacpf('070.987.720-03')
if(cpf.valida()){
    console.log("CPF válido")
}
else{
    console.log("CPF inválido")
}
