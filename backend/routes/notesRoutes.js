import express from "express";
import Notes from "../models/Notes.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Add a note
router.post("/", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const note = new Notes({
    userId: req.userId,  // Comes from authMiddleware
    title,
    content
  });
  await note.save();
  res.status(201).json(note);
});

// Get notes for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const notes = await Notes.find({ userId: req.userId });
  res.json(notes);
});

export default router;
