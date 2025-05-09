import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";

const app = express();
const PORT = process.env.PORT;
dotenv.config();
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
