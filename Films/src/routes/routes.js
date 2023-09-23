const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const filmsRouter = Router();

filmsRouter.get("/", controllers.listFilms);
filmsRouter.get("/:id", middlewares.searchValidator, controllers.getFilm);
filmsRouter.post("/", middlewares.filmValidator, controllers.createFilm);
filmsRouter.post("/:id", middlewares.searchValidator, controllers.updateFilm);
filmsRouter.delete("/:id", middlewares.searchValidator, controllers.deleteFilm);



module.exports = filmsRouter;