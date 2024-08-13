const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    username: {
      
type:String,
require: true,
unique: true
    },
    password:{
type:String,
require: true,
minlength: 5

    },
    gender:{
        type: String,
        require:true,
        enu: ["male", "female"]
    },
    profilepic:{
        type:String,
        default:" "
    }
})
const user= mongoose.model("User", userSchema)
module.exports= user