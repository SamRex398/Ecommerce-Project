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


/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 * 
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/User'  
 *             example:
 *               username: "sam"
 *               email: "jgKg6@example.com"
 *               password: "jkajdhaskjdh"         
 *     responses:
 *       200:
 *         description: User created
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */

route.post('/register', registerUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               discription: "user"
 *               email: "jgKg6@example.com"
 *               password: "jkajdhaskjdh"   
 *     responses:
 *       200:
 *         description: User login successful
 *         content:
 *           text/plain:
 *             example: "user logged in"
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */
route.post('/login', loginUser);
/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User profile
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */
route.get('/profile',verify, getUserProfile);
/**
 * @swagger
 * /user/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               username: "sam"
 *               email: "jgKg6@example.com"
 *               password: "jkajdhaskjdh"
 *     responses:
 *       200:
 *         description: User profile updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */
route.put('/update',verify, updateUserProfile);

/**
 * @swagger
 * /user/profile:
 *   delete:
 *     summary: Delete user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User deleted
 *         content:
 *           text/plain:
 *             example: "user deleted" 
 *       400:
 *         description: Input all required fields
 *       500:
 *         description: Internal server error
 */
route,delete('/delete', verify, isAdmin, deleteUser)


module.exports = route