function ZeroAEsquerda (num) {
    return num >=10 ? num : `0 ${num}`
}

function FormatDate(data) {
    const dia =  ZeroAEsquerda(data.getDate())
    const mes = ZeroAEsquerda(data.getMonth()+1)
    const ano = ZeroAEsquerda(data.getFullYear())
    const hora = ZeroAEsquerda(data.getHours())
    const min  = ZeroAEsquerda(data.getMinutes())
    const seg  = ZeroAEsquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const date = new Date()
const dataBrasil = FormatDate(date)
console.log(dataBrasil)