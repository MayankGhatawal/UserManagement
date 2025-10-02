import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import userAuth from "./routes/userAuth.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/auth", userAuth);

app.get("/", (req, res) => {
  res.send("Welcome to Node.js, which is building basic CRUD APIs for a User resource.");
});

connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
