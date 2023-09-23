const dbStore = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const deletedInfo = await dbStore[model].delete(id);
    response(res, 200, deletedInfo);
};