import geraSenha from "./geradores";
const senhaGerada = document.querySelector('.senhaGerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos= document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerarSenha')

 

function gera() {
const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
)
return senha || 'SELECIONE AS OPÇÕES.';
}