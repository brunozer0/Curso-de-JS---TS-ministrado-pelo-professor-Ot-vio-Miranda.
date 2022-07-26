// VOU USAR SYMBOL
const _velocidade = Symbol() //propriedade privada

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 55 // propriedade privada
    }
    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return
        if(valor >=100 || valor <= 0)return
        this[_velocidade] = valor
    }
    get velocidade() {
        console.log('getter')
        return this[_velocidade]
    }
     acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
     }
     freiar() {
        if (this[_velocidade] <=0) return
        this[_velocidade]--;
     }
}

const c1 = new Carro('carro')

c1.velocidade = 99
console.log(c1.velocidade)


