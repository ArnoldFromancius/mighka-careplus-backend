import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
  service: { type: String, required: true }, // e.g., Plumbing, Electrical
  scheduledDate: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "completed", "canceled"], 
    default: "pending" 
  },
  notes: { type: String }
});

export default mongoose.model("Job", jobSchema);

