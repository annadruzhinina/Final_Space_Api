import db from "./db/connections.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(`Express server is running in development on port ${PORT}`);
  });
});
