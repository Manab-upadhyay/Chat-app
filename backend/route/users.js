const express =require("express")
const router = express.Router()
const protected= require("../message/protected")
const getusers= require("../contoller/usercontoller")
router.get("/users", protected, getusers)
module.exports= router