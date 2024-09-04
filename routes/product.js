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

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product management
 */

/**
 * @swagger
 * /product/addproduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Product'
 *             example: 
 *               name: "Apple iPhone 13"
 *               description: "The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system."
 *               price: 799
 *               category: "Electronics"
 *               stock: 25
 *               imageUrl: "https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_iphone13__d5d46b8b9b38_large.jpg"
 *     responses:
 *        200:
 *          description: Product created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  $ref: '#/components/schemas/Product'
 *        400:
 *          description: Input all required fields
 *        500:
 *          description: Internal server error
 */
route.post('/addproduct', verify, isAdmin, createProduct);
/**
 * @swagger
 * /product/:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Get all products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 */
route.get('/', verify, readProducts);
/**
 * @swagger
 * /product/{category}:
 *   get:
 *     summary: Get products by category
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: The category of the product
 *     responses:
 *       200:
 *         description: Get products by category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 */
route.get('/:category', verify, readProductsByCartegory)
/**
 * @swagger
 * /product/updateproduct/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Product'
 *             example:
 *               name: "Apple iPhone 13"
 *               description: "The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system."
 *               price: 799
 *               category: "Electronics"
 *               stock: 25
 *               imageUrl: "https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_iphone13__d5d46b8b9b38_large.jpg"
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */
route.put('/updateproduct/:id', verify, isAdmin, updateProduduct);
/**
 * @swagger
 * /product/deleteproduct/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       500:
 *         description: Internal server error
 */
route.delete('/deleteproduct/:id', verify, isAdmin, deleteProduct);


module.exports = route


