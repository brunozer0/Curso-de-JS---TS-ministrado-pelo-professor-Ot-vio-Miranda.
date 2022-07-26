/*
->object.values (exibe os valores)

->object.entries (retorna chave e os valores em arrays)

-> object.getOwnPropertyDescriptor(o, 'prop' retorna descricao 
writable, cofigurable etcc..)

object.assing  (des, any) -> copia um objeto de destino, e joga varios outros objetos apos, se os objetos tem as chaves iguais, o ultimo será oq tem o valor correto 

... (spreed) -> espalha os valores do objeto

// ja vimos 
object.keys (retorna as chaves)
object.freezy (congela o objeto)
object.defineProperties (define varias propriedades)
object.defineProperty (define uma propriedade)
*/

// ASSIGN
//const produto = {nome:'produto', preco: 1.8}
 // const caneca= Object.assign({}, produto, {material:   'porcelana'})
//caneca.nome = 'outro nome'
//caneca.preco = 2.5

//console.log(produto)
//console.log(caneca)
/*
const produto = {nome:'produto', preco: 1.8}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer merda'
})
console.log(Object.getOwnPropertyDescriptors(produto, 'nome'))
console.log(produto)
*/
const produto = {nome:'produto', preco: 1.8}

for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
}