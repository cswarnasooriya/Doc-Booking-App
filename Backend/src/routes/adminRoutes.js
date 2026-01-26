import { Router } from "express";
import { requireAdmin } from "../middleware/authMiddleware.js";
import {
  getPendingDoctors,
  approveDoctor,
  rejectDoctor
} from "../controllers/adminController.js";

const router = Router();

// fetch pending
router.get("/doctors/pending", requireAdmin, getPendingDoctors);

// approve
router.post("/doctors/approve/:id", requireAdmin, approveDoctor);

// reject
router.post("/doctors/reject/:id", requireAdmin, rejectDoctor);

export default router;
