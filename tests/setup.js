import mongoose from "mongoose";
import User from "../src/models/User.js";
import Task from "../src/models/Task.js";
import "../src/app.js";

beforeAll(async () => {
	if (mongoose.connection.readyState === 0) {
		await mongoose.connection.asPromise();
	}

	await Promise.all([User.deleteMany({}), Task.deleteMany({})]);
});

afterAll(async () => {
	await mongoose.connection.close();
});