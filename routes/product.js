const express = require('express');
const route = express.Router();
const { 
    createProduct, 
    readProducts, 
    readProductsByCartegory,
    updateProduduct,
    deleteProduct
} = require('../controllers/product')
const verify = require('../middlewares/verify');
const isAdmin = require('../middlewares/isAdmin');

route.post('/addproduct', verify, isAdmin, createProduct);
route.get('/', verify, readProducts);
route.get('/:category', verify, readProductsByCartegory)
route.put('/updateproduct/:id', verify, isAdmin, updateProduduct);
route.delete('/deleteproduct/id', verify, isAdmin, deleteProduct);


module.exports = route


