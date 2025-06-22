import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/notes", noteRoutes);

app.listen(5500, () => {
  console.log("Server is running on http://localhost:5500/");
});
