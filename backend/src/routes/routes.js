const express = require("express");
const routes = express.Router();

const PecaController = require("./../app/controllers/PecaController");

routes.get("/registers", PecaController.list);
routes.get("/register/:pecaID", PecaController.select);
routes.post("/register", PecaController.create);
routes.put("/register/:pecaID", PecaController.update);
routes.delete("/register/:pecaID", PecaController.delete);

module.exports = routes;
