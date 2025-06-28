import express from "express";
import {
  getCurrentUser,
  login,
  signup,
} from "../controllers/authController.js";
const authRoutes = express.Router();
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/me", getCurrentUser);
export default authRoutes;
