// - Fields: `userId` (reference to User), `products` (array of product references and quantities), `totalPrice`, `status`.

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:[
        {
            productId:{
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                default: 1,
                min: 1
            }
        }
    ],
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