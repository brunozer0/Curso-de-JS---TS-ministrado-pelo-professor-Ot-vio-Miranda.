/*const h1 = document.querySelector('.container h1')
const data = new Date

function DiaDaSemanaTexto(diaSemana) {
    let DiaDaSemanaTexto;

    switch(diaSemana) {
    case 0:
        DiaDaSemanaTexto = 'Domingo'
            return DiaDaSemanaTexto
    case 1:
        DiaDaSemanaTexto = 'segunda-feira'
            return DiaDaSemanaTexto
    case 2:
        DiaDaSemanaTexto = 'terça-feira'
            return DiaDaSemanaTexto
    case 3:
        DiaDaSemanaTexto = 'quarta-feira'
            return DiaDaSemanaTexto
    case 4:
        DiaDaSemanaTexto = 'quinta-feira'
            return DiaDaSemanaTexto
    case 5:
        DiaDaSemanaTexto = 'sexta-feira'
            return DiaDaSemanaTexto
    case 6:
        DiaDaSemanaTexto = 'Sábado'
            return DiaDaSemanaTexto
        
            default:
                DiaDaSemanaTexto = ''
                return DiaDaSemanaTexto
    }
} 

    function getNomeMes(numeroMes) {
        let nomeMes;
    
        switch(numeroMes) {
        case 0:
            nomeMes = 'Janeiro'
                return nomeMes
        case 1:
            nomeMes = 'Fevereiro'
                return nomeMes
        case 2:
            nomeMes = 'Março'
                return nomeMes
        case 3:
            nomeMes = 'Abril'
                return nomeMes
        case 4:
            nomeMes = 'Maio'
                return nomeMes
        case 5:
            nomeMes = 'Junho'
                return nomeMes
        case 6:
            nomeMes = 'Julho'
                return nomeMes
        case 7:
            nomeMes = 'Agosto'
                return nomeMes
        case 8:
            nomeMes = 'Setembro'
                return nomeMes
        case 9:
            nomeMes = 'Outubro'
                return nomeMes
        case 10:
            nomeMes = 'Novembro'
                return nomeMes
        case 11:
            nomeMes = 'Dezembro'
                return nomeMes 
    } 
}
function ZeroAEsquerda (num) {
    return num >=10 ? num : `0 ${num}`
}
    function criaDate(data) {
        const diaSemana = data.getDay()
        const numeroMes =  data.getMonth()

        const nomeDia = DiaDaSemanaTexto(diaSemana)
        const nomeMes = getNomeMes(numeroMes)
    
    
        return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)
}

h1.innerHTML = criaDate(data)
*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});