const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:disal@127.0.0.1:27017/cadastropeca?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

mongoose.connection.on("open", (err) => {
  if (err) console.log("Error connecting to our mongo database");
  console.log("Connected to mongo database successfully");
});

mongoose.connection.on("error", function (error) {
  console.log("Erro na conexão: " + error);
  if (error) {
    mongoose.connect(
      "mongodb://root:disal@mongo/cadastropeca?authSource=admin",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    mongoose.connection.on("open", (err) => {
      if (err) console.log("Error connecting to our mongo database");
      console.log(
        "Connected to mongo database successfully for second connection"
      );
    });
  }
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
