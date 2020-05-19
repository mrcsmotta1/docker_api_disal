const express = require("express");

const PORT = 5000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word.");
});

app.listen(PORT, (HOST) => {
  console.log("Servidor em execução na porta " + PORT);
});
