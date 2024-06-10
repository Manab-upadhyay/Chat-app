const express= require('express')
const router = express.Router();
const user = require("../models/usermodel")
const bcrypt= require('bcrypt')
const generatetoken= require("../generatetoken")

const connectDB =require( "../db/connect");
router.post('/singup',async(req,res)=>{
    try {
        await connectDB()
        const {username, password, confirmPassword,  gender}= req.body;
        const users= await user.findOne({username})
        let profilepicboy=`https://avatar.iran.liara.run/public/boy?username=${username}`
        let profilepicgirl= `https://avatar.iran.liara.run/public/girl?username=${username}`
        if(users){
            res.json({message:"user already exists"})
        }
        else{
            if(confirmPassword!=password){
                res.send("incorrect password ")

            }
            else{
                const salt= await bcrypt.genSalt(10)
                const hassedpass= await bcrypt.hash(password,salt)
           let newuser= new user({
                    username: username,
                    password: hassedpass,
                    gender:gender,
                    profilepic: gender=="male"?profilepicboy:profilepicgirl
                })
generatetoken(newuser._id,res)
                await newuser.save()
                res.status(200).json(newuser)
            }

        }

        
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})
router.post('/login',async(req,res)=>{
    try {
        const{username, password}= req.body
        const users= await user.findOne({username})
      const ispasswordcorrect= await bcrypt.compare(password, users.password)

if(users&&ispasswordcorrect){
    generatetoken(users._id,res)
    res.status(200).json({message: "succesfully loged in"})
}
    } catch ({error}) {
        
    }
})
router.post('/logout',(req,res)=>{
    console.log("logout")
})
module.exports= router