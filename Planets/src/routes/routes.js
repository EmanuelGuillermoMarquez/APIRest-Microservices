const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const planetsRouter = Router();

planetsRouter.get("/", controllers.listPlanets);
planetsRouter.get("/:id", middlewares.searchValidator, controllers.getPlanet);
planetsRouter.post("/", middlewares.planetValidator, controllers.createPlanet);
planetsRouter.post("/:id", middlewares.searchValidator, controllers.updatePlanet);
planetsRouter.delete("/:id", middlewares.searchValidator, controllers.deletePlanet);

module.exports = planetsRouter;