function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) +min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
 
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('bad value') 
                return
            }
            resolve(msg.toUpperCase()    + '-passei na promise')
        }, tempo)
    })
}

function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('pagina em cache')
    } else {
        return esperaAi('baixei a pagina', 3000)
    }
}

baixaPagina()
 .then(dadosPagina => {
    console.log(dadosPagina)
 })
 .catch(e => {
    console.log('errrro', e)
 })







//promise.all, promise.race, promise.resolve, promise.reject

/*
const promises = [
    esperaAi('promise 1', rand(1, 5) ),
    esperaAi('promise 2', rand(1, 5)),
    esperaAi('promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5))
]
    //PROMISSE ALL tenta resolver todas as promisses, se alguma der errado, todas são rejeitadas

    // PROMISSE RACE RESOLVER UMA POR UMA E ENTREGA A PRIMEIRA Q RESOLVER, SE A PRIMEIRA Q RESOLVER REJEITAR ELE ENTREGA O ERRO, DO CONTRARIO ENTREGA O VALOR

Promise.race(promises)
.then((valor) =>{
    console.log(valor)
})
.catch((erro) => {
    console.log(erro)
})

*/