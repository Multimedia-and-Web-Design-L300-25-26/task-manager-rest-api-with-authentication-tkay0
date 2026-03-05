import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    return;
  }

  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed", error.message);
    throw error;
  }
};

export default connectDB;