// RETORNE  A SOMA DO DOBRO DE TODOS OS PARES
// FILTRAR PARES 
//DOBRAR OS VALORES 
// REDUZIR (SOMAR TUDO)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros
.filter(  (valor) =>  valor % 2 === 0)
.map( (valor) => valor * 2)
.reduce((ac, valor) => ac + valor)


// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro
//324 somando os valores com reduce
console.log(numerosPares)