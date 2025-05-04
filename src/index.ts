import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hello BUN" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
