function getLivros(req, res) {
    try {
        res.send("Você fez uma requisição do tipo GET")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivros(req, res) {
    try {
    res.send("Você fez uma requisição do tipo POST")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
} 

module.exports = {
    getLivros,
    postLivros
}