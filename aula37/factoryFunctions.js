// FUNCAO FÁBRICA
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        // GETTER  
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()   
            this.sobrenome = valor.join(' ')
           
        },
        fala (assunto) {
            return `${this.nome}, está falando sobre ${assunto}`
            // o THIS  se refere ao objeto qu está sendo chamado, -> neste caso 'fala' 
        },
        altura: a,
        peso: p,
        // getter 
       get imc() {
             const indice = this.peso /(this.altura ** 2)
             return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('bruno', 'costa', 1.8, 80) 
p1.nomeCompleto = 'julia nascimento pinto'
console.log(p1.nome)
console.log(p1.sobrenome)

