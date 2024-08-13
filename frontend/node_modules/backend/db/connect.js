const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://manab123:qwerty123@cluster0.hphb4ra.mongodb.net/?authMechanism=SCRAM-SHA-1', {
      useNewUrlParser: true,

    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports= connectDB