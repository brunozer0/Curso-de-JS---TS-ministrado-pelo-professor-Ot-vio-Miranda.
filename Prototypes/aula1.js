// CONSTRUTORA -> molde (classe)
function Pessoa(nome, sobrenome) {
 this.nome = nome;
 this.sobrenome = sobrenome
 //this.nomeCompleto= () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

// Instância
const pessoa1 = new Pessoa('bruno', 'm')
const pessoa2 = new Pessoa('bruno', 'm')
const data = new Date()
console.dir(pessoa1)
console.dir(data)
