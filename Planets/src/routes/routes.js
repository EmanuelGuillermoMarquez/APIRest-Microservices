const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const planetsRouter = Router();

planetsRouter.get("/", controllers.getPlanets);
planetsRouter.post("/", middlewares.planetValidator, controllers.createPlanet);

module.exports = planetsRouter;