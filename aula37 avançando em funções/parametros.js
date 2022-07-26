
// a função definida com a palavra function possui uma variavel especial chamada 'arguments' q sustentam os argumentos enviados 

/*function Exec(a, b, c, d, e, f) {
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log( a, b , c, d, e , f)
}
Exec( 1, 2)
*/
/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

funcao(['Bruno Magalhães', 'costa', 30])
*/

//... = rest operator (operador de resto)
const conta = (...args) =>{
console.log(args)
}
conta('+', 1, 20, 30, 40, 50)

