import mongoose from "mongoose";
import chalk from "chalk";

// mongoose.set("returnOriginal", false);
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL);

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Final_Space_Api"

mongoose.connect(url).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

export default mongoose.connection;
