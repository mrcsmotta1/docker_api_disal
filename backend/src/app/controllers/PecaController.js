const express = require("express");

const Peca = require("../models/Peca");

module.exports = {
  //inserte peca
  async create(req, res) {
    try {
      const peca = await Peca.create(req.body);
      return peca == null
        ? res.status(404).json({ message: "peca not found" })
        : res.status(201).send(peca);
    } catch (e) {
      if (e.code == 11000) {
        return res.status(409).json({ error: "Duplicate record" });
      }
      return res.status(400).json({ error: "Registration failed" });
    }
  },

  //listagem
  async list(req, res) {
    try {
      const pecas = await Peca.find();
      return pecas == null
        ? res.status(404).json({ message: "pecas not found" })
        : res.status(201).send(pecas);
    } catch (e) {
      return res.status(400).json({ error: "Select failed" });
    }
  },

  //listagem pelo id
  async select(req, res) {
    try {
      const peca = await Peca.findById(req.params.pecaID);
      return peca == null
        ? res.status(404).json({ message: "peca not found" })
        : res.status(200).send(peca);
    } catch (e) {
      return res.status(400).json({ error: "Select failed" });
    }
  },

  //update pelo id
  async update(req, res) {
    try {
      const peca = await Peca.findByIdAndUpdate(req.params.pecaID, req.body, {
        new: true,
      });
      return peca == null
        ? res.status(404).json({ message: "peca not found" })
        : res.status(200).send(peca);
    } catch (e) {
      return res.status(400).json({ error: "Update failed" });
    }
  },

  //update pelo id
  async delete(req, res) {
    try {
      const peca = await Peca.findByIdAndDelete(req.params.pecaID);
      return peca == null
        ? res.status(404).json({ message: "peca not found" })
        : res.status(200).json({ message: "ok" });
    } catch (e) {
      return res.status(400).json({ error: "Delete failed" });
    }
  },
};
