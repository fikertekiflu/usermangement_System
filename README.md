# User Management 

A RESTful API built with Node.js, Express, and MongoDB for managing users. It provides functionality to create, retrieve, and delete user records.

## Features

- **POST /users** - Adds a new user (requires `name` and `email` in JSON format).
- **GET /users** - Retrieves all users.
- **DELETE /users/:id** - Deletes a user by their ID.

## Technologies

- **Node.js** and **Express** - API server
- **MongoDB** - Database for storing user data

## Setup

1. Clone the repository and navigate to the directory:
   ```bash
   git clone https://github.com/yourusername/user-management_System.git
   cd user-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure MongoDB connection:
   - Create a `.env` file with your MongoDB URI:
     ```plaintext
     MONGODB_URI=mongodb://localhost:27017/userManagement
     ```

4. Start the server:
   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## Usage

### Endpoints

1. **Create a User**
   - **POST** `/users`
   - **Body**: `{ "name": "John Doe", "email": "john@example.com" }`

2. **Get All Users**
   - **GET** `/users`

3. **Delete User by ID**
   - **DELETE** `/users/:id`

### Validation

Ensures `name` and `email` fields are not empty when creating a user.
