//const Films = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body
    const newFilm = await axios.post("http://api_database:8004/Films", data).then((res) => res.data);
    response(res, 200, newFilm);
};