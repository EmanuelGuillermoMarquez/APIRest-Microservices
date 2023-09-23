const { Router } = require("express");
const middlewares = require("../middlewares");
const controllers = require("../controllers");

const databaseRouter = Router();

databaseRouter.get("/:model", middlewares.validateModels, controllers.listData);
databaseRouter.get("/:model/:id", middlewares.validateModels, controllers.getData);
databaseRouter.post("/:model", middlewares.validateModels, controllers.createData);
databaseRouter.post("/:model/:id", middlewares.validateModels, controllers.updateData);
databaseRouter.delete("/:model/:id", middlewares.validateModels, controllers.deleteData);


module.exports = databaseRouter;