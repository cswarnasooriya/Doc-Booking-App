import {
  registerPatient,
  registerDoctor,
  loginUser
} from "../services/authService.js";

import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/generateTokens.js";

export const patientRegister = async (req, res) => {
  try {
    const user = await registerPatient(req.body);
    res.json({ message: "Patient registered", role: user.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const doctorRegister = async (req, res) => {
  try {
    const user = await registerDoctor(req.body);
    res.json({ message: "Doctor registered; awaiting approval", role: user.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);

    // doctor can't login until approved
    if (user.role === "doctor" && user.doctor.status !== "active") {
      return res.status(403).json({ error: "Doctor not approved yet" });
    }

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id, user.role);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, // change to true in production/https
    });

    res.json({
      accessToken,
      role: user.role,
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
