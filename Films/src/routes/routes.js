const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const filmsRouter = Router();

filmsRouter.get("/", controllers.getFilms);
filmsRouter.post("/", middlewares.filmValidator, controllers.createFilm);

module.exports = filmsRouter;