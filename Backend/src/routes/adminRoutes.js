import express from "express";
import {
  getPendingDoctors,
  approveDoctor,
  rejectDoctor
} from "../controllers/adminController.js";

import verifyAuth from "../middleware/verifyAuth.js";
import verifyRole from "../middleware/verifyRole.js";

const router = express.Router();

router.get("/pending", verifyAuth, verifyRole("admin"), getPendingDoctors);
router.post("/approve/:id", verifyAuth, verifyRole("admin"), approveDoctor);
router.post("/reject/:id", verifyAuth, verifyRole("admin"), rejectDoctor);

export default router;
