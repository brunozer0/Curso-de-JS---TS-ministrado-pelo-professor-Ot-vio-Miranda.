/*const nome = 'bruno'
const sobrenome = 'costa'

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
*/

class Pessoa {
    constructor(nome) {
        this.nome= nome;
    }
}

const nome = 'bruno'
const sobrenome = 'costa'

exports.nome = nome;
module.exports.sobrenome = sobrenome;

exports.outraCoisa = 'outracoiso'
