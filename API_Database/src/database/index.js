const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/env");

const conn = mongoose.createConnection(MONGODB_URI);

const Characters = conn.model("Character", require("./schemas/characterSchema"));
const Films = conn.model("Film", require("./schemas/filmSchema"));
const Planets = conn.model("Planet", require("./schemas/planetSchema"));


/* Characters.find()
    .populate("films", ["_id", "title"])
    .then(res => console.log(res[0]));
 */

module.exports = {
    Characters,
    Films,
    Planets
}