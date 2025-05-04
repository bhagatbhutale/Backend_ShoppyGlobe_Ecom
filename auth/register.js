const express = require("express");
// jsonwebtoken imported
const jwt = require("jsonwebtoken");
// userSchema imported
const User = require("../models/user")
// router imported
const router = express.Router();
// this is secret key for jwt token
const SECRET_KEY = "BhagatBhutale";

// Register a user
router.post("/", async (req, res) => {
  const { username } = req.body;
  try {
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).send({ message: "Username already exists" });

    const user = new User({ username });
    await user.save();

    res.status(201).send({ message: "User register successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error occure in registering", error: err.message });
  }
});

module.exports = router;