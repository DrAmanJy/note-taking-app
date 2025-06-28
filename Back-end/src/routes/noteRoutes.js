import express from "express";
import {
  addNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/noteController.js";
import { protect } from "../middleware/protect.js";
const noteRoutes = express.Router();

noteRoutes.get("/", protect, getNotes);
noteRoutes.get("/:id", protect, getNote);
noteRoutes.post("/", protect, addNote);
noteRoutes.put("/:id", protect, updateNote);
noteRoutes.delete("/:id", protect, deleteNote);

export default noteRoutes;
