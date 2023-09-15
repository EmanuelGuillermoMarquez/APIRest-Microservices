const films = require("./films.json");

module.exports = {
    list: async () => films,
    create: async () => {
        throw Error("Hubo un error en la creación de la pelicula");
    },
};