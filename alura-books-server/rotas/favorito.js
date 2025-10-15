const { Router } = require("express")
const { getFavoritos, postFavorito, deleteFavorito } = require("../controladores/favorito")

const router = Router()

router.get("/", getFavoritos)

router.post("/", postFavorito)

router.delete("/", deleteFavorito)

module.exports = router