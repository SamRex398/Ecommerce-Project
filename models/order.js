// - Fields: `userId` (reference to User), `products` (array of product references and quantities), `totalPrice`, `status`.

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        required: true
    },
    totalPrice:{
        type: Number
    },
    status:{
        type: String,
        default: "Pending"
    }
},{
    timestamps: true
})

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel