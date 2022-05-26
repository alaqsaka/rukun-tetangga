import express from "express";
import {
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
  likeActivity,
} from "../controllers/activities.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getActivities);
router.post("/", auth, createActivity);
router.patch("/:id", auth, updateActivity);
router.delete("/:id", auth, deleteActivity);
router.patch("/:id/likeActivity", auth, likeActivity);

export default router;
