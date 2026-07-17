const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");


// GET Cart Items
router.get("/", async (req, res) => {
    try {
        const cart = await Cart.find();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST Add Item to Cart
router.post("/", async (req, res) => {

    try {

        const cartItem = new Cart({
            productId: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity || 1
        });

        await cartItem.save();

        res.status(201).json(cartItem);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});

module.exports = router;