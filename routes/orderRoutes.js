const express = require("express")
const router = express.Router()
const Order = require("../models/Orders")

// Criar pedido
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body)
        await order.save()
        res.json(order)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Listar pedidos
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Buscar pedido por ID
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json(order)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Atualizar pedido
router.put("/:id", async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(order)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Deletar pedido
router.delete("/:id", async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.json({ message: "Pedido deletado" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router