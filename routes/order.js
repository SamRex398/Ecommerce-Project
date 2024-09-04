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

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Order management
 */

/**
 * @swagger
 * /order/placeorder:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the product
 *                     description:
 *                       type: string
 *                       description: The description of the product
 *                     price:
 *                       type: number
 *                       description: The price of the product
 *                     category:
 *                       type: string
 *                       description: The category of the product
 *                     stock:
 *                       type: integer
 *                       description: The available stock for the product
 *             example:
 *               products:
 *                 - name: "Apple iPhone 13"
 *                   description: "The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system."
 *                   price: 799
 *                   category: "Electronics"
 *                   stock: 25
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The success message
 *                 order:
 *                   $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 */
route.post('/placeorder', verify, placeOrder);
/**
 * @swagger
 * /order/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Orders fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 */
route.get('/orders', verify, viewOrder)
/**
 * @swagger
 * /order/allorders:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Orders fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 */
route.get('/allorders',verify, isAdmin, viewOrderAdmin)
/**
 * @swagger
 * /order/updateorder:
 *   put:
 *     summary: Update an order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The status of the order
 *             example:
 *               status: "Delivered"
 *     responses:
 *       200:
 *         description: Order updated successfully
 */
route.put('/updateorder',verify, isAdmin, updateOrder)


module.exports = route