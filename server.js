const express = require("express")
const mongoose = require("mongoose")

const orderRoutes = require("./routes/orderRoutes")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/orders")

app.get("/", (req, res) => {
    res.send("API funcionando")
})

app.use("/orders", orderRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})