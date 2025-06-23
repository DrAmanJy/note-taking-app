import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
connectDb();
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost",
    credentials: true,
  })
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/notes", noteRoutes);

app.listen(5500, () => {
  console.log("Server is running on http://localhost:5500/");
});
