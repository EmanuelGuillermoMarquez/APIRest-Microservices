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

characterSchema.statics.list = async function() {
    return await this.find()
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function(id) {
    return await this.findById(id)
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function(character) {
    return await this.create(character);
};

characterSchema.statics.update = async function(id, data) {
    return await this.findByIdAndUpdate(id, data, {returnDocument: "after"});
};

characterSchema.statics.delete = async function(id) {
    return await this.findByIdAndRemove(id);
};

module.exports = characterSchema;