//const Planets = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const planets = await axios.get("http://api_database:8004/Planets").then((res) => res.data);
    response(res, 200, planets);
};