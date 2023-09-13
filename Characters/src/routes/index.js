const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World. Welcome to my microservices API Rest"));

router.use("/characters", require("./routes"));

module.exports = router;