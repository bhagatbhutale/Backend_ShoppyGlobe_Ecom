const express = require("express");

// router
const router = express.Router();
// products model
const Products = require("../models/product");

// dummy products inserted first time. ----------------------
// const dummyProducts = [
//   {
//     name: "Apple iPhone 13",
//     price: 699,
//     description: "Smartphone with A15 Bionic chip",
//     stockQuantity: 15,
//   },
//   {
//     name: "Samsung Galaxy S21",
//     price: 649,
//     description: "Android phone with AMOLED display",
//     stockQuantity: 20,
//   },
//   {
//     name: "Sony WH-1000XM4",
//     price: 299,
//     description: "Noise cancelling headphones",
//     stockQuantity: 35,
//   },
//   {
//     name: "Dell XPS 13",
//     price: 999,
//     description: "Compact ultrabook with Intel i7",
//     stockQuantity: 10,
//   },
//   {
//     name: "Apple MacBook Air",
//     price: 1099,
//     description: "Laptop with M2 chip",
//     stockQuantity: 8,
//   },
//   {
//     name: "Logitech MX Master 3",
//     price: 99,
//     description: "Wireless productivity mouse",
//     stockQuantity: 50,
//   },
//   {
//     name: "Amazon Echo Dot",
//     price: 49,
//     description: "Smart speaker with Alexa",
//     stockQuantity: 60,
//   },
//   {
//     name: "Google Nest Hub",
//     price: 89,
//     description: "Smart display for home",
//     stockQuantity: 30,
//   },
//   {
//     name: "Canon EOS M50",
//     price: 579,
//     description: "Mirrorless camera for content creators",
//     stockQuantity: 12,
//   },
//   {
//     name: "ASUS ROG Strix",
//     price: 1299,
//     description: "Gaming laptop with RTX 3060",
//     stockQuantity: 5,
//   },
//   {
//     name: "Philips Air Fryer",
//     price: 199,
//     description: "Healthy cooking with little oil",
//     stockQuantity: 25,
//   },
//   {
//     name: "HP Envy 13",
//     price: 849,
//     description: "Laptop with touch display",
//     stockQuantity: 18,
//   },
//   {
//     name: "Microsoft Surface Pro 7",
//     price: 749,
//     description: "Tablet-laptop hybrid",
//     stockQuantity: 22,
//   },
//   {
//     name: "JBL Flip 5",
//     price: 119,
//     description: "Waterproof Bluetooth speaker",
//     stockQuantity: 40,
//   },
//   {
//     name: "Realme Narzo 50",
//     price: 159,
//     description: "Budget smartphone with 120Hz display",
//     stockQuantity: 30,
//   },
//   {
//     name: "Boat Airdopes 441",
//     price: 49,
//     description: "TWS earbuds with deep bass",
//     stockQuantity: 70,
//   },
//   {
//     name: "Lenovo IdeaPad Slim 3",
//     price: 499,
//     description: "Affordable laptop for students",
//     stockQuantity: 25,
//   },
//   {
//     name: "Sony Bravia 43-inch TV",
//     price: 499,
//     description: "Smart TV with 4K resolution",
//     stockQuantity: 9,
//   },
//   {
//     name: "Zebronics ZEB-Transformer",
//     price: 39,
//     description: "Gaming keyboard and mouse combo",
//     stockQuantity: 45,
//   },
//   {
//     name: "OnePlus Nord CE 3",
//     price: 329,
//     description: "Mid-range Android phone",
//     stockQuantity: 28,
//   },
//   {
//     name: "Whirlpool Refrigerator",
//     price: 899,
//     description: "Double-door frost-free fridge",
//     stockQuantity: 6,
//   },
//   {
//     name: "Prestige Induction Cooktop",
//     price: 59,
//     description: "Electric stove for modern kitchens",
//     stockQuantity: 33,
//   },
//   {
//     name: "Puma Running Shoes",
//     price: 69,
//     description: "Comfortable running shoes",
//     stockQuantity: 44,
//   },
//   {
//     name: "Noise ColorFit Pro 3",
//     price: 79,
//     description: "Smartwatch with SpO2 monitor",
//     stockQuantity: 27,
//   },
//   {
//     name: "Samsung Galaxy Tab A8",
//     price: 229,
//     description: "Tablet for reading and browsing",
//     stockQuantity: 17,
//   },
//   {
//     name: "TCL Washing Machine",
//     price: 459,
//     description: "7kg fully automatic washer",
//     stockQuantity: 10,
//   },
//   {
//     name: "Havells Ceiling Fan",
//     price: 39,
//     description: "Energy-efficient ceiling fan",
//     stockQuantity: 52,
//   },
//   {
//     name: "Mi Smart LED Bulb",
//     price: 19,
//     description: "Wi-Fi bulb with app control",
//     stockQuantity: 100,
//   },
//   {
//     name: "Oppo A57",
//     price: 199,
//     description: "Smartphone with dual cameras",
//     stockQuantity: 24,
//   },
//   {
//     name: "Lava Blaze 5G",
//     price: 189,
//     description: "Budget 5G smartphone",
//     stockQuantity: 19,
//   },
// ];
// function pushDummy() {
//    try {
//      Products.insertMany(dummyProducts)
//      console.log("dummy data inserted successfully")
//    } catch (error) {
//     console.log("Error inserting data : ", error)
//    }
// }
// ----------------------------------------------------------

// get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Products.find();
    res
      .status(200)
      .send({
        message: "All Products fetched successfully",
        allProducts: allProducts,
      });
  } catch (error) {
    res
      .status(500)
      .send({ 
        message: "Error fetching products", 
        error: error.message });
  }
});

module.exports = router;
