import express from "express";
import { createInterview, getInterviews, deleteInterview, updateInterview } from "../controllers/interviewController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();
router.post("/create", authMiddleware ,createInterview);
router.get("/get", authMiddleware, getInterviews);
router.put("/update/:id", authMiddleware, updateInterview);
router.delete("/delete/:id", authMiddleware, deleteInterview);

export default router;
