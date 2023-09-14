const { Router } = require("express");
const controllers = require("../controllers");

const charactersRouter = Router();

charactersRouter.get("/", controllers.getCharacters);
charactersRouter.post("/", controllers.createCharacter);

module.exports = charactersRouter;