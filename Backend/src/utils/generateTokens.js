import jwt from "jsonwebtoken";

export const generateAccessToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

export const generateRefreshToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};
