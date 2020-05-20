const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000;
const HOST = "0.0.0.0";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Word.");
});

require("./controllers/authController")(app);

app.listen(PORT, (HOST) => {
  console.log("Servidor em execução na porta " + PORT);
});
