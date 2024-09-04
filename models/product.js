//- Fields: `name`, `description`, `price`, `category`, `stock`, `imageUrl`.

const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         price:
 *           type: number
 *           description: The price of the product
 *         category:
 *           type: string
 *           description: The category of the product
 *         stock:
 *           type: number
 *           description: The stock of the product
 *         imageUrl:
 *           type: string
 *           description: The image url of the product
 *       required:
 *         - name
 *         - description
 *         - price
 *         - category
 *         - stock
 *         - imageUrl
 *       example:
 *         name: "Apple iPhone 13"
 *         description: "The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system."
 *         price: 799
 *         category: "Electronics"
 *         stock: 25
 *         imageUrl: "https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_iphone13__d5d46b8b9b38_large.jpg"
 * 
 */

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel