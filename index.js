const express = require("express");
// mongoDb connection require 
const mongoDB = require("./config/db")
const app = express();
const port = 7001;

app.use(express.json());
// call to MongoDb connection function.
mongoDB();

app.listen(port, (req, res) => {
    console.log("Server is Listening on Port 7001...")
})