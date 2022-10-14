const express = require('express');
const app = express();

// ISSO AQUI ABAIXO TRATA O BODY DAS REQUISIÇÕES    
app.use(express.urlencoded({extended: true})) 


app.get('/', (req, res) => {
    res.send(`
    <form action= "/" method= "POST">
    Nome: <input type="text" name= "qualquercoisa">
    <button>Enviar form</button>
    </form>
    `)
})  
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // quando falamos sobre params ou parametros, estamos falando das partes que vem na rota da URL. por ex: Profiles/123, etc
    //JÁ O req.query, vem na querystring, por exemplo: profiles/?chave1=valor1&chave2=valor2&chave3=valor3  
    // e por ultimo, req.body, que vem no proprio corpo da requisição
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})  
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você me enviou foi: ${req.body.qualquercoisa}`)
})
app.get('/contato', (req, res) => {
    res.send('obrigado pelo contato')
})
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
console.log('servidor executando na porta 3000')
})