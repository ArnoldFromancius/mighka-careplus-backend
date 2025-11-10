// models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed later
  role: { type: String, enum: ["admin", "client"], required: true },
});

export default mongoose.model("User", userSchema);

