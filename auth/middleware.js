
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

// middleware for verify jwt token

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = verifyToken;
