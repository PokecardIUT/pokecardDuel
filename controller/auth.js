const mongoose = require('mongoose')
const URL_READ = "mongodb://Lire:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true"
const URL_ALL = "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true"
var User = require('../model/UserSchema.js');
const message = require('../message/message.js');
mongoose.set('useCreateIndex', true)

var auth = {

  loginWithEmail: function (req, res) {

    mongoose.connect(URL_READ, { useNewUrlParser: true }).then(
      () => {
      },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) throw err;

      if (user != null) {

        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) throw err;
          console.log(isMatch);

          if (isMatch == true) {
            mongoose.connection.close();
            var conn = mongoose.connect(URL_ALL, { useNewUrlParser: true }).then(
              () => {
                res.json(message.success.login);
              },
              err => {
                res.json(message.error.database);
              }
            );
          } else {
            res.json(message.error.authentication);
          }

        });
      }
      else {
        res.json(message.error.authentication);
      }

    });

  }

}

module.exports = auth


// // create a user a new user
// var testUser = new User({
//   username: 'jmar777',
//   password: 'Password123';
// });

// // save user to database
// testUser.save(function(err) {
//   if (err) throw err;
// });