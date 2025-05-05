// require a .eng file 
require("dotenv").config();
// mongoose require
const mongoose = require("mongoose");

// mongoDB connection 
const mongoDB = async () => {
    try {
        // mongoDB URL get in .env file
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected ...")
    }
    catch (error) {
        console.log("MongoDB Not Connected ! , Error : " , error)
    }
}

module.exports = mongoDB;