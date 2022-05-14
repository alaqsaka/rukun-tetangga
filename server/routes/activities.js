import express from "express";
import {
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
  likeActivity,
} from "../controllers/activities.js";

const router = express.Router();

router.get("/", getActivities);
router.post("/", createActivity);
router.patch("/:id", updateActivity);
router.delete("/:id", deleteActivity);
router.patch("/:id/likeActivity", likeActivity);

export default router;
