const express = require('express');
const route = express.Router();
const { registerUser, loginUser } = require('../controllers/user');

route.post('/register', registerUser);
route.post('/login', loginUser);


module.exports = route