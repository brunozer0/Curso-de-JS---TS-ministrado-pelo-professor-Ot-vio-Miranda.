// GETTERS E SETTERRS NA CONSTRUTORA

function Produto(nome, preco, estoque) {
 this.name = nome 
 this.preco = preco;
  let EstoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave ou nao
        //value: estoque, //valor 
        //writable: false, //   pode alterar o valor ou nao  
        configurable: true, // configurável
        get: function() {
            return EstoquePrivado
        },
        set: function (valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('erro')
            }
            EstoquePrivado = valor
        } 
    })
  
 }  
  function criaProduto(nome) {
    return {
        get nome() {
        return nome;
    },
    set nome(valor) {
        valor= valor.replace('merda', 'bosta')
        nome = valor;
    }
}
  }
 //const p1 = new Produto('camiseta', 20 , 3)
 //p1.estoque = '500'
 //console.log(p1.estoque)
 const p2 = criaProduto('camiseta')
 p2.nome = 'merda'
console.log(p2.nome)