const { Schema } = require("mongoose");

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String, //Ver hacerlo como menu de opciones [MALE, FEMALE, UNKNOWN, N/A]
    homeworld: {type: String, ref: "Planet"}, //Referencia al ID del Planeta
    films: [{type: String, ref: "Film"}] //Array de refencias al ID de las peliculas
});

module.exports = characterSchema;