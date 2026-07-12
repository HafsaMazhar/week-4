const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const cartFile = path.join(__dirname, "../data/cart.json");

// GET Cart
router.get("/", (req, res) => {

    const cart = JSON.parse(fs.readFileSync(cartFile));

    res.json(cart);

});

// POST Add to Cart
router.post("/", (req, res) => {

    const { name, price, quantity } = req.body;

    // Validation
    if (!name || !price || !quantity) {

        return res.status(400).json({
            message: "Please provide name, price and quantity."
        });

    }

    const cart = JSON.parse(fs.readFileSync(cartFile));

    cart.push({
        name,
        price,
        quantity
    });

    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));

    res.status(201).json({
        message: "Product added to cart successfully!"
    });

});
// DELETE Item from Cart
router.delete("/:index", (req, res) => {

    const index = Number(req.params.index);

    const cart = JSON.parse(fs.readFileSync(cartFile));

    if (index < 0 || index >= cart.length) {
        return res.status(404).json({
            message: "Item not found."
        });
    }

    cart.splice(index, 1);

    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));

    res.json({
        message: "Item removed successfully!"
    });

});
module.exports = router;