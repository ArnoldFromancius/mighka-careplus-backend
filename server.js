// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// test route
app.get("/", (req, res) => {
  res.send("Hello from mighka backend");
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

