const message = require("../models/messagemodel")
const conversation= require("../models/conversiotion")
const connectDB = require("../db/connect")
const sendmessage = async(req,res)=>{
    try {
        await connectDB()
        const {Messages}=req.body;
        const{id: receverid}= req.params
        const senderid= req.user._id
        console.log(senderid)
        let conversations= await conversation.findOne({participants:{$all:[senderid, receverid]}})
        if(!conversations){
            console.log("inside conversation")
        let    conversations =  await conversation.create({
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
        await newmsg.save()
        if(newmsg){
            conversations?.messages.push(newmsg._id)
            await conversations.save()
        }
        res.json({newmsg})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"internal server error"})
    }
   

}
module.exports= sendmessage
 const getmessage= async(req,res)=>{
    try {
           await connectDB()
        const {id:usertochatid}=req.params
    const senderid= req.user._id
    const conversations= await conversation.findOne({participants:{$all:[senderid, usertochatid]}}).populate("messages")
    if(!conversations){res.json([])}
    const message= conversations?.messages
    res.status(200).json(message)
        
    } catch (error) {
        console.log(error)
        res.status(500).json("server error ")
    }
    
    
 }
 module.exports= getmessage