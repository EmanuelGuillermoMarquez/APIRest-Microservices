const { catchedAsync } = require("../utils");

module.exports = {
    listFilms: catchedAsync(require("./listFilms")),
    getFilm: catchedAsync(require("./getFilm")),
    createFilm: catchedAsync(require("./createFilms")),
    updateFilm: catchedAsync(require("./updateFilm")),
    deleteFilm: catchedAsync(require("./deleteFilm")),
};