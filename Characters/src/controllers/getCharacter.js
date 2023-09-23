//const Characters = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const character = await axios.get(`http://api_database:8004/Characters/${id}`).then((res) => res.data);
    response(res, 200, character);
};