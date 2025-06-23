import mongoose from "mongoose";

export default async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/note");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
}
