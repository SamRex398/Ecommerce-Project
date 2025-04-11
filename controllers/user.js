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

    const hashPassword = bcrypt.hashSync(password, 10);
    try{
        const newUser = await userModel.create({username, email, password:hashPassword });
        await newUser.validate();
        const savedUser = await newUser.save();        
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

    const token = jwt.sign({id: getUser._id, role:getUser.role}, process.env.JWT_KEY);

    res.cookie('user', token);
    res.json({message: "Login successful"}).status(200);
}
const getUserProfile = async (req, res)=>{
    // const {user} = req.cookies;

   res.json({
    UserName: req.user.username,
    Email: req.user.email,
    Role: req.user.role
   }).status(200);

}
const updateUserProfile = async (req, res)=>{
    const {email, _id, role, ...others} = req.body;

    if(req.body === null || req.body === undefined){
        return res.json({message: "No data provided"}).status(400)
    }

    const id = req.user._id;

    const updateUserProfile = await userModel.findByIdAndUpdate(id, {...others}, {new: true});
    if(!updateUserProfile){
        return res.json({message: "Error updating credentials"}).status(404)
    }else{
       return res.json({message: "Credentials updated successfully"}).status(200)
    }
}
const deleteUser =async (req, res)=>{
    const {id} = req.body;

    const deleteUser = await userModel.findByIdAndDelete(id);
    if(!deleteUser){
        return res.json({message: "Error deleting user"}).status(404)
    }else{
       return res.json({message: "User deleted successfully"}).status(200)
    }
}


module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    deleteUser
}
