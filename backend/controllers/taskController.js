import Task from "../models/Task.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { text, date } = req.body;
    const task = new Task({
      userId: req.userId, // from authMiddleware
      text,
      date,
      completed: false
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tasks for logged-in user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task (text, date, completed)
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId, userId: req.userId }, // ensures user can only update their own tasks
      req.body,
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const deleted = await Task.findOneAndDelete({ _id: taskId, userId: req.userId });
    if (!deleted) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
