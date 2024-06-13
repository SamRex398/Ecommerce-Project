const express = require('express');
const route = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile 
} = require('../controllers/user');
const verify = require('../middlewares/verify');

route.post('/register', registerUser);
route.post('/login', loginUser);
route.get('/profile',verify, getUserProfile);
route.put('/update',verify, updateUserProfile);


module.exports = route