const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/', userController.createUser);       // Create new user
router.get('/', userController.getUsers);          // Read all users
router.get('/:id', userController.getUser);        // Read one user
router.put('/:id', userController.updateUser);     // Update user info
router.delete('/:id', userController.deleteUser);  // Delete user

module.exports = router;