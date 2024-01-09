const {getUsersHandler, postUsersHandler, getSingleUserHandler} = require('../Controllers/users');
const express = require('express');
const router = express.Router();

// Users routes 
// Get all users
router.get('/', getUsersHandler);

// Post user
router.post('/', postUsersHandler);

// Get the certain user
router.get('/:userID', getSingleUserHandler);

// Export Router
module.exports = router;