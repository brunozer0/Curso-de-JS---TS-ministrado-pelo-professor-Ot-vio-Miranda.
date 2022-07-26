const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const humanoPrototype = Object.assign({}, falar, comer, beber)
// OU {...falar, ...comer, ...beber}
function CriarHumano(nome, sobrenome) {
    return Object.create(humanoPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })

}
const p1 = CriarHumano('bruno', 'costa')
const p2 = CriarHumano('maria', 'magalhães')

console.log(p2)