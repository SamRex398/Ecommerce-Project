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

route.post('/placeOrder', verify, placeOrder);
route.get('/orders', verify, viewOrder)
route.get('/allOrders',verify, isAdmin, viewOrderAdmin)
route.put('/updateOrder',verify, isAdmin, updateOrder)


