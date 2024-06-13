const express = require('express');
const jwt = require('jsonwebtoken');

const verification = (req, res, next) =>{
    const {user} = req.cookies;
    if(!user){
        return res.json({message: "Must be logged in"}).status(401);
    }
    const verify = jwt.verify(user, process.env.JWT_KEY, (err, payload)=>{
        if(err){
            return  res.json({message: "please log in"}).status(401);
        }else{
            req.user = payload;
            next();
        }
    })
}

module.exports = verification