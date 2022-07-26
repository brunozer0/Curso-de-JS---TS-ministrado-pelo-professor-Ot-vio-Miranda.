function global() {
    function getTimeForSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    console.log(getTimeForSeconds(10))
    const relogio = document.querySelector('.relogio')
    let seconds = 0;
    let timer 
    
    function StartTime() {
    timer = setInterval(function(){
    seconds++
    relogio.innerHTML = getTimeForSeconds(seconds)
    }, 1000)
    }
    document.addEventListener('click', (e) => {
        const el = e.target
        if(el.classList.contains('zerar')) {
                clearInterval(timer)
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado')
        seconds = 0 
        }
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            StartTime()
    }
        if(el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
    })
    
}
global() 