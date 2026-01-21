

import StudyPlan from "../models/StudyPlan.js";

// Get all study plans for the logged-in user
export const getPlans = async (req, res) => {
  try {
    const plans = await StudyPlan.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new study plan
export const createPlan = async (req, res) => {
  try {
    const { topic, examDate } = req.body;

    if (!topic || !examDate) {
      return res.status(400).json({ message: "Topic and exam date are required" });
    }

    const newPlan = await StudyPlan.create({
      userId: req.user._id,
      topic,
      examDate,
    });

    res.status(201).json(newPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a study plan
export const deletePlan = async (req, res) => {
  try {
    const plan = await StudyPlan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({ message: "Study plan not found" });
    }

    // Only allow deletion by the owner
    if (plan.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await plan.deleteOne();
    res.status(200).json({ message: "Study plan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
