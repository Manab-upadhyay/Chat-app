const message = require("../models/messagemodel")
const conversation= require("../models/conversiotion")
const user= require('../models/usermodel')
const connectDB = require("../db/connect")
const { getReceiverId } = require("../socket/socket")
const {io}= require("../socket/socket")
const sendmessage = async(req,res)=>{
    try {
        await connectDB()
  
       
        const {Messages}=req.body;

        const{id: receverid}= req.params
        const senderid= req.user._id
        console.log(senderid)
        console.log(Messages, receverid, senderid)
       
        let conversations= await conversation.findOne({participants:{$all:[senderid, receverid]}})
        if(!conversations){
            console.log("inside conversation")
         conversations =  await conversation.create({
            participants:  [senderid, receverid] 
            })
            console.log("saved")
        
        }
     console.log(Messages)
        const newmsg=  new message({

    senderid,
    receverid,
    message: Messages
        })
        console.log("news msg",newmsg)
        await newmsg.save()
        if(newmsg){
            conversations?.messages.push(newmsg._id)
            await conversations.save()
        }
        const users= await user.findOne({_id:receverid})
        console.log("reciever is ",users)
        const receverSocketId=  getReceiverId(users.username)
        console.log(receverSocketId)
        if(receverSocketId){
            io.to(receverSocketId).emit("newmsg", newmsg)
        }
        res.json(newmsg)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"internal server error"})
    }
   

}
module.exports= sendmessage
