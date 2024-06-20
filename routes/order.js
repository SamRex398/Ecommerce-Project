const express = require('express');
const route = express.Router();
const { 
    placeOrder, 
    viewOrder, 
    viewOrderAdmin, 
    updateOrder 
} = require('../controllers/order');
const verify = require('../middlewares/verify');
const isAdmin = require('../middlewares/isAdmin');

route.post('/placeorder', verify, placeOrder);
route.get('/orders', verify, viewOrder)
route.get('/allorders',verify, isAdmin, viewOrderAdmin)
route.put('/updateorder',verify, isAdmin, updateOrder)


module.exports = route