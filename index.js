const express = require("express");
const app = express();
const port = 7001;

// mongoDb connection require 
const mongoDB = require("./config/db")
// call to MongoDb connection function.
mongoDB();

app.listen(port, (req, res) => {
    console.log("Server is Listening on Port 7001...")
})