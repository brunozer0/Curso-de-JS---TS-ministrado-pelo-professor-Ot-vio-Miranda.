// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function(idade, peso, altura) {
    const sobrenome = 'costa'
    function CriaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(CriaNome('bruno'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80);

