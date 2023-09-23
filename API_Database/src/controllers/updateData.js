const dbStore = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const data = req.body;
    const updatedInfo = await dbStore[model].update(id, data);
    response(res, 200, updatedInfo);
};