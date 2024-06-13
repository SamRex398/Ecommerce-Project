const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/*
// Functions:
registerUser
loginUser
getUserProfile
updateUserProfile
*/

const registerUser = async (req, res)=>{
    const {username, email, password}= req.body;
    
    if(!username || !email || !password){
        return res.json({message: "Input all required fields"}).status(400);
    };

    const getUser = await userModel.findOne({email});
    if(getUser){
        return res.json({message: "User already exist"}).status(401);
    };

    const hashPasswrod = bcrypt.hashSync(password, 10);
    try{
        const newUser = await userModel.create({username, email, password: hashPasswrod});
        const savedPassword = await newUser.save();        
    }catch(error){
        return res.json({message: error.message}).status(500);
    };

    res.json({message: "User created"}).status(201);
};

const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return  res.json({message: "Input all required fields"}).status(400);
    };

    const getUser = await userModel.findOne({email});
    if(!getUser){
        return res.json({message: "User does not exist"}).status(401);
    };
    const comparePassword = bcrypt.compareSync(password, getUser.password);
    if(!comparePassword){
        return res.json({message: "Incorrect password"}).status(401);
    };

    const token = jwt.sign(JSON.stringify(getUser), process.env.JWT_KEY);

    res.cookie('user', token);
    res.json({message: "Login successful"}).status(200);
}


module.exports = {
    registerUser,
    loginUser
}