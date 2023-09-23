const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const charactersRouter = Router();

charactersRouter.get("/", controllers.listCharacters);
charactersRouter.get("/:id", middlewares.searchValidator, controllers.getCharacter);
charactersRouter.post("/", middlewares.characterValidator, controllers.createCharacter);
charactersRouter.post("/:id", middlewares.searchValidator, controllers.updateCharacter);
charactersRouter.delete("/:id", middlewares.searchValidator, controllers.deleteCharacter);

module.exports = charactersRouter;