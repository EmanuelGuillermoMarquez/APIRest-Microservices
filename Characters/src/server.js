const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));
server.use("*", (req, res) => res.status(404).send({
    error: true,
    message:"No se ha encontrado"
}));
server.use((err, req, res, next) => res.status(err.statusCode || err.response?.status || 500).send({
    error: true,
    message: err.response?.data?.message || err.message
}));


module.exports = server;