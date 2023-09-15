const planets = require("./planets.json");

module.exports = {
    list: async () => planets,
    create: async () => {
        throw Error("Hubo un error en la creación del planeta");
    },
};