import express from "express";
import Client from "../models/client.js";

const router = express.Router();

// READ all clients
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// CREATE a client
router.post("/", async (req, res) => {
  const newClient = new Client(req.body);
  await newClient.save();
  res.status(201).json(newClient);
});

// UPDATE a client
router.put("/:id", async (req, res) => {
  const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedClient);
});

// DELETE a client
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client deleted" });
});

export default router;

