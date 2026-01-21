import express from "express";
import authMiddleware from "../middleware/authmiddleware.js";
import { setTimer, getTimer } from "../controllers/timerController.js";

const router = express.Router();

router.post("/", authMiddleware, setTimer);
router.get("/", authMiddleware, getTimer);

export default router;
