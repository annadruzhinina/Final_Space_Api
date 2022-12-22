import Characters from "../models/Characters.js";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.find();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCharacter1 = async (req, res) => {
  try {
    const { id } = req.params;
    const character1 = await Characters.findById(id);

    if (character1) {
      return res.json(character1);
    }

    res.status(404).json({ message: "Character not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCharacters = async (req, res) => {
  try {
    const characters = new Characters(req.body);
    await characters.save();
    res.status(201).json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const characters = await Characters.findByIdAndUpdate(id, req.body);
    res.status(201).json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Characters.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character deleted!");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};