import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Characters = new Schema({
  name: String,
  status: String,
  species: String,
  gender: String,
  hair: String,
  alias: [String],
    origin: String,
    abilities: [String],
    img_url: String,
  },
);

export default mongoose.model("characters", Characters);