//const Films = require("../data");
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const films = await axios.get("http://api_database:8004/Films").then((res) => res.data);
    response(res, 200, films);
};