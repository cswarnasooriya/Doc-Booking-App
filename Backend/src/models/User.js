import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["patient", "doctor", "admin"] },

  phone: String,
  gender: String,

  doctor: {
    specialization: String,
    experience: Number,
    status: { type: String, enum: ["pending", "active", "suspended"] },
  },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
