const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.send("Olá, Mundo da Alura do Brasil!")
} ) 

module.exports = router