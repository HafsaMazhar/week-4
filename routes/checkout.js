const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");
const Order = require("../models/Order");

// POST Checkout
router.post("/", async (req, res) => {

    try {

        const cartItems = await Cart.find();

        if (cartItems.length === 0) {

            return res.status(400).json({
                message: "Your cart is empty."
            });

        }

        let total = 0;

        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });

      const order = new Order({

    customerName: req.body.customerName,

    customerEmail: req.body.customerEmail,

    phone: req.body.phone,

    address: req.body.address,

    items: cartItems,

    totalAmount: total

});

        await order.save();

        // Clear Cart
        await Cart.deleteMany({});

        res.status(201).json({
            message: "Order placed successfully!",
            order: order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;