const { Schema } = require("mongoose");

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type: String, ref: "Character"}], //Array de refencias al ID de los personajes
    planets: [{type: String, ref: "Planet"}], //Array de refencias al ID de los planetas
});

filmSchema.statics.list = async function() {
    return await this.find()
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function(id) {
    return await this.findById(id)
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function(planet) {
    return await this.create(planet);
};

filmSchema.statics.update = async function(id, data) {
    return await this.findByIdAndUpdate(id, data, {returnDocument: "after"});
};

filmSchema.statics.delete = async function(id) {
    return await this.findByIdAndRemove(id);
};

module.exports = filmSchema;