import mongoose from "mongoose";

const StudyPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  examDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: "Active"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("StudyPlan", StudyPlanSchema);
