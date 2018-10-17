const mongoose = require('mongoose')
const uri = "mongodb://Lire:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";


var auth = {

    login: function(req,res){

        mongoose.connect(uri).then(
            () => {
              console.log("Database connection established!");
            },
            err => {
              console.log("Error connecting Database instance due to: ", err);
            }
          );
      
          res.send("Project initialiser")


    }



}

module.exports = auth