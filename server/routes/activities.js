import express from "express";
import {
  getActivities,
  createActivity,
  updateActivity,
} from "../controllers/activities.js";

const router = express.Router();

router.get("/", getActivities);
router.post("/", createActivity);
router.patch("/:id", updateActivity);

export default router;
