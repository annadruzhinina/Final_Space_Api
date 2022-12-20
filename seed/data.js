import db from "../db/connection.js";
import Quotes from "../models/Quotes.js";
import Characters from "../models/Characters.js";
import quotes from "./quotes.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Characters.create(characters);
  await Quotes.create(quotes);

  await db.close();
};

insertData();