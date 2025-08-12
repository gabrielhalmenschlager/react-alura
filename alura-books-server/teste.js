const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id: "9", nome: "A saga do Node.js" }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")))