import express from "express";
import cors from "cors";
import scrape from "./routes/scrape.js";
import news from "./routes/news.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "../client/dist");

app.use(cors());
app.use(express.json());

app.use("/scrape", scrape);
app.use("/api/news", news);

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
