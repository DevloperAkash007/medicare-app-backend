# MediCare Backend – Authentication Only

This backend handles **user registration** and **login** using **Node.js**, **Express**, **SQLite**, and **JWT authentication**.

---

## 🛠 Tech Stack

- Node.js
- Express
- SQLite (sqlite3)
- JSON Web Token (jsonwebtoken)

---

## 📁 File Structure

backend/
├── auth/
│ ├── authController.js # Handles signup/login logic
│ └── authRoutes.js # Route definitions
├── db.sqlite # SQLite connection 
├── server.js # Main entry point
└── package.json

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/medicare-backend.git
cd medicare-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file and add:

```
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the Server

```bash
node server.js
```

---

## 🧪 API Endpoints

### ✅ POST `/signup`

Registers a new user.

#### 🔸 Request Body

```json
{
  "username": "john_doe",
  "password": "your_password"
}
```

#### 🔸 Response (Success)

```json
{
  "message": "User registered successfully"
}
```

#### 🔸 Response (If user exists)

```json
{
  "error": "Username already exists"
}
```

---

### ✅ POST `/login`

Authenticates a user and returns a JWT token.

#### 🔸 Request Body

```json
{
  "username": "john_doe",
  "password": "your_password"
}
```

#### 🔸 Response (Success)

```json
{
  "message": "Login successful",
  "token": "YOUR_JWT_TOKEN"
}
```

#### 🔸 Response (Invalid credentials)

```json
{
  "error": "Invalid username or password"
}
```

---

## 🔐 Authorization Format

Use the token in headers for protected routes:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🗃️ SQLite Schema

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

---

## 💡 Notes

- Passwords should be hashed using `bcrypt` in production.
- Use Postman or frontend to test authentication.
- Store the token in localStorage:

```js
localStorage.setItem("token", token);
```

---

## 👨‍💻 Author

**Akash**  
GitHub: [DevloperAkash007](https://github.com/DevloperAkash007)
