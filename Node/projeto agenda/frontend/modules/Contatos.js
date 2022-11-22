import validator from "validator";
export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }
    init() {
        this.events()
    }
    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e=>{
            e.preventDefault()
            this.validate(e)
        })
    }
    validate(e){
        const el= e.target
        const emailInput = el.querySelector('input[name="email"]')
        const nomeInput = el.querySelector('input[name="nome"]')
        let error = false;
        if(!validator.isEmail(emailInput.value)){
            alert('email invalido')
            error= true
        }
        if(nomeInput.value.length <=0){
            alert('o campo nome precisa ser preenchido')
            error= true
        }
        if(!error) el.submit()
        
    }
}