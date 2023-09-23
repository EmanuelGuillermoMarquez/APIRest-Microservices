const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedCharacter = await axios.post(`http://api_database:8004/Characters/${id}`, data).then((res) => res.data);
    response(res, 200, updatedCharacter);
};