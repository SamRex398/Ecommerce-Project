/**
 * 
**Order Controller** (`controllers/orderController.js`):
- **Place Order**: Only authenticated users can place orders.
- **View Orders**: Users can view their own orders; admins can view all orders.
- **Update Order Status**: Only admins can update order statuses.
 */

const orderModel = require('../models/order');

const placeOrder = async (req, res)=>{
    const userId = req.user._id;
    const { productId, quantity, totalPrice} = req.body;

    if(!productId || !quantity || !totalPrice){
        return res.json({message: "Input all required fields"}).status(400)
    };

    try{
        const newOrder = await orderModel.create({
            userId,
            products:[{
                productId,
                quantity
            }],
            totalPrice
        })
        const savedOrder = await newOrder.save();

        res.json({message: "Order Placed Successfully"}).status(200)
    }catch(err){
        res.json({messgae: err.message}).status(400)
    }
}
const viewOrder = async (req, res)=>{
    const userId = req.user._id;

    try{
        const order = await orderModel.find({userId});
         res.json({
            product: order.products,
            totalPrice: order.totalPrice,
            status: order.status
         }).status(201);
    }catch(err){
        res.json({message: err.messgae}).status(400);
    }
}
const viewOrderAdmin = async (req, res)=>{
    try{
        const Orders = await orderModel.find()
        res.json(Orders).status(200)
    }catch(err){
        res.json({messgae: err.message})
    }
}
const updateOrder = async (req, res)=>{
    const {userId,id, ...others} = req.body;

    try{
        const update = await orderModel.findByIdAndUpdate(id, {...others}, {new:true})
        
        res.json({message: " Order Updated!!!"}).status(200)
    }catch(err){
        res.json({message: err.message})
    }
}
module.exports = {
    placeOrder,
    viewOrder,
    viewOrderAdmin,
    updateOrder
}