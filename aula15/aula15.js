let num = Number( prompt('digite um número:') )
let formula = num ** 0.5
document.body.innerHTML = ''
document.body.innerHTML += (`seu número é ${num}<br>` )
document.body.innerHTML += (`É NaN: ${Number.isNaN(num)}<br>`)
document.body.innerHTML += (`a raiz quadrada de ${num} é ${formula}<br>`)
document.body.innerHTML += (`${num} é inteiro: ${Number.isInteger(num)}<br>`)
document.body.innerHTML += (`arredondando para baixo: ${Math.floor(num)}<br>`)
document.body.innerHTML += (`arredondando para cima: ${Math.ceil(num)}<br>`)
document.body.innerHTML += (`com duas casas decimais: ${num.toFixed(2)}<br>`)



