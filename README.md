# express-masterclass

A comprehensive Express.js guide covering routing, request & response handling, custom middleware, CRUD operations, template engines, error handling, third-party NPM packages, controllers, frontend data fetching, and environment variables. Perfect for building robust backend applications.

---

## 📌 What is Express?
- **Minimal and flexible web framework for Node.js**.
- Used for building **server-side web applications and APIs**.
- The most popular framework for Node.js.
- Simplifies the process of handling **HTTP requests and responses**.
- Express is a very **fast and unopinionated framework**.

---

## 📚 Prerequisites
1. **JavaScript Fundamentals** (Functions, Loops, Objects, Classes, etc.).
2. **HTTP Basics** (Methods, Status Codes, etc.).
3. Understanding of **JSON APIs**.
4. Basic knowledge of **Node.js**.
5. Familiarity with **NPM (Node Package Manager)**.

---

## 📖 Syllabus
1. **Routing** - Creating and managing routes.
2. **Request & Response** - Handling incoming requests and sending responses.
3. **Custom Middleware** - Building reusable middleware functions.
4. **CRUD Operations** - Implementing Create, Read, Update, and Delete functionalities.
5. **Template Engines** - Using templating systems like EJS, Pug, etc.
6. **Error Handling** - Managing errors and providing meaningful messages.
7. **3rd Party NPM Packages** - Integrating external packages for extended functionality.
8. **Controllers** - Structuring code for maintainability.
9. **Fetching From Frontend** - Handling frontend requests and sending appropriate responses.
10. **Environment Variables** - Securing and managing sensitive information.

---

## 📌 Topics Explanation & Code Samples

### 6. Error Handling
```javascript
// Middleware for handling errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    res.status(500).json({ error: 'Something went wrong!' });
}

app.use(errorHandler);
```

### 7. 3rd Party NPM Packages (Example: Morgan)
```bash
npm install morgan
```
```javascript
const morgan = require('morgan');
app.use(morgan('dev'));  // Logs requests to the console
```

### 8. Controllers (Organizing Your Code)
```javascript
// controllers/userController.js
exports.getUsers = (req, res) => {
    res.json(users);
};

exports.createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
};
```

```javascript
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
```

```javascript
// app.js
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
```

### 9. Fetching From Frontend
```html
<!-- public/index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Frontend Form</title>
</head>
<body>
    <form id="userForm">
        <input type="text" id="name" placeholder="Enter name" required />
        <input type="number" id="age" placeholder="Enter age" required />
        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById('userForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, age })
            });

            const result = await response.json();
            alert(`User ${result.name} added successfully!`);
        });
    </script>
</body>
</html>
```

### 10. Environment Variables
```bash
# Install dotenv package
npm install dotenv
```

```javascript
// app.js
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

```env
# .env
PORT=4000
```

---

## 📂 Folder Structure (Updated)
```
express-masterclass/
│
├── controllers/
├── middlewares/
├── models/
├── public/
├── routes/
├── views/
├── .env
├── app.js
├── package.json
└── README.md
```

---

## ✅ Complete Setup
- Clone the repository:
  ```bash
  git clone https://github.com/ExploitEngineer/express-masterclass.git
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the server:
  ```bash
  npm run dev
  ```

Your Express.js project is now fully set up with **Routing, Middleware, CRUD Operations, Templating, Error Handling, Controllers, Environment Variables, and Fetching from Frontend**.

