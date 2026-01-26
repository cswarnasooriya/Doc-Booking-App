import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../src/models/User.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hash = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@test.com",
    passwordHash: hash,
    role: "admin",
  });

  console.log("Admin created: admin@test.com / admin123");
  process.exit();
});
