const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const film = await axios.get(`http://api_database:8004/Films/${id}`).then((res) => res.data);
    response(res, 200, film);
};