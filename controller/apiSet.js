const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
require("isomorphic-fetch");

const API_URL_SETS = "https://api.pokemontcg.io/v1/sets";

var apiSet = {
  getSets: function (req, res) {
    const url = `${API_URL_SETS}`;
    fetch(url)
      .then(response => response.json())
      .then(sets => {
        return res.json(sets);
      })
      .catch(error => {
        return res.json(error);
      });
  },

  addSetToUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        obj = JSON.parse(req.body.set)
        user.sets.push(obj);
        // save cards to user
        user.save(function (err) {
          if (err) {
            res.json(message.error.database);
          } else {
            mongoose.connection.close();
            res.json(message.success.updateSet);
          }
        });
      } else {
        res.json(message.error.noUser);
      }
    });
  },
};

module.exports = apiSet;
