//usando objetos literais

/*
const pessoa = {
    nome: 'bruno',
    sobrenone: 'costa'
}

const chave= 'nome'

console.log(pessoa['nome'])
console.log(pessoa[chave])
*/


//usando construtor
    
const pessoa1 = new Object()
pessoa1.nome = 'bruno'
pessoa1.sobrenome = 'costa'
pessoa1.idade = 23
pessoa1.falarNome = function() {
 return (`${this.nome} está falando seu nome`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}