const jwt = require("jwt-simple");
const mongoose = require("mongoose");
var urlDatabase = require("../config/database")
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");

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
  }
};

module.exports = api;
