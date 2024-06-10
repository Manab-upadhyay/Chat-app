const express= require('express')
const router = express.Router();
const protected= require("../message/protected")
const sendmessage= require("../message/send")
const getmessage= require("../message/send")
router.post('/send/:id',protected,sendmessage)
router.get('/message/:id', protected, getmessage)
module.exports= router