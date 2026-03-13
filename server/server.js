import express from "express";
import cors from "cors";
import scrape from "./routes/scrape.js";
import news from "./routes/news.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use("/scrape", scrape);
app.use("/api/news", news);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
