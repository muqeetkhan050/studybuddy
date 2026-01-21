// import express from "express";
// import authMiddleware from "../middleware/authMiddleware.js";
// import {
//   createPlan,
//   getPlans,
//   deletePlan
// } from "../controllers/studyPlanController.js";

// const router = express.Router();

// router.post("/", authMiddleware, createPlan);
// router.get("/", authMiddleware, getPlans);
// router.delete("/:id", authMiddleware, deletePlan);

// export default router;


import express from "express";
import { getPlans, createPlan, deletePlan } from "../controllers/studyPlanController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all study plan routes with JWT middleware
router.get("/", protect, getPlans);
router.post("/", protect, createPlan);
router.delete("/:id", protect, deletePlan);

export default router;
