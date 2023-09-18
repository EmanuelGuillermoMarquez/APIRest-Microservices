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

planetSchema.statics.list = async function() {
    return await this.find()
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function(id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function(planet) {
    return await this.create(planet);
};

planetSchema.statics.update = async function(id, data) {
    return await this.findByIdAndUpdate(id, data, {returnDocument: "after"});
};

planetSchema.statics.delete = async function(id) {
    return await this.findByIdAndRemove(id);
};

module.exports = planetSchema;