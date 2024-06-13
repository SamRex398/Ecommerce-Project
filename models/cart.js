// - Fields: `userId` (reference to User), `products` (array of product references and quantities).

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:{
        type: Array
    }
},{
    timestamps: true
})

const cartModel = mogose.model('cart', cartSchema);

module.exports = cartModel