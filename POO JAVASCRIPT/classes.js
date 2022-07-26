class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar () {
        console.log(`${this.nome} está falando`)
    }
    comer () {
        console.log(`${this.nome} está comendo`)
    }
    beber () {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 =  new Pessoa('bruno', 'costa')
const p2 =  new Pessoa('joana', 'tadeu')
const p3 =  new Pessoa('Maria', 'kubskchek')
const p4 =  new Pessoa('julia', 'jota')    
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)