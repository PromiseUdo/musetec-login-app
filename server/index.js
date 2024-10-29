import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const corsOptions = {
  origin: "https://musetec-login-app.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server has started"));

app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

export default app;
