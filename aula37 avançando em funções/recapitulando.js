//Recapitulando até aqui 

// Maneiras de declaração

// ->>  declaração
function falaOi() {
    console.log('olá')
}
// First-class objects (objetos de primeira classe)

//function expression
const souUmdado = function () {
 console.log('sou um dado')
}

souUmdado()

// ARROW FUNCTION

const arrow = () => {
    console.log('fuck')
}

arrow()

// DENTRO DE UM OBJETO 

const objeto = {
    falar() {
        console.log('ggwp')
    }
}
objeto.falar()