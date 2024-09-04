// - Fields: `userId` (reference to User), `products` (array of product references and quantities), `totalPrice`, `status`.

const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: The id of the user
 *         products:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               description:
 *                 type: string
 *                 description: The description of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *               category:
 *                 type: string
 *                 description: The category of the product
 *               stock:
 *                 type: integer
 *                 description: The available stock for the product
 *               imageUrl:
 *                 type: string
 *                 description: The URL of the product image
 *           description: The products in the order
 *         totalPrice:
 *           type: number
 *           description: The total price of the order
 *         status:
 *           type: string
 *           description: The status of the order
 *           enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
 *           default: 'Pending'
 *       required:
 *         - userId
 *         - products
 *       example:
 *         userId: user123
 *         products:
 *           - name: Apple iPhone 13
 *             description: The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system.
 *             price: 799
 *             category: Electronics
 *             stock: 25
 *             imageUrl: https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_iphone13__d5d46b8b9b38_large.jpg
 *           - name: Sony WH-1000XM4
 *             description: Sony WH-1000XM4 are noise-canceling headphones with a 30-hour battery life and advanced sound technology.
 *             price: 349
 *             category: Audio
 *             stock: 22
 *             imageUrl: https://www.bose.com/content/dam/Bose_DAM/Web/Global/Products/headphones/quietcomfort_35_ii/quietcomfort_35_ii_black.png
 *           - name: Dell XPS 13
 *             description: The Dell XPS 13 features a 13.4-inch InfinityEdge display, Intel Core i7 processor, and ultra-thin design.
 *             price: 1199
 *             category: Computers
 *             stock: 20
 *             imageUrl: https://www.dell.com/sites/csimages/marketing_communications_all/image-dell-xps-13-9310-laptop.jpg
 *         totalPrice: 2347
 *         status: Pending
 */


const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;