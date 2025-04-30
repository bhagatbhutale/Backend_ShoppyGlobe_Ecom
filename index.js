const express = require("express");
const app = express();

// mongoDb connection require 
const mongoDB = require("./config/db")

// call to MongoDb connection function.
mongoDB();

app.listen(7001, (req, res) => {
    console.log("Server is Listening on Port 7001...")
})