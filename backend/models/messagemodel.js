const mongoose = require('mongoose')
const messageSchema= new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    receverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    message:{
        type:String,
        default:""
    },
    
},{timestamps:true})
const message = mongoose.model("message",messageSchema)
module.exports= message