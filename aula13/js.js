const nome = prompt('digite teu nome completo:')

document.body.innerHTML += `o seu nome é ${nome} <br>`
document.body.innerHTML += `o seu nome tem ${nome.length}letras <br>`
document.body.innerHTML += `a segunda letra do seu nome é ${nome[1]} <br>`
document.body.innerHTML += `qual o primeiro índice da letra do seu nome ${nome.indexOf('a')} <br>`
document.body.innerHTML += `qual o último indice da letra do seu nome ${nome.lastIndexOf('a')} <br>`
document.body.innerHTML += `as ultimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br>`
document.body.innerHTML += `as palavras do seu nome são: ${nome.split(' ')} <br>`
document.body.innerHTML += `o seu nome com letras maiúsculas ${nome.toUpperCase()} <br>`
document.body.innerHTML += `o seu nome with letras minúsculas ${nome.toLowerCase()} <br>`