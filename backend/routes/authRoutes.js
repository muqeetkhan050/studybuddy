

import express from "express";
// Corrected import path: ../controllers/authController.js
import { register, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);

export default router;
