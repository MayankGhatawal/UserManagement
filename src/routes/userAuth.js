import express from "express";
import { loginUser, registerUser } from "../controllers/userAuth.js";
import { upload } from "../middleware/multerMiddleware.js";

const router = express.Router();

router.post("/register", upload.single("profilePic"), registerUser);
router.post("/login", loginUser);

export default router;
