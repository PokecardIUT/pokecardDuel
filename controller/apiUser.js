const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
require("isomorphic-fetch");

var apiUser = {
  getUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.query.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }

      if (user != null) {
        let response = { ...message.success.userFind, user };
        res.json(response);
      } else {
        res.json(message.error.noUser);
      }
    });
  },
  getUsers: (req, res) => {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );
    User.find((err, users) => {
      mongoose.connection.close();
      res.json(users);
    });
  },
};

module.exports = apiUser;
