
const user= require("../models/usermodel")
const connectDB= require('../db/connect')
const getusers=async(req,res)=>{
    try {
        await connectDB()
        const logedinuser= req.user._id
const filteruser= await user.find({_id:{$ne:logedinuser}}).select("-Password")

res.status(200).json(filteruser)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }


}
module.exports= getusers