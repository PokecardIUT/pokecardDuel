const jwt = require("jwt-simple");
const mongoose = require("mongoose");
var urlDatabase = require("../config/database")
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
const apiPokemonTGC = require("pokemontcgsdk").set;

var api = {
  test: function(req, res) {
    mongoose
      .connect(
        urlDatabase.URL_ALL,
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
  },
  getDeck: function(req,res){
    apiPokemonTGC.where({}).then(data => res.json(data));
  }
};

module.exports = api;
