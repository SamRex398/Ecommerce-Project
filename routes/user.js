const express = require('express');
const route = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile, 
    deleteUser
} = require('../controllers/user');
const verify = require('../middlewares/verify');
const isAdmin = require('../middlewares/isAdmin');

route.post('/register', registerUser);
route.post('/login', loginUser);
route.get('/profile',verify, getUserProfile);
route.put('/update',verify, updateUserProfile);
route,delete('/delete', verify, isAdmin, deleteUser)


module.exports = route