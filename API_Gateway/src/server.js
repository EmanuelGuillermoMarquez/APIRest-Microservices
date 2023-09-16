const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const proxyMiddleware = createProxyMiddleware;

const server = express();

server.use(morgan("dev"));

server.use("/characters", proxyMiddleware({
    target:"http://characters_service:8001",
	changeOrigin:true
    })
);

server.use("/films", proxyMiddleware({
	target:"http://films_service:8002",
	changeOrigin:true
    })
);

server.use("/planets", proxyMiddleware({
	target:"http://planets_service:8003",
	changeOrigin:true
    })
);

server.use("/", require("./routes"));

server.use("*", (req, res) => res.status(404).send("Not found"));


module.exports = server;