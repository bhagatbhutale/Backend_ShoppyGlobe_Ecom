
require("dotenv").config();

const mongoose = require("mongoose");



const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected ...")
    }
    catch (error) {
        console.log("MongoDB Not Connected ! , Error : " , error)
    }
}

module.exports = mongoDB;