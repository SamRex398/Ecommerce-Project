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

const readProducts = async(req, res)=>{
    const products = await productModel.find();

    return res.json({
        products: products.map(product => ({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            stock: product.stock,
            imageUrl: product.imageUrl
        }))
    }).status(200);
     
}
const readProductsByCartegory = async(req, res)=>{
    
    const products = await productModel.find({category: req.params.category});

    return res.json({
        products: products.map(product => ({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            stock: product.stock,
            imageUrl: product.imageUrl
        }))
    }).status(200);
}
const updateProduduct = async(req, res)=>{
    const {_id, ...others} = req.body;

    const id = req.params.id;

    if(req.body === null || req.body === undefined){
        return res.json({message: "No data provided"}).status(400)
    };

    const product = await productModel.findByIdAndUpdate(id, {...others}, {new: true});

    if(!product){
        return res.json({meaasge: "Product not found"}).status(400)
    }else{
        return res.json({message: "Product updated successfully"}).status(200)
    }
}
const deleteProduct = async (req, res)=>{
    const {id} = req.body;
    const product = await productModel.findByIdAndDelete(id);
    if(!product){
        return res.json({message: "Product not found"}).status(400);
    }else{
        return res.json({message: "Product deleted successfully"}).status(200);
    }
}


module.exports = {createProduct, 
    readProducts,
    readProductsByCartegory,
    updateProduduct,
    deleteProduct
}