import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    },
    mobile: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
