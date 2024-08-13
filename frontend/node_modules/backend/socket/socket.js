const { Server } = require('socket.io');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});

 const getReceiverId =(recieverrId)=>{
return userSocketMap[recieverrId]
}
const userSocketMap = {};

io.on('connection', (socket) => {
  console.log("A user has connected:", socket.id);
  const userId = socket.handshake.query.userId;

  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }
  

  
  socket.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
 
 
  });
});

module.exports = { app, io, server, getReceiverId };
