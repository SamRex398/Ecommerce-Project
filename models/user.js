//- Fields: `username`, `email`, `password`, `role` (e.g., 'user', 'admin').

const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:   
 *       type: object
 *       required: 
 *          - username
 *          - email
 *          - password
 *          - role
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         role:
 *           type: string
 *           description: The role of the user
 *           enum: ['user', 'admin']
 *           default: 'user'
 *       example:
 *         username: JohnDoe
 *         email: 0bC9Z@example.com
 *         password: password123
 *         role: user
 */

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
{
    timestamps: true
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel