class DispositivoEletronico{
    constructor (nome){
        this.nome= nome
        this.ligado = false
    }
    ligar() {
        if (this.ligado)  {
            console.log(this.nome + ' já ligado')
        }
        this.ligado = true
    }
    desligar() {
        if (!this.ligado)  {
            console.log(this.nome + ' já desligado')
        }
        this.ligado = false
    }

}
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }
    ligar() {
        console.log('voce alterou o método ligar')
    }
    falaOi() {
        console.log('fala oi')
    }
}
const s1 = new Smartphone('iPhone', 'preto', 'XR')
console.log(s1)

const t1 = new Tablet('iPAD', true)

t1.ligar()
t1.ligar()
t1.falaOi()