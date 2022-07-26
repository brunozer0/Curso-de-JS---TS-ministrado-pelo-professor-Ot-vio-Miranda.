/*function CreatePerson(nome, sobrenome,idade) {
return {
    nome, sobrenome, idade
}
}
const pessoa1 = CreatePerson('bruno', 'magalhães', '25')

console.log(pessoa1.idade)*/

const pessoa1 = {
    nome: 'bruno',
    sobrenome: 'magalhães',
    idade: 23,
    
    falar (){
        console.log('olá mundo')
    }
}

pessoa1.falar()
