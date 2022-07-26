// SuperClass   
function Conta (agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    console.log(`saldo insuficiente: ${this.saldo}`)
    if(this.saldo > valor)  {
    this.verSaldo()
    return
    }
 this.saldo -= valor
 this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(
        `Ag./C: ${this.agencia}/${this.conta} | `+ 
        `Saldo: ${this.saldo.toFixed(2)}`
        );
}
 //METODO REESCRITO 
function contaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
contaCorrente.prototype = Object.create(Conta.prototype)
contaCorrente.prototype.constructor = contaCorrente

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite))
    console.log(`saldo insuficiente: ${this.saldo}`)
    if(this.saldo > valor)  {
    this.verSaldo()
    return
    }
 this.saldo -= valor
 this.verSaldo()
}

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)

}
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const cc= new contaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(100)

console.log()

const cp = new CP(12, 33, 0)
cp.depositar(10)
cp.sacar(10)
