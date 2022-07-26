//produto -> aumento, desconto
// Camiseta = cor, Caneca= material, 

function Produto(nome,  preco) {
    this.nome= nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
   
    Object.defineProperty(this, 'estoque',{
        Enumerator: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype= Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('gen', 111)
const camiseta = new Camiseta('regata', 7.5, 'preta')
const caneca = new Caneca ('Caneca', 13, 'plástico', 5)
caneca.estoque = 100

console.log(caneca.estoque)
console.log(caneca)
console.log(camiseta)
console.log(produto)
