// import express from "express";
// import Notes from "../models/Notes.js";
// import authMiddleware from "../middleware/authmiddleware.js";

// const router = express.Router();

// // Add a note
// router.post("/", authMiddleware, async (req, res) => {
//   const { title, content } = req.body;
//   const note = new Notes({
//     userId: req.userId,  // Comes from authMiddleware
//     title,
//     content
//   });
//   await note.save();
//   res.status(201).json(note);
// });

// // Get notes for logged-in user
// router.get("/", authMiddleware, async (req, res) => {
//   const notes = await Notes.find({ userId: req.userId });
//   res.json(notes);
// });

// export default router;


import express from "express";
import Notes from "../models/Notes.js";
import {protect} from "../middleware/authmiddleware.js";

const router = express.Router();

// Create note
router.post("/", protect, async (req, res) => {
  const { title, content } = req.body;
  const note = new Notes({ title, content, userId: req.user._id });
  await note.save();
  res.status(201).json(note);
});

// Get notes
router.get("/", protect, async (req, res) => {
  const notes = await Notes.find({ userId: req.user._id });
  res.json(notes);
});

// Update note
router.put("/:id", protect, async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  if (note.userId.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Not authorized" });

  note.title = req.body.title ?? note.title;
  note.content = req.body.content ?? note.content;
  await note.save();
  res.json(note);
});

// Delete note
router.delete("/:id", protect, async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  if (note.userId.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Not authorized" });

  await note.deleteOne();
  res.json({ message: "Note deleted" });
});

export default router;
