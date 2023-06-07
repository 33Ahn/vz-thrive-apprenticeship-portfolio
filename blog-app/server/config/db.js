const mongoose = require("mongoose");
//mongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MondoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    //exit process as failure
    process.exit(1);
  }
};

module.exports = connectDB;
