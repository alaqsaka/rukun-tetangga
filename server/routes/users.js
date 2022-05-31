import express from "express";
import { signin, signup, lengkapi_data_ketua } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/lengkapi-data-ketua/:id", lengkapi_data_ketua);

export default router;
