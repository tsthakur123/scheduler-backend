import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  candidateName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["Upcoming", "Completed"], default: "Upcoming" },
});

export default mongoose.model("Interview", InterviewSchema);
