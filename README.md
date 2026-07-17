# Week 4 – Frontend & Backend Integration

## Project Overview

This project demonstrates the integration of a frontend e-commerce website with a backend API using Express.js and MongoDB. The application allows users to add products to a shopping cart, manage cart items, and place orders, with all data stored in MongoDB.

---

## Features

- Frontend integrated with Express.js backend
- MongoDB database connection using Mongoose
- Display products dynamically
- Add products to cart
- View cart items
- Remove items from cart
- Update product quantity
- Checkout functionality
- Store customer orders in MongoDB
- Clear cart after successful checkout

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```
ModestPearls-Backend-API/
│
├── config/
│   └── db.js
│
├── models/
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── routes/
│   ├── products.js
│   ├── cart.js
│   └── checkout.js
│
├── server.js
├── package.json
└── README.md
```

---

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Get all products |

### Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /cart | Get cart items |
| POST | /cart | Add item to cart |
| PUT | /cart/:id | Update item quantity |
| DELETE | /cart/:id | Remove item from cart |

### Checkout

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /checkout | Place an order |

---

## Database Collections

- Products
- Cart
- Orders

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Ensure MongoDB is running on:

```
mongodb://127.0.0.1:27017
```

### 4. Start the server

```bash
node server.js
```

The backend will run on:

```
http://localhost:3000
```

---

## Project Workflow

1. Browse products
2. Add products to cart
3. View cart
4. Update quantity or remove items
5. Proceed to checkout
6. Enter customer information
7. Order is stored in MongoDB
8. Cart is cleared automatically

---

## Learning Outcomes

- REST API development using Express.js
- MongoDB integration with Mongoose
- CRUD operations
- Frontend and backend integration
- Asynchronous API requests using Fetch API
- Full-stack application development

---

## Author

**Hafsa Mazhar**

Software Engineering Student

University of Gujrat
