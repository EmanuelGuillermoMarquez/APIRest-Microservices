const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const charactersRouter = Router();

charactersRouter.get("/", controllers.getCharacters);
charactersRouter.post("/", middlewares.characterValidator, controllers.createCharacter);

module.exports = charactersRouter;