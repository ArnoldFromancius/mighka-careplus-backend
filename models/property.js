import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  address: { type: String, required: true },
  type: { type: String }, // e.g., House, Apartment, Office
  installations: [
    {
      item: { type: String },
      installedDate: { type: Date },
      notes: { type: String }
    }
  ]
});

export default mongoose.model("Property", propertySchema);

