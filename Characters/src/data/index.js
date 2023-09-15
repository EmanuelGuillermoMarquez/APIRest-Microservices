const characters = require("./characters.json");

module.exports = {
    list: async () => characters,
    create: async () => {
        throw Error("Hubo un error en la creación del personaje");
    },
};