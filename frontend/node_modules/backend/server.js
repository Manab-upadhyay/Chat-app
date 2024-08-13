const express = require('express');
const { app, server } = require('./socket/socket');
const path = require('path');
const port = 5000;
const authroute = require('./route/authroute');
const message = require('./route/message');
const users = require('./route/users');
const connectDB = require('./db/connect');
const cookieParser = require('cookie-parser');
const { configDotenv } = require('dotenv');

// Load environment variables
configDotenv();

// Use middleware
app.use(cookieParser());
app.use(express.json());

// Use routes
app.use('/api', authroute);
app.use('/api', message);
app.use('/api', users);

// Construct the path to the frontend build directory
const frontendPath = path.join(__dirname, '../frontend/vite-project/dist');

// Serve static files
app.use(express.static(frontendPath));

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontendPath, 'index.html'));
});

// Start the server
server.listen(port, (err) => {
  if (err) {
    console.error('Server start error:', err);
  } else {
    console.log('Server started on port', port);
  }
});
