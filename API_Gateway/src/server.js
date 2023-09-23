const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const proxyMiddleware = createProxyMiddleware;

const server = express();

server.use(morgan("dev"));

server.use("/characters", proxyMiddleware({
    target:"http://characters_service:8001",		// [Nombre de la imagen contenedora del microservicio dentro de la red docker]:puerto
	changeOrigin:true
    })
);

server.use("/films", proxyMiddleware({
	target:"http://films_service:8002",		// [Nombre de la imagen contenedora del microservicio dentro de la red docker]:puerto
	changeOrigin:true
    })
);

server.use("/planets", proxyMiddleware({
	target:"http://planets_service:8003",		// [Nombre de la imagen contenedora del microservicio dentro de la red docker]:puerto
	changeOrigin:true
    })
);

server.use("/", require("./routes"));

server.use("*", (req, res) => res.status(404).send("Not found"));


module.exports = server;