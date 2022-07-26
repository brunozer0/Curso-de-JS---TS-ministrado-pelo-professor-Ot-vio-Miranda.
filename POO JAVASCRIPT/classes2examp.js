// USANDO A FUNCAO CONSTRUTORA 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
function Pessoa2 (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}
const p1 =  new Pessoa('bruno', 'costa')
const p2 =  new Pessoa('julia', 'ndsjaj')

console.log(p1)
console.log(p2)

