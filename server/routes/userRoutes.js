import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.get("/profile", protect, getUser);
router.post("/logout", logoutUser);

export default router;
