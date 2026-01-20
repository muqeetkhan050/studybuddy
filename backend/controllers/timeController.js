import Timer from "../models/Timer.js";

// Create or update timer settings for user
export const setTimer = async (req, res) => {
  try {
    const { pomodoroMinutes, breakMinutes, sessionsCompleted } = req.body;

    // Either update existing or create new for this user
    const timer = await Timer.findOneAndUpdate(
      { userId: req.userId },
      { pomodoroMinutes, breakMinutes, sessionsCompleted },
      { new: true, upsert: true } // upsert = create if not exists
    );

    res.json(timer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get current user's timer settings
export const getTimer = async (req, res) => {
  try {
    const timer = await Timer.findOne({ userId: req.userId });
    if (!timer) return res.status(404).json({ error: "Timer not set" });
    res.json(timer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
