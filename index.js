const express = require("express");
// mongoDb connection require 
const mongoDB = require("./config/db")

// routes require product and cart
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")

const app = express();
const port = 7001;

app.use(express.json());
// call to MongoDb connection function.
mongoDB();

// routes for product and cart 
app.use("/products", productRoutes );
app.use("/cart", cartRoutes);


// home route
app.use("/", (req, res) => {
    res.send("Welcom to ShoppyGlobe backend..")
})

app.listen(port, (req, res) => {
    console.log("Server is Listening on Port 7001...")
})