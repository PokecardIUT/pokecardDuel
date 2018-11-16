const jwt = require("jwt-simple");
const mongoose = require("mongoose");
const URL_ALL =
  "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");

var api = {
  test: function(req, res) {
    mongoose
      .connect(
        URL_ALL,
        { useNewUrlParser: true }
      )
      .then(
        () => {
          res.send("Succes !!");
        },
        err => {
          res.json(message.error.database);
        }
      );
  }
};

module.exports = api;
