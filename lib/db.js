export const connectDB = async () => {
  const mongoose = require("mongoose");
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
};

// STEP 3 — User Model (models/User.js)
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);