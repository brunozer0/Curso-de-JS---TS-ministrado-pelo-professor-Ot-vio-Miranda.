// FACTORY FUCTIONS // CONSTRUCTOR FUNCTIONS // CLASSES
/*
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}


const p1= criaPessoa('BRUNO', 'COSTA')

console.log(p1.nomeCompleto)

*/

/// CONSTRUCTOR FUNCTIONS//

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this) // todos os objetos serao travados 
}

const p1 = new Pessoa('bruno', 'costa') 
//bject.freeze(p1)// travei o objeto
console.log(p1)