const express = require('express');
const route = express.Router();
const { createProduct } = require('../controllers/product')
const verify = require('../middlewares/verify');
const isAdmin = require('../middlewares/isAdmin');

route.post('/addproduct', verify, isAdmin, createProduct);


module.exports = route


