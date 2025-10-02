import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addUser", protect, createUser);
router.get("/getUsers", getUsers);
router.get("/getUser/:id", getUser);
router.put("/updateUser/:id", protect, updateUser);
router.delete("/deleteUser/:id", protect, deleteUser);

export default router;
