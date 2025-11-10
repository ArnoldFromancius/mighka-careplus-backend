// routes/clients.js
import express from "express";
import Client from "../models/client.js";

const router = express.Router();

// GET all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    console.log("Fetched clients:", clients);
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new client
router.post("/", async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a client
router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

