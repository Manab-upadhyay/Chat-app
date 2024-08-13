const message = require("../models/messagemodel");
const conversation = require("../models/conversiotion");
const connectDB = require("../db/connect");

const getmessage = async (req, res) => {
  try {
    await connectDB();
    const { id: usertochatid } = req.params;
    console.log("userid ",usertochatid)

    const senderid = req.user._id;
    console.log("senderid",senderid)
    
    const conversations = await conversation.findOne({ participants: { $all: [senderid, usertochatid] } }).populate("messages");
    
    if (!conversations) {
      return res.status(201).json([]);  // Ensures no further code is executed after this response
    }
    
    const messages = conversations?.messages;
    res.status(200).json(messages);  // Sends the second response only if the first condition is not met
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};

module.exports = getmessage;
