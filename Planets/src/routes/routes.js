const { Router } = require("express");
const controllers = require("../controllers");

const planetsRouter = Router();

planetsRouter.get("/", controllers.getPlanets);

module.exports = planetsRouter;