const express = require('express')
const app= express()
const port = 3000
const authroute= require('./route/authroute')
const message= require('./route/message')
const users= require('./route/users')
const connectDB=require("./db/connect")

const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
 connectDB()
app.use('/api', authroute)
app.use('/api',message)
app.use('/api', users)
app.listen(3000,(err, data)=>{
    console.log("server started on port ", `${port}`);
});

