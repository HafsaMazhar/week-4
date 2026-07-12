const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Import Routes
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const checkoutRoutes = require("./routes/checkout");
console.log(productRoutes);
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
