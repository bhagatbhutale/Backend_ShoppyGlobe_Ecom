const express = require("express");
const router = express.Router();

const Carts = require("../models/Cart");
const Products = require("../models/product");

// get all cart item 
router.get("/", async (req, res) => {
  try {
    const cartItems = await Carts.find();
    res.status(200).send({
      message : "All cart item",
      cartItems : cartItems,
    })
  }
  catch (error) {
    res.status(500).send({
      message : "Eror occure in get cart items",
      error : error.message,
    })
  }
})

router.post("/", async (req, res) => {
  try {
    // get property from request body
  const { productId, quantity } = req.body;

  // check product available or Not
  const productAvailable = await Products.findById(productId);
  if(!productAvailable) {
    return res.status(404).send({
        message : "Product Not Found",
    }) 
  }

  // create cart item
  const cart = new Carts({
    productId: productId,
    quantity: quantity,
  })

  // save cart item in databasse
  const cartItem = await cart.save();
  res.status(201).send({
    message : "Cart item added successfullyy",
    cartItem : cartItem,
  })
  }
  catch (error) {
    res.status(500).send({
        message : "Error occure adding cart item",
        error : error.message,
    })
  }

  // cart item
  
});

// update the cart quentity 
router.put("/", async (req, res) => {
  const { productId, quantity } = req.body;

  
  if (!productId || quantity == null) {
    return res.status(400).send({
      message: "Productid and quentity are required",
    });
  }

  try {
    const updatedCart = await Carts.findOneAndUpdate(
      { productId: productId },
      { quantity: quantity },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).send({
        message: "Product id Not found",
      });
    }

    res.status(200).send({
      message: "Cart item updated successfully",
      cartItem: updatedCart,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error occure in  cart item",
      error: err.message,
    });
  }
});


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
