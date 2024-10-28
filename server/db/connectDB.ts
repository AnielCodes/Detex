import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MongoDB is not defined in the environment variables");
    }

    const connect = await mongoose.connect(mongoURI);
    console.log(`MongoDB is connected: ${connect.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
    } else {
      console.error("An unknown error occured");
    }
    process.exit(1);
  }
};

export default connectDB;
