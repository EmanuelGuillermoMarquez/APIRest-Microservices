const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { model } = req.params;
    if(["Characters", "Films", "Planets"].includes(model)) return next();
    else throw new ClientError("Modelo invalido", 401);
};