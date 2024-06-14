/*
**Product Controller**
- **Create**: Only admins can create products.
- **Read**: All users can view products.
- **Update/Delete**: Only admins can update or delete products.
*/
const productModel = require('../models/product');

const createProduct = async (req, res)=>{
    const {name, description, price, category, stock, imageUrl} = req.body;

    if(!name || !description || !price || !category || !stock || !imageUrl){
        return res.json({massage: "Input all required fields"}).status(400);
    };

    try{
        const newProduct = await productModel.create({name, description, price, category, stock, imageUrl});
        const saved = newProduct.save();
        return res.json({message: "Product added successfully"}).status(201);
    }catch (error){
        return res.json({message: error.message}).status(500);
    }
}

module.exports = {createProduct}