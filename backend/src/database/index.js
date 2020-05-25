const mongoose = require("mongoose");

const uriToTest =
  "mongodb://root:disal@127.0.0.1:27017/cadastropeca?authSource=admin";
const uriToDocker = "mongodb://root:disal@mongo/cadastropeca?authSource=admin";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uriToTest, options).then(
  () => {
    console.log("Connected to mongo database successfully");
  },
  (err) => {
    console.log("Erro na conexão.");
    mongoose.connect(uriToDocker, options).then(() => {
      console.log(
        "Connected to mongo database successfully for second connection"
      );
    });
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
