import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Quotes = new Schema({
  quote: String,
  by: String,
  character: String,
  image: String,
})

export default mongoose.model("quotes", Quotes);