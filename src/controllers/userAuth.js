import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import sharp from "sharp";
import path from "path";
import fs from "fs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password) return res.status(400).json({ message: "Password is required" });
    if (!mobile) return res.status(400).json({ message: "Mobile is required" });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    let profilePic = null;
    if (req.file) {
      const uploadPath = path.join("public", "uploads");
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }

      const filename = Date.now() + ".jpg";
      const filepath = path.join(uploadPath, filename);

      // Compress & save with sharp
      await sharp(req.file.buffer)
        .resize(800) // max width 800px
        .jpeg({ quality: 70 }) // compress to 70%
        .toFile(filepath);

      profilePic = filename;
    }

    const newUser = new User({ name, email, password, mobile, profilePic });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password) return res.status(400).json({ message: "Password is required" });

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.isMatchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id }, // payload
      process.env.JWT_SECRET || "supersecret", // secret
      { expiresIn: "1d"}
    );

    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
