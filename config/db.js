const mongoose = require("mongoose");

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/')
        console.log("MongoDB Connected ...")
    }
    catch (error) {
        console.log("MongoDB Not Connected ! , Error : " , error)
    }
}

module.exports = mongoDB;