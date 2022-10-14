const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homecontroller');
const contatoController = require('./controllers/contatoController')
//ROTAS DA HOME
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial )


module.exports = route;