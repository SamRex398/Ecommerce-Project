// - Fields: `userId` (reference to User), `products` (array of product references and quantities), `totalPrice`, `status`.

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:{
        type: Array
    },
    totalPrice:{
        type: Number
    },
    status:{
        type: String
    }
},{
    timestamps: true
})

const orderModel = mogose.model('order', orderSchema);

module.exports = orderModel