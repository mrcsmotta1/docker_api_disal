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
  // ['./src/controllers/ProductController/*.js']
  apis: ["./src/app/controllers/PecaController.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.get("/registers", PecaController.list);
routes.get("/register/:pecaID", PecaController.select);
routes.post("/register", PecaController.create);
routes.put("/register/:pecaID", PecaController.update);
routes.delete("/register/:pecaID", PecaController.delete);

module.exports = routes;
