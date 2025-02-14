import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import interviewRoutes from "./routes/interviewRoutes";
import dotenv from "dotenv";

dotenv.config();
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('MONGODB_URI2:', process.env.MONGODB_URI);
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/interviews", interviewRoutes);

export default app;
