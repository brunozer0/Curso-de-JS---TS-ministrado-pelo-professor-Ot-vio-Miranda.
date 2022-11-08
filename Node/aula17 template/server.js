require('dotenv').config() // dot env, é relacionado as nossas variáveis de ambiente, que estao configuradas no arquivo .env, o qual tem senhas, usuários e afins, que voce quer ocultar//

const express = require('express');
const app = express();
const mongoose= require('mongoose');// O mongoose modela a base de dados, garantindo que os dados estejam salvos da forma q queremos, ex: caso eu tenha uma tabela de 'contatos' na base de dados, posso ter o schema que fala como os dados devem ser savos.

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => { // o mongoose retorna uma promise
    console.log('conectado à base de dados')
    app.emit('pronto')
})
.catch(e => console.log(e))

const session = require('express-session'); //identifica o navegador do cliente, salvando o cookie com o ID, e toda vez q o cliente logar no servidor, ele vai enviar os dados para a pessoa.
const MongoStore= require('connect-mongo'); //moongostore é usado para falar que as sessões serao salvas dentro da base de dados, porque por padrao ela sao salvas em memoria, se usarmos memoria em um servidor de producao, ficamos sem memoria rapidamente 

const flash = require('connect-flash'); //mensagens autodestrutivas, geralmente usado para mensagens de erros, feedback, enfim

const routes = require('./routes')//sao as rotas da barra da nossa aplicação, /home, /contato, enfim

const path = require('path')// usado para trabalhar com os caminhos da aplicação

const helmet = require('helmet')// recomendação do proprio express, para deixar a aplicação mais segura.

const csrf= require('csurf') //sao csrfs tokens criados para os nossos formularios, impedindo site externos de postar coisas para dentro da nossa aplicação. 

const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); //MIDDLEWARE sao funções que são executadas na rota, antes de responder o cliente, ou depois de responder o cliente, e voce cria funções para isso


app.use(helmet())
app.use(express.urlencoded({extended: true})) // possibilita postar formularios para nossa aplicação

app.use(express.json()); // podemos tambem fazer o parse de json para a aplicação


app.use(express.static(path.resolve(__dirname, 'public'))) // arquivos estáticos, são todos os arquivos que sao estaticos na nossa aplicação, e que podem ser acessados diretamente, ex, imagens, css, javascript

const sessionOptions = session({
    secret: 'texto q ninguem vai saber',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 *60*60*24*7, //tempo q vai durar o cookie (7dias)
        httpOnly:true
    }
    
})
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views')) //arquivos que renderizamos na tela, geralmente HTML 

app.set('view engine', 'ejs') //aqui é a engine que estamos utilizando para renderizar o nosso html, no caso, o EJS

app.use(csrf())

// nossos proprios middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)

app.on('pronto', ()=> { //ouvindo as requisições
    
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})