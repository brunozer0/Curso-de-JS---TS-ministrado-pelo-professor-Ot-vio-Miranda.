import geraCPF from './modules/geraCPF';
import './assets/css/style.css';

(function(){
const gera = new geraCPF()
const resultado = document.querySelector('.resultado')
resultado.innerHTML = gera.geraNovoCpf();
})()
