import express from "express";
import {
  patientRegister,
  doctorRegister,
  login
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register-patient", patientRegister);
router.post("/register-doctor", doctorRegister);
router.post("/login", login);

export default router;
