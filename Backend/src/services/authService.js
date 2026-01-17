import bcrypt from "bcrypt";
import User from "../models/User.js";

export const registerPatient = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("Email already registered");

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash: hash,
    role: "patient",
  });

  return user;
};

export const registerDoctor = async ({ name, email, password, specialization, experience }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("Email already registered");

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash: hash,
    role: "doctor",
    doctor: {
      specialization,
      experience,
      status: "pending", // !!! KEY
    },
  });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) throw new Error("Invalid credentials");

  return user;
};
