const { catchedAsync } = require("../utils");

module.exports = {
    listCharacters: catchedAsync(require("./listCharacters")),
    getCharacter: catchedAsync(require("./getCharacter")),
    createCharacter: catchedAsync(require("./createCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter")),
    deleteCharacter: catchedAsync(require("./deleteCharacter")),
};