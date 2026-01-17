import User from "../models/User.js";
import bcrypt from "bcrypt";

export const seedAdmin = async () => {
  const exists = await User.findOne({ role: "admin" });

  if (!exists) {
    const hash = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "System Admin",
      email: "admin@system.com",
      passwordHash: hash,
      role: "admin",
    });

    console.log("Admin Created: admin@system.com / admin123");
  }
};
