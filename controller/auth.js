const jwt = require('jwt-simple');
const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
mongoose.set("useCreateIndex", true);


var auth = {
  loginWithEmail: function(req, res) {
    mongoose
      .connect(
        urlDatabase.URL_READ,
        { useNewUrlParser: true }
      )
      .then(
        () => {},
        err => {
          res.json(message.error.database);
        }
      );

    User.findOne({ username: req.body.username }, function(err, user) {
      if (err) throw err;

      if (user != null) {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;

          if (isMatch == true) {
            mongoose.connection.close();
            var successConnection = {
              success: message.success.login,
              token: genToken(req.body.username)
            }
            res.json(successConnection);
          } else {
            res.json(message.error.authentication);
          }
        });
      } else {
        res.json(message.error.authentication);
      }
    });
  },

  signup: function(req, res) {
    mongoose
      .connect(
        urlDatabase.URL_ALL,
        { useNewUrlParser: true }
      )
      .then(
        () => {},
        err => {
          res.json(message.error.database);
        }
      );

    // create a user a new user
    var tmpUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    User.findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        res.json(message.error.database);
      }

      if (user == null) {
        // save user to database
        tmpUser.save(function(err) {
          if (err) {
            res.json(message.error.database);
          } else {
            mongoose.connection.close();
            res.json(message.success.ajout);
          }
        });
      } else {
        res.json(message.error.emailUse);
      }
    });
  }
};

function genToken(username) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  return {
    token: token,
    expires: expires,
    username: username
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
