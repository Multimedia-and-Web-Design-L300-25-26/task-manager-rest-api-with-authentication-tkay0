import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

// Trigger DB initialization for both server runtime and tests using app import.
const dbReady = connectDB();

const app = express();

app.use(express.json());

app.use(async (req, res, next) => {
	try {
		await dbReady;
		return next();
	} catch (error) {
		return res.status(500).json({ message: "Database connection is not available" });
	}
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;