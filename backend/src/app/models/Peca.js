const mongoose = require("../../database");

const PecaSchema = new mongoose.Schema({
  //nome descricao peso data fabricaca os producao
  os: {
    type: Number,
    required: true,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  peso: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  datafabricacao: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Peca = mongoose.model("Peca", PecaSchema);

module.exports = Peca;
