const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const app = express();

// mongoose.set('debug', true);

mongoose.connect(
    process.env.Mongoose_Url
).then(()=>{
    console.log('Database Connected Succefully');
})

const options = {
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'Ecommerce API',
            version: '1.0.0',
            description: 'Ecommerce API Information',
        },
        servers:[
            {
                url: 'https://samrex-e-commerce.onrender.com'
            }
        ],
    },
    apis: ['./routes/*.js','./models/*.js'],
}

const specs = swaggerJsDoc(options)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use(express.json());
app.use(cookieParser());



app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

