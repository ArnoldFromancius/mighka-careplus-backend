// server.js
import express from "express";
import mongoose from "mongoose";
import Client from "./models/client.js";
import property from "./models/property.js";
import job from "./models/job.js";
import clientRoutes from "./routes/clients.js";
import propertyRoutes from "./routes/properties.js";
import jobRoutes from "./routes/jobs.js";
import dotenv from "dotenv";

dotenv.config(); // loads variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use("/clients", clientRoutes);
app.use("/properties", propertyRoutes);
app.use("/jobs", jobRoutes);


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch(err => {
  console.error(" MongoDB connection error:", err);
  process.exit(1); // stop server if DB connection fails
});


// Test route
app.get("/", (req, res) => {
  res.send("Hello from mighka backend with MongoDB!");
});


app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

