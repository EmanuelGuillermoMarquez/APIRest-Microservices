//const Planets = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body;
    const newPlanet = await axios.post("http://api_database:8004/Planets", data).then((res) => res.data);
    response(res, 200, newPlanet);
};