
// .env file access here 
require("dotenv").config();

const express = require("express");
// jsonwebtoken imported
const jwt = require("jsonwebtoken");
// userSchema imported
const User = require("../models/user");
// router imported
const router = express.Router();
// this is secret key for jwt token
const SECRET_KEY = process.env.SECRET_KEY;


// Login user
router.post("/", async (req, res) => {
  const { username } = req.body;
  try {
    // login username is check in database present or not 
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send({ message: "User not found" });

    // send the jwt secret key
    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).send({ token, message: "Login successful" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Login error occure ", error: err.message });
  }
});

module.exports = router;
