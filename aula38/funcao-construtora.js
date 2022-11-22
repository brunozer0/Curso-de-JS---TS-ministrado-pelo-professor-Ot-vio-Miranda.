// FUNCAO CONSTRUTORA

function pessoa (nome, sobrenome) {
    
    //atributos ou métodos privados
    const id = 213219;
    const metodoInterno = function(){
    }
    //atributos ou métodos públicos, pois posso acessálos fora da função
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new pessoa('bruno', 'gostoso')
const p2 = new pessoa('gostoso', 'bruno')


console.log(p1.sobrenome)