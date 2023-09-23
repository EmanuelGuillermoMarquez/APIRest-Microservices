//const Characters = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const characters = await axios.get("http://api_database:8004/Characters").then((res) => res.data);
    response(res, 200, characters);
};