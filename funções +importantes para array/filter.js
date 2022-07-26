// filter ->  O filter irá sempre retornar um array, com a mesma quantidade de elementos ou menos 

//RETORNE OS NUMEROS MAIOR Q 10
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 8, 9, 15, 22];
//function callBackFilter(valor, indices, array){
// return valor > 10
//}

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)

*/


// retorne as pessaos que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorrne as pessoas cujo nome termina com A
//
const Pessoas = [
    {nome: 'bruno', idade: 23},
    {nome: 'juju', idade: 43},
    {nome: 'tutu', idade: 33},
    {nome: 'larissa', idade: 63},
    {nome: 'leticia', idade: 83},
    {nome: 'Patrick', idade: 13}
]

const PessoasLenght = Pessoas.filter(obj => obj.nome.length >= 5)
const Pessoasidade = Pessoas.filter(obj => obj.idade >= 50)
const PessoasComA = Pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(PessoasComA)