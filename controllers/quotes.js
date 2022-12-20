import Quotes from "../models/Quotes.js";

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getQuote1 = async (req, res) => {
  try {
    const { id } = req.params;
    const quotes1 = await Quotes.findById(id).populate("members");

    if (quotes1) {
      return res.json(quotes1);
    }

    res.status(404).json({ message: "Quotes not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createQuotes = async (req, res) => {
  const quotes = new Quotes(req.body);
  await quotes.save();
  res.status(201).json(quotes);
};

export const updateQuotes = async (req, res) => {
  const { id } = req.params;
  const quotes = await Quotes.findByIdAndUpdate(id, req.body);
  res.status(201).json(quotes);
};

export const deleteQuotes = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Quotes.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Quotes deleted!");
    }

    throw new Error("Quotes not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
