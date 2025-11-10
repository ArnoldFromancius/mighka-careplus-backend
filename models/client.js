import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
  properties: Array
}, { collection: "clients" });

export default mongoose.model("Client", clientSchema);

