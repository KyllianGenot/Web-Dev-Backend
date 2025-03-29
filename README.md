# Taskify Backend - Powering Your Todo List

Welcome to the **Taskify Backend**, the robust server-side foundation for the Taskify Todo List application. Built with modern backend technologies, this API provides secure user authentication, task management, and data persistence for the Taskify frontend. Crafted with **Node.js**, **Express**, and **MongoDB**, the Taskify Backend ensures reliable and efficient handling of all your todo-related operations.

---

## Features

- **User Authentication**: Secure user registration and login with JWT-based authentication.
- **CRUD Operations for Todos**: Create, read, update, and delete todos seamlessly.
- **Data Persistence**: Store user and todo data in MongoDB for reliability and scalability.
- **Secure API Endpoints**: Protect routes with middleware to ensure only authenticated users can access their data.
- **RESTful API Design**: Follows REST principles for intuitive and predictable API interactions.

---

## Live Demo

Explore the live Taskify Backend API at: [https://web-dev-backend-ptmz.onrender.com](https://web-dev-backend-ptmz.onrender.com)

*(Note: Test the API using a tool like Postman or the `test/api.http` file provided in the repository.)*

---

## Installation

Follow these steps to set up the Taskify Backend on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KyllianGenot/Web-Dev-Backend.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Web-Dev-Backend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   The .env file is not included in this repository (of course, to keep sensitive data secure). You'll need to create your own .env file in the root directory.
   
   Here's what I have inside my .env file as an example. Copy this structure into your .env file and replace the placeholders with your own values:
   ```
   PORT=3000
   MONGODB_URL=
   JWT_SECRET=
   ```
   
   Use the provided .env.example file as a guide to set up your .env file. Replace MONGODB_URL with your MongoDB connection string (e.g., from MongoDB Atlas) and JWT_SECRET with a strong, unique secret key.

5. **Launch the Server**:
   ```bash
   npm start
   ```

6. **Access the API**: The server will run at http://localhost:3000 (or the port specified in your .env file).

**Prerequisites**: Ensure you have Node.js and npm installed, and a MongoDB instance (local or cloud, e.g., MongoDB Atlas) available.

---

## Usage

Here's how to interact with the Taskify Backend API:

- **Test the API**: Use the test/api.http file with an HTTP client like VS Code's REST Client extension to send requests.
- **User Endpoints**:
  - POST /api/users: Register a new user (e.g., { "username": "john", "email": "john@example.com", "password": "password123" }).
  - POST /api/login: Log in and receive a JWT token (e.g., { "email": "john@example.com", "password": "password123" }).
- **Todo Endpoints** (requires authentication):
  - GET /api/todos: Retrieve all todos for the authenticated user.
  - POST /api/todos: Create a new todo (e.g., { "title": "Buy groceries", "description": "Milk, eggs, bread" }).
  - PUT /api/todos/:id: Update a todo (e.g., { "completed": true }).
  - DELETE /api/todos/:id: Delete a todo.
- **Authentication**: Include the JWT token in the Authorization header as Bearer <token> for protected routes.

---

## Technologies

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Minimal and flexible web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and todo data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Bcrypt**: Password hashing for secure user data.

---

## Project Structure

```
WEB-DEV-BACKEND [WS...]
├── node_modules              # Project dependencies
├── src                       # Source code
│   ├── handlers              # Request handlers
│   │   ├── index.js          # Root handler
│   │   ├── todo-handlers.js  # Todo-related handlers
│   │   └── user-handlers.js  # User-related handlers
│   ├── middlewares           # Middleware functions
│   │   └── auth.js           # Authentication middleware
│   ├── routes                # API routes
│   │   ├── todo-routes.js    # Todo-related routes
│   │   └── user-routes.js    # User-related routes
│   ├── todo                  # Todo data model
│   │   └── todo-model.js     # Mongoose schema for todos
│   ├── user                  # User data model
│   │   └── user-model.js     # Mongoose schema for users
│   ├── utils                 # Utility functions
│   │   ├── crypto.js         # Cryptographic utilities (e.g., password hashing)
│   │   ├── config.js         # Configuration settings
│   │   └── connect.js        # Database connection logic
│   └── index.js              # Application entry point
├── test                      # Test files
│   └── api.http              # HTTP requests for testing the API
├── .env.example              # Example environment variables
├── .gitignore                # Git ignore rules
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and scripts
```

This structure reflects a modular, maintainable approach to backend development, making it easy to navigate and extend.

---

## License

Taskify Backend is released under the MIT License. See the LICENSE file for full details.