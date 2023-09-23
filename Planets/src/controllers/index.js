const { catchedAsync } = require("../utils");

module.exports = {
    listPlanets: catchedAsync(require("./listPlanets")),
    getPlanet: catchedAsync(require("./getPlanet")),
    createPlanet: catchedAsync(require("./createPlanet")),
    updatePlanet: catchedAsync(require("./updatePlanet")),
    deletePlanet: catchedAsync(require("./deletePlanet")),
};