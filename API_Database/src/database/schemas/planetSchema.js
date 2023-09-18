const { Schema } = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    terrain: String,
    surface_water: String,
    residents: [{type: String, ref: "Character"}], //Array de refencias al ID de los personajes
    films: [{type: String, ref: "Planet"}], //Array de refencias al ID de las peliculas
});

module.exports = planetSchema;