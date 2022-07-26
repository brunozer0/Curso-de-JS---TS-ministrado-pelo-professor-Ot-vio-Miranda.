const pessoa = {
    nome: 'bruno',
    sobrenome:  'costa',
    idade: 23,
    endereco: {
        rua: 'av takeuti',
        numero: 320
    }
}



const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero)