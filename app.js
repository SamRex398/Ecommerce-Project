const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const app = express();

app.use(express.json());
app.use(cookieParser());


app.use('/user', userRoute);


mongoose.connect(
    process.env.Mongoose_Url
).then(()=>{
    console.log('Database Connected Succefully');
})

app.listen(5000, () => console.log('Server started on port 5000'));