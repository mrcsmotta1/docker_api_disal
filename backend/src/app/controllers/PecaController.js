const express = require("express");

const Peca = require("../models/Peca");

const router = express.Router();

//inserte peca
router.post("/register", async (req, res) => {
  try {
    const peca = await Peca.create(req.body);
    console.log("peca: " + peca);
    return peca == null
      ? res.status(404).json({ message: "peca not found" })
      : res.status(201).send(peca);
  } catch (e) {
    if (e.code == 11000) {
      return res.status(409).json({ error: "Duplicate record" });
    }

    return res.status(400).json({ error: "Registration failed" });
  }
});

//list
router.post("/register", async (req, res) => {
  try {
    const peca = await Peca.create(req.body);
    console.log("peca: " + peca);
    return peca == null
      ? res.status(404).json({ message: "peca not found" })
      : res.status(201).send(peca);
  } catch (e) {
    if (e.code == 11000) {
      return res.status(409).json({ error: "Duplicate record" });
    }

    return res.status(400).json({ error: "Registration failed" });
  }
});

module.exports = (app) => app.use("/auth", router);
