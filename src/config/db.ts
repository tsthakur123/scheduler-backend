import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    // console.log("uri", uri);
    
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }
    await mongoose.connect(uri, {
      dbName: 'schedular',
    });
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running.' + err);
      process.exit();
    });
  } catch (error) {
    console.log('Something went wrong!');
    console.log(error);
  }
};

export default connectDB;
