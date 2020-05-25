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
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

PecaSchema.pre("findOneAndUpdate", function (next) {
  this._update.updated_at = Date.now();

  next();
});

const Peca = mongoose.model("Peca", PecaSchema);

module.exports = Peca;
