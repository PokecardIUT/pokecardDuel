const mongoose = require("mongoose");
const URL_READ =
  "mongodb://Lire:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";
const URL_ALL =
  "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
mongoose.set("useCreateIndex", true);

var auth = {
  loginWithEmail: function(req, res) {
    mongoose
      .connect(
        URL_READ,
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
          console.log(isMatch);

          if (isMatch == true) {
            mongoose.connection.close();
            res.json(message.success.login);
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
        URL_ALL,
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

module.exports = auth;
