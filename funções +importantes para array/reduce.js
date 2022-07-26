// SOME TODOS OS NUMEROS (reduce)
//  Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
// 
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 8, 9, 15, 22];
const total =   numeros.reduce(function (acumulador, valor){
 if (valor %2 !== 0)acumulador += valor
return acumulador
}, 0) 

console.log(total)
*/

// RETORNE A PESSOA MAIS VELHA
const Pessoas = [
    {nome: 'bruno', idade: 23},
    {nome: 'juju', idade: 43},
    {nome: 'tutu', idade: 33},
    {nome: 'larissa', idade: 63},
    {nome: 'leticia', idade: 83},
    {nome: 'Patrick', idade: 13}
]

const maisVelha = Pessoas.reduce( function(acumulador, valor, ){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
   
})

console.log(maisVelha)