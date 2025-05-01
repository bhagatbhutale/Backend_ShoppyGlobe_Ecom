const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        require : true,
    },
    quantity : {
        type : Number,
        default: 0,
    }
})

module.exports = mongoose.model("Cart", cartSchema);