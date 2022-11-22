const elementos = [
    {tag: 'p', texto: 'qualquer texto fodase'},
    {tag: 'div', texto: 'abubublé bubublé bublé'},
    {tag: 'section', texto: 'to de boas'},
    {tag: 'footer', texto: 'desisto fodase'}
]
const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i<elementos.length; i++) {
    let {tag, texto} = elementos [i]
    let tagCriada = document.createElement(tag)
    //tagCriada.innerText = texto ou ->>
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}
container.appendChild(div)
