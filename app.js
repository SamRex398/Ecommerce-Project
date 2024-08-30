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

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));