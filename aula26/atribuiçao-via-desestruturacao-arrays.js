//ATRIBUIÇÃO VIA //DESESTRUTURAÇÃO (ARRAYS)

/*let a = 'a'
let b = 'b'
let c = 'c'

const letras = [b, c, a];
[a, b , c] = letras;

console.log(a, b, c)*/

/*
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const [um, , três, , cinco]  = numeros
console.log(um, três, cinco)

*/
/*
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(numeros[1][2])
*/
/*
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [,[,,seis],] = numeros;

console.log(seis)
*/

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numeros
console.log(lista3[2])


