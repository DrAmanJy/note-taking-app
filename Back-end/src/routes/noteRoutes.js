import express from "express";
import {
  addNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/noteController.js";
const noteRoutes = express.Router();

noteRoutes.get("/", getNotes);
noteRoutes.get("/:id", getNote);
noteRoutes.post("/", addNote);
noteRoutes.put("/:id", updateNote);
noteRoutes.delete("/:id", deleteNote);

export default noteRoutes;
