function retornaHora(data) {
    if (data &&! (data instanceof Date)) {
        throw new TypeError (`esperando instancia de date`)
    }
    if (!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-br', {

    })
}
try {
const data = new Date (`01-01-1999 12:58:12`)
const hora = retornaHora()
console.log(hora)
} catch(e) {
 console.log(`deu erro`)
} finally {
    console.log(`bom dia `)
}
