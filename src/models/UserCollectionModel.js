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
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^[0-9]{10}$/,
        "Mobile number must be exactly 10 digits"
      ]
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserCollection", userSchema);