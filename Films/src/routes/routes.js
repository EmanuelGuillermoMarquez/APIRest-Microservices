const { Router } = require("express");
const controllers = require("../controllers");

const filmsRouter = Router();

filmsRouter.get("/", controllers.getFilms);

module.exports = filmsRouter;