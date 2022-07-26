function rand(min= 0, max= 3) {
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
/*
esperaAi('fase 1', rand())
.then(valor => {
    console.log(valor)
    return esperaAi('fase 2', rand())
})
.then(fase => {
    console.log(fase)
    return esperaAi('fase 3', rand())
})
.then(fase => {
    console.log(fase)
    return fase
})
.then(fase => {
    console.log('fim do programa', fase)
})
.catch(e => {
    console.log(e=> console.log(e))
})
*/
async function executa() {
    try {
        const fase1 =  esperaAi('fase 1', 1000)
        console.log(fase1)
        setTimeout(() => {
            console.log('essa promise estava pendente',fase1)
        }, 1100)
        const fase2 = await esperaAi('fase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAi('fase3', rand())
        console.log(fase3)
        console.log('fim do programa', fase3)
    } catch(e) {
        console.log(e)
    }
 //POSSUI 3 ESTADOS = pending, fullfiled, reject
}


//executa()
const teste2 = esperaAi('qqlr', 5000)

console.log(teste2)