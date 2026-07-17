const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect("mongodb://127.0.0.1:27017/ModestPearlsDB");

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.log("❌ Connection Failed");
        console.error(error);
    }
};

module.exports = connectDB;