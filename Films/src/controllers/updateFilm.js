const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const data = req.body
    const updatedFilm = await axios.post(`http://api_database:8004/Films/${id}`, data).then((res) => res.data);
    response(res, 200, updatedFilm);
};