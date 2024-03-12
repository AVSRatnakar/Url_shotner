const mongoose = require('mongoose');
const db = 'mongodb+srv://avsratnakar:aarya2002@cluster0.spae858.mongodb.net/Users?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
