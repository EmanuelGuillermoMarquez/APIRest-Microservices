const dbStore = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const data = await dbStore[model].get(id);
    response(res, 200, data);
};