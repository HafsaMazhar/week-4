const cors = require("cors"); 
console.log("Starting server...");
const connectDB = require("./config/db");
const express = require("express");

const app = express();
const PORT = 3000;
(async () => {
    await connectDB();
})();
app.use(express.json());
app.use(cors());

// Import Routes
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const checkoutRoutes = require("./routes/checkout");

// Home Route
app.get("/", (req, res) => {
    res.send("ModestPearls Backend API is Running!");
});

// Product Route
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
