// exemplo do final da aula

function teste() { // O THIS APONTA PARA OBJETO GLOBAL NESSE CASO
    console.log(this)
}




// MÉTODOS DE INSTÂNCIA E ESTÁTICOS
class ControleRemoto {
    constructor(tv) {
        this.tv = tv 
        this.volume = 0
        teste()
    }
    //método de instancia, tem acesso aos dados da instancia
    aumentarVolume(){
        this.volume += 2 
    }
    diminuirVolume() {
        this.volume -= 2
    }
    // metodo Estático   
   static soma(x, y) {  //basicamente e simplificadamente, o método statico é uma funcao q está dentro de classe por questao organizacional. ELE NAO POSSUI ACESSO AOS DADOS DA INSTANCIA 
    console.log(this)
    }
}
const controle = new ControleRemoto('LG') 

ControleRemoto.soma()


