const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const app = express();


mongoose.connect(
    process.env.Mongoose_Url
).then(()=>{
    console.log('Database Connected Succefully');
})


app.use(express.json());
app.use(cookieParser());


app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute)



app.listen(5000, () => console.log('Server started on port 5000'));