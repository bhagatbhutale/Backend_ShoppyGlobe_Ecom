
# 🛒 ShoppyGlobe E-commerce API

This project implements the backend for the **ShoppyGlobe** E-commerce application using **Node.js**, **Express.js**, and **MongoDB**.

## 📌 Objective

Build RESTful APIs to handle product listings, cart management, and user authentication for the ShoppyGlobe platform.

---

## 📁 Project Structure

- `models/` - Mongoose schemas for User, Product, Cart
- `routes/` - Express routes for products, cart
- `controllers/` - Logic for each route handler (optional)
- `auth/` - JWT verification middleware and register and login path
- `config/` - MongoDB connection setup

---

## ✅ Features

### 1. Node.js & Express API Setup 
- `GET /products` – Fetch all products
- `GET /products/:id` – Get product by ID
- `POST /cart` – Add product to cart
- `PUT /cart/:id` – Update quantity of a cart item
- `DELETE /cart/:id` – Delete product from cart

### 2. MongoDB Integration 
- MongoDB used via Mongoose for:
  - `Products`: name, price, description, stock quantity
  - `Cart`: productId, quantity
- CRUD operations implemented

### 3. Error Handling & Validation 
- Try/catch for all routes
- Validates product existence before cart operations

### 4. Authentication & Authorization
- `POST /register` – Register user (username only)
- `POST /login` – Login user and return JWT token
- Protected `/cart` routes using JWT middleware

### 5. Testing with ThunderClient 
- All APIs tested with ThunderClient
- Screenshots added in `screenshots/` folder (if available)

---

## 🔐 Authentication

All cart routes are protected by JWT:
- Add `Authorization: JWt <token>` header to access them

---

## 💻 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for auth
- ThunderClient for testing

---

## 🚀 Getting Started

npm install
nodemon index.js
