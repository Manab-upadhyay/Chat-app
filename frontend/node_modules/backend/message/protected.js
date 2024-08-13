const user = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const connectDB = require("../db/connect")
const protected = async (req, res, next) => {
    try {
        await connectDB()
        const token = req.cookies.jwt;
       
    
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" }); // Corrected error message
        }

        const decoded = jwt.verify(token, "secretkey123");
        const users = await user.findById(decoded.userid); // Corrected decoded.user_id to decoded.userid

        if (!users) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = users;
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = protected;
