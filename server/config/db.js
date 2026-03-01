const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to ${process.env.MONGO_URI}: ${error.message}`);
    console.log('Attempting fallback to local MongoDB...');
    try {
      const conn = await mongoose.connect('mongodb://127.0.0.1:27017/campusconnect');
      console.log(`Fallback MongoDB Connected: ${conn.connection.host}`);
    } catch (fallbackErr) {
      console.error(`Fallback Error: ${fallbackErr.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
