const express = require("express");
const routes = express.Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PecaController = require("./../app/controllers/PecaController");

// Extended: https://swagger.io/specification/#referenceObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Disal de Peças",
      version: "1.0.0",
      descritpion: "Documentação API de Peças",
      contact: {
        name: "Marcos Pedroso Motta",
        url: "https://www.linkedin.com/in/marcos-pedroso-motta-62662931/",
        email: "mrcsmotta1@gmail.com",
      },
      server: ["http://localhst:5000"],
    },
  },
  apis: ["./src/app/controllers/PecaController.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.post("/register", PecaController.create);
routes.get("/registers", PecaController.list);
routes.get("/register/id/:pecaID", PecaController.selectId);
routes.put("/register/id/:pecaID", PecaController.updateId);
routes.delete("/register/id/:pecaID", PecaController.deleteId);
routes.get("/register/os/:pecaOS", PecaController.selectOs);
routes.put("/register/os/:pecaOS", PecaController.updateOs);
routes.delete("/register/os/:pecaOS", PecaController.deleteOs);
routes.get("/qrcode/:parametro", PecaController.qrcode);
module.exports = routes;
