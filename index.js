require("dotenv").config();

const express = require("express");
// mongoDb connection require
const mongoDB = require("./config/db");

// routes require product and cart
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const registerRoute = require("./auth/register");
const loginRoute = require("./auth/login");

// auth middleware require
const verifyToken = require("./auth/middleware");

const app = express();
//  getting a .env in file 
const port = process.env.PORT || 7001;

app.use(express.json());
// call to MongoDb connection function.
mongoDB();

// routes for product and cart
app.use("/products", productRoutes);
app.use("/cart", verifyToken, cartRoutes);

// app.use("/register", authRoutes);
app.use("/register", registerRoute);
app.use("/login", loginRoute);

// home route
app.use("/", (req, res) => {
  res.send("Welcom to ShoppyGlobe backend..");
});

app.listen(port, (req, res) => {
  console.log("Server is Listening on Port 7001...");
});
