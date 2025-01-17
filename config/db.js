import mongoose from "mongoose";
import "dotenv/config";

//using string from .env for security
const string = process.env.CONNECTION_STRING;

const dbConnect = async () => {
  try {
    await mongoose.connect(string);
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log(" Database connection Error".error.message);
  }
};

export default dbConnect;
