

import express from "express";
// Corrected import path: ../controllers/authController.js
import { register, loginUser, updateProfile, uploadProfilePicture, upload } from "../controllers/authControllers.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);

// Profile routes (protected)
router.put("/update-profile", authMiddleware, updateProfile);
router.post("/upload-profile-picture", authMiddleware, upload, uploadProfilePicture);

export default router;
