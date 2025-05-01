const express = require("express");
const router = express.Router();

const Carts = require("../models/Cart");
const Products = require("../models/product");

router.post("/", async (req, res) => {
  // get property from request body
  const { productId, quantity } = req.body;

  // cart item
  const cart = await new Carts({
    productId: productId,
    quantity: quantity,
  });
  // cart item save to database
  cart.save().then((result) => {
    res.status(200).send({
      message: "Cart item added successfully",
      cartItem: result,
    });
  });
});

// update the cart quentity 
router.put("/", (req, res) => {
    const { productId, quantity } = req.body;
    // find and update true
    Carts.findOneAndUpdate(
        { productId: productId },
        { quantity: quantity },
        { new: true })

        .then((result) => {
        res.status(200).send({
            message: "Cart item updated successfully",
            cartItem: result,
        });
        })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating cart item",
            error: err,
        });
        });
})

// delete the cart item using productId
router.delete("/:productId", async (req, res) => {
   try {
    const productId  = req.params.productId;
    const deletedProduct = await Carts.findOneAndDelete({ productId : productId })

    if(!deletedProduct) {
        return res.status(404).send({message : "Product not found"})
    }

    res.status(200).send({
        message : "Product deleted successfully",
        deletedProduct : deletedProduct
    })
   }
   catch (error) {
    res.status(500).send({
        message : "Error occure in deleting produc",
        error : error,
    })
   }
   
})


module.exports = router;
