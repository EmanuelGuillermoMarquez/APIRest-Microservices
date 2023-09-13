const { Router } = require("express");
const characters = require("../data/characters.json");

const charactersRouter = Router();

charactersRouter.get("/", (req, res) => {
    res.status(200).json(characters);
});

module.exports = charactersRouter;