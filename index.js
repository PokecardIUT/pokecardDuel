const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')

const uri = "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/test?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {


    mongoose.connect(uri).then(
      () => {
        console.log("Database connection established!");
      },
      err => {
        console.log("Error connecting Database instance due to: ", err);
      }
    );

  //   MongoClient.connect(uri, function(err, client) {
  //     if(err) {
  //          console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  //     }
  //     console.log('Connected...');
  //     const collection = client.db("Pokecard").collection("Users");
  //     console.log(collection.find());

  //     client.close();
  //  });
 
  
    

    
    res.send("Project initialiser")
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



