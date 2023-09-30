const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send({
    error: false,
    message: "Hello World. Welcome to my microservices API Rest"
}));

module.exports = router;