//função que retorna uma função que retorna um nome
// colosure é representa uma habilidade que uma função tem em acessar o seu escopo léxico.
function retornafuncao(nome) {
    return  () => {
        return nome
    }
}

const funcao = retornafuncao('bruna')
const funcao2 = retornafuncao('breno')
console.log(funcao())
console.log(funcao2())