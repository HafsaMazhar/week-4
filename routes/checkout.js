const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {

    const { name, email, phone, address } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !address) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    res.status(201).json({
        message: "Order placed successfully!",
        customer: {
            name,
            email,
            phone,
            address
        }
    });

});

module.exports = router;