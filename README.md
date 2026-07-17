# ModestPearls Backend API
## Week 3 Progress

This week focused on backend development and database integration.

### Completed Tasks
- Connected MongoDB using Mongoose.
- Configured the Express.js server.
- Created Product and Cart models.
- Implemented Products API.
- Implemented Cart API.
- Connected the frontend "Add to Cart" functionality with the backend.
- Organized the backend folder structure.
- Successfully tested API endpoints using Postman.
## Project Overview

This project is the backend API for the ModestPearls E-commerce Website. It is developed using Node.js and Express.js to handle products, shopping cart operations, and checkout functionality.

---

## Technologies Used

- Node.js
- Express.js
- JSON
- REST API

---

## Features

- Get all products
- View cart
- Add products to cart
- Remove products from cart
- Checkout API
- Basic input validation

---

## API Endpoints

### GET /products

Returns all available products.

Example Response

```json
[
  {
    "id": 1,
    "name": "Black Abaya",
    "price": 29.99
  }
]
```

---

### GET /cart

Returns all items currently in the cart.

---

### POST /cart

Adds a product to the shopping cart.

Example Request

```json
{
  "name": "Black Abaya",
  "price": 29.99,
  "quantity": 1
}
```

Example Response

```json
{
  "message": "Product added to cart successfully!"
}
```

---

### DELETE /cart/:index

Removes a product from the cart.

Example

```
DELETE /cart/0
```

---

### POST /checkout

Places an order.

Example Request

```json
{
  "name": "Hafsa Mazhar",
  "email": "hafsa@example.com",
  "phone": "03001234567",
  "address": "Gujrat, Pakistan"
}
```

Example Response

```json
{
  "message": "Order placed successfully!"
}
```

---

## Installation

Clone the repository

```bash
git clone <repository-link>
```

Install dependencies

```bash
npm install
```

Run the project

```bash
node server.js
```

Server URL

```
http://localhost:3000
```

---

## Author

Hafsa Mazhar

Software Engineering Student
University of Gujrat