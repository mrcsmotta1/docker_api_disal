const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:disal@mongo:27017/cadastropeca?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("open", (err) => {
  if (err) console.log("Error connecting to our mongo database");
  console.log("Connected to mongo database successfully");
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
