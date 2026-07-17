const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },

    customerEmail: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    items: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    orderDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Order", orderSchema);