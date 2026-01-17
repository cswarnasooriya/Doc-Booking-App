import User from "../models/User.js";

export const getPendingDoctors = async (req, res) => {
  const doctors = await User.find({
    role: "doctor",
    "doctor.status": "pending"
  });

  res.json(doctors);
};

export const approveDoctor = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    "doctor.status": "active"
  });

  res.json({ message: "Doctor approved" });
};

export const rejectDoctor = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    "doctor.status": "suspended"
  });

  res.json({ message: "Doctor rejected" });
};
