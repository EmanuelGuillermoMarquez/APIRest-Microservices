const { Router } = require("express");

const router = Router();

//router.get("/", (req, res) => res.status(200).send("Hello World. Welcome to my microservices API Rest"));

router.use("/planets", require("./routes"));

module.exports = router;