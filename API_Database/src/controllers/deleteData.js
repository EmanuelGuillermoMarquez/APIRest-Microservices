const { NotFoundError } = require("../utils/errors");
const dbStore = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const deleted = await dbStore[model].delete(id);
    if(!deleted) throw new NotFoundError("Información no encontrada", 404);
    else response(res, 200, deleted, "Información eliminada");
};