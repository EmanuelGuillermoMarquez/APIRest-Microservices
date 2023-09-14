const characters = require("../data/characters.json");

module.exports = (req, res) => {
    res.status(200).json(characters);
};