//const Characters = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body;
    const newCharacter = await axios.post("http://api_database:8004/Characters", data).then((res) => res.data);
    response(res, 200, newCharacter);
};