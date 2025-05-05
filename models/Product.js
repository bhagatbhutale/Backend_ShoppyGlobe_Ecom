const mongoose = require("mongoose");

// product Schema for Products Item
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minLength : 3,
        maxLength : 50,
    },

    price : {
        type : Number,
        required : true,
        trim : true,
        default : 1,
    },

    description : {
        type : String,
        minLength : 5,
        maxLength : 100,
    },
    stockQuantity : {
        type : Number,
        default: 0,
        min : 0,
    }
})

module.exports = mongoose.model("Product", productSchema);

