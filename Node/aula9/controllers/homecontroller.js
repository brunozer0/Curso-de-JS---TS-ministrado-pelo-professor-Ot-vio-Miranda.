exports.paginaInicial = (req, res) => {
    res.send(`
    <form action= "/" method= "POST">
    Nome: <input type="text" name= "qualquercoisa">
    <button>Enviar form</button>
    </form>
    `)
}
exports.trataPost = (req, res) => {
    res.send('sou sua nova rota de post')
}