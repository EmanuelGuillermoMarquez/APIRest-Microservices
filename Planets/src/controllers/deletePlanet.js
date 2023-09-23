const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const deleted = await axios.delete(`http://api_database:8004/Planets/${id}`).then((res) => res.data);
    response(res, 200, deleted);
};