# User Management REST API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing users (Create, Read, Update, Delete).  
This project includes email and mobile validation, proper error handling, and follows a clean file structure.

---

## 🚀 Features

The API provides the following endpoints for the `User` resource:

| Method | Endpoint        | Description                        |
|--------|----------------|------------------------------------|
| POST   | `/api/addUser`       | Create a new user (name, email, mobile) |
| GET    | `/api/getUsers`       | Get all users                      |
| GET    | `/api/getUser/:id`   | Get a single user by ID            |
| PUT    | `/api/updateUser/:id`   | Update a user by ID                |
| DELETE | `/api/deleteUser/:id`   | Delete a user by ID                |

---

## ✅ Requirements & Specifications

- Implement **CRUD operations** for the User resource.
- Use **JSON** format for request and response.
- Validate required fields:
  - `email` must have a valid format.
  - `mobile` must be unique.
- Proper **status codes** and **error handling**.
- Clean and modular code.

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

---

## ⚡ Setup Instructions

### 1. **Clone the repository**
```bash
git clone https://github.com/MayankGhatawal/UserManagement.git
cd UserManagement-master
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Configure environment variables**
Create a `.env` file in the root directory:
```bash
MONGODB_URI=mongodb://localhost:27017/myDatabase
PORT=8000
```

### 4. **Run the server**
```bash
npm run dev
```
Server will start at `http://localhost:8000`.

---

## 📦 API Usage Examples

### 1. **Create User**
```bash
POST /api/addUser
Content-Type: application/json

{
  "name": "Mayank Ghatawal",
  "email": "mayank1ghatawal@gmail.com",
  "mobile": "1234567890"
}

```

### 2. **Get All Users**
```bash
GET /api/getUsers
```

### 3. **Get User by ID**
```bash
GET /api/getUser/<user_id>
```

### 4. **Update User**
```bash
PUT /api/updateUser/<user_id>
Content-Type: application/json

{
  "name": "Mayank",
  "email": "mayank@gmail.com"
}
```
### 3. **Delete User**
```bash
DELETE /api/deleteUser/<user_id>
```

---

## 📚 Validation & Error Handling

- Returns `400 Bad Request` for missing or invalid fields.
- Returns `404 Not Found` if the user does not exist.
- Returns `500 Internal Server Error` for unexpected errors.

---

## 🎯 Notes

Focus on:

- Clean and readable code
- Modular structure (routes, controllers, models)
- Proper HTTP status codes
- Validation & error handling

