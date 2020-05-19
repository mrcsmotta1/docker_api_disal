const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cadastropeca", {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
