//superclasse , classe mãe ou classe pai (tudo mesma coisa)
function Conta(agencia, conta,saldo){
    this.agencia=agencia
    this.conta=conta
    this.saldo=saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log("Saldo insuficiente")
        this.verSaldo();
        return;
    }
    this.saldo-=valor;
    this.verSaldo()
}
Conta.prototype.depositar= function(valor){
    this.saldo+=valor
    this.verSaldo()
};
Conta.prototype.verSaldo= function(){
    console.log(`Ag:${this.agencia} e saldo:R$${this.saldo.toFixed(2)}`)
};

//CONTA CORRENTE
function CC(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo) //usando a aula de herança para herdar as propriedades do pai
    this.limite=limite
}
CC.prototype = Object.create(Conta.prototype) //herança -> posso usar os protótipos de Conta
CC.prototype.constructor=CC

CC.prototype.sacar = function(valor){ //VAI SOBRESCREVER a Conta.sacar (para os casos de CC, conta corrente)
    if(this.saldo + this.limite < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo-=valor;
    this.verSaldo()
}

//CONTA POUPANÇA
function CP(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo) //usando a aula de herança para herdar as propriedades do pai
}
CP.prototype = Object.create(Conta.prototype) //herança -> posso usar os protótipos de Conta
CP.prototype.constructor=CP

const cp = new CP(12,33,0)
const cc= new CC(11,22,0,100)
cc.depositar(10)
cp.depositar(10)
cc.sacar(90)
cp.sacar(90)
