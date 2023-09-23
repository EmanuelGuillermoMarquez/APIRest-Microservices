const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { _id , name } = req.body;
    if(_id && name) return next();
    else throw new ClientError("Error en los datos ingresados", 400);
};