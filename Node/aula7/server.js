const express = require('express');
const app = express();

//            criar ler atualizar apagar
// -> CRUD = CREATE, READ, UPDATE, DELETE    
//         =  POST ,  GET , PUT , DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action= "/" method= "POST">
    Nome: <input type="text" name= "nome">
    <button>Enviar form</button>
    </form>
    `)
})
app.post('/', (req, res) => {
    res.send('formulário recebido')
})
app.get('/contato', (req, res) => {
    res.send('obrigado pelo contato')
})
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
console.log('servidor executando na porta 3000')
})