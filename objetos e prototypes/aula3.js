//defineProperty -> geralmente pra uma chave
// definProperties -> para várias chaves

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave ou nao
        value: estoque, //valor 
        writable: false, //   pode alterar o valor ou nao  
        configurable: true // configurável
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true,
        },
        preço: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true,
        }
    })
}

const p1 = new Produto('camiseta', 20, 3)
console.log((p1))

for (let chave in p1) {
    console.log(chave)
}