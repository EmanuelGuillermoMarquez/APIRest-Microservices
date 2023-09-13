const express = require("express");
const morgan = require("morgan");

const {createProxyMiddleware} = require("http-proxy-middleware");
const proxyMiddleware = createProxyMiddleware;

const server = express();

server.use(morgan("dev"));

server.use("/characters", proxyMiddleware({
    target:"http://localhost:8001",
	changeOrigin:true
    })
);

server.use("/films", proxyMiddleware({
	target:"http://localhost:8002",
	changeOrigin:true
    })
);

server.use("/planets", proxyMiddleware({
	target:"http://localhost:8003",
	changeOrigin:true
    })
);

module.exports = server;