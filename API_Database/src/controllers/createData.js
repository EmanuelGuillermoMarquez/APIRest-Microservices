const dbStore = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = req.body;
    console.log(data);
    const newData = await dbStore[model].insert(data);
    response(res, 200, newData);
};