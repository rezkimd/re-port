import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("📦 Database connected");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
};

// Export semua model
export * from "./models/project";
export * from "./models/profile";

export const client = mongoose.connection;