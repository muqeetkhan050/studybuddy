

import express from "express";
import { getPlans, createPlan, deletePlan } from "../controllers/studyPlanController.js";
import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/", protect, getPlans);
router.post("/", protect, createPlan);
router.delete("/:id", protect, deletePlan);

export default router;
