import { Response } from "express";
import { AuthRequest } from "../types/AuthRequest";
import Interview from "../models/Interview";

export const createInterview = async (req: AuthRequest, res: Response) => {
  
  
  try {
    const interview = await Interview.create({ ...req.body, userId: req.user.id });
    console.log("interviewe", interview);
    
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: "Error creating interview" });
  }
};

export const getInterviews = async (req: AuthRequest, res: Response) => {
  console.log("creating...");
  const interviews = await Interview.find({ userId: req.user.id });
  res.json(interviews);
};

// controllers/InterviewController.ts
export const updateInterview = async (req: any, res: any) => {
  const { id } = req.params;
  const { candidateName, date, time, status } = req.body;
  // Format the date to "yyyy-MM-dd"
  // const formattedDate = new Date(date).toISOString().split('T')[0];

  try {
    const interview = await Interview.findByIdAndUpdate(id, { candidateName, date, time, status }, { new: true });
    if (!interview) {
      res.status(404).json({ message: "Interview not found" });
      return
    }
    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: "Error updating interview" });
  }
};

export const deleteInterview = async (req: any, res: Response) => {
  const { id } = req.params;
  console.log(`Deleting interview with id: ${id}`);

  try {
    const interview = await Interview.findByIdAndDelete(id);
    if (!interview) {
      res.status(404).json({ message: "Interview not found" });
      return
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting interview" });
  }
};
