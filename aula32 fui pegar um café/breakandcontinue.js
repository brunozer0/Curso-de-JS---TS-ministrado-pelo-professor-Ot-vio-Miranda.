const numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0
do {
    let numero = numeros[i]
    if (numero === 2 ) {
        console.log('pulei o numero 2');
        i++
        continue; // continua a iteração do laço apos encontrar o item
    }
    console.log(numero)
    
    if (numero === 7) {
        console.log('7 encontrrado')
        i++
        break //para a iteração do laço apos encontrar o item
    }
   i++
} while( i < numeros.length)