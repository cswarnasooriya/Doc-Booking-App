import User from "../models/User.js";

export const getPendingDoctors = async (req, res) => {
  const docs = await User.find({
    role: "doctor",
    "doctor.status": "pending"
  }).select("-passwordHash"); // hide password

  res.json(docs);
};


export const approveDoctor = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    $set: { "doctor.status": "active" }
  });

  res.json({ message: "Doctor approved" });
};


export const rejectDoctor = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    $set: { "doctor.status": "suspended" }
  });

  res.json({ message: "Doctor rejected" });
};
