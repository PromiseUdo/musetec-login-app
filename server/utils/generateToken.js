import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT secret is not defined");
  }

  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
