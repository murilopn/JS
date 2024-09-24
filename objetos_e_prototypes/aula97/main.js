//EXERCÍCIO DE VALIDAÇÃO DE CPF
//705.484.450
function Numero(array){
    this.cpf=array.slice(0,-2)

}

Numero.prototype.primeiraEtapa = function(){
    this.soma=0
    for (let i =10,  j=0; i>=2 ; i--, j++){
        this.soma+=i*this.cpf[j]
    }

}

Numero.prototype.segundaEtapa = function(){
    this.formula= 11 - (this.soma%11)
    if (this.formula>9){
        this.formula=0
    }
    this.cpf.push(this.formula)
}

Numero.prototype.terceiraEtapa = function (){
    this.soma_nova=0
    for (let i =11,  j=0; i>=2 ; i--, j++){
        this.soma_nova+=i*this.cpf[j]
    }

}

Numero.prototype.quartaEtapa = function(){
    this.formula2 = 11- (this.soma_nova%11)
    if (this.formula2>9){
        this.formula2=0
    }
    this.cpf.push(this.formula2)

}


numero=70548445052
const entrada = String(numero).split('').map(Number);
cpf= new Numero(entrada)
cpf.primeiraEtapa()
cpf.segundaEtapa()
cpf.terceiraEtapa()
cpf.quartaEtapa()

var cont = 0
    for (let i=0;i<=entrada.length;i++){
        if (entrada[i]!==cpf.cpf[i]){
            cont++
        }
    }

if (cont===0){
    console.log('deu certo')
}
else{
    console.log('falso')
}




