import mongoose from "mongoose";

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connetDB;