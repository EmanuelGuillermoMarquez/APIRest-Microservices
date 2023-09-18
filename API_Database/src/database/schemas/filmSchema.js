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

module.exports = filmSchema;