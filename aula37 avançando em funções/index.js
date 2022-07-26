/*function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('bruno', 'magalhães')
const p2 = {
    nome:'bruno',
    sobrenome: 'magalhães'
}
console.log(typeof p1)
console.log(typeof p2)
*/
/*
function falaFrase(comeco) {
    function FalaResto(resto) {
        return comeco + ' ' + resto
    }
    return FalaResto
}

const fala = falaFrase('olá')
const resto = fala ('mundo!')

console.log(resto) */

function criaMultiplicador(multiplicador) {
        return  function (n){
          return n  * multiplicador
    }   
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

