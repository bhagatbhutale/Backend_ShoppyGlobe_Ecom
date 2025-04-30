const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },

    price : {
        type : Number,
        required : true,
        trim : true
    },

    description : {
        type : String,
        minLength : 5,
    },
    stock : {
        type : Number,
        default: 0,
    }
})

module.exports = mongoose.model("Product", productSchema);

