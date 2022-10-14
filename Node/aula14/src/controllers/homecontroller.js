const homeModel = require('../models/homeModel')

// homeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log('erro'))


exports.paginaInicial = (req, res) => {
    res.render('index');
    return
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}