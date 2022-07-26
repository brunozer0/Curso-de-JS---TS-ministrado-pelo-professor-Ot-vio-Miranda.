function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) +min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('bad value')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('frase 1' , rand(1,3))
.then(resposta => {
    console.log(resposta)
    return esperaAi('frase 2', rand(1,3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi(222, rand(1,3))
}).then(resposta =>{
    console.log(resposta)
}).then(()=> {
    console.log('fim do then')
})
.catch(e => {
    console.log('erro', e)
})

//esperaAi('frase1', rand(1,3), function() { //ISSO VIRA UMA ARVORE DE NATAL
//esperaAi('frase2', rand(1,3), function(){
//esperaAi('frase3', rand(1,3))
//})
//})

