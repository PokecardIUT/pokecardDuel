const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient;
const mongoskin = require('mongoskin')

const uri = "mongodb+srv://loic:admin123@pokecardduel-f4df5.mongodb.net/Pokecard?retryWrites=true";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {


    MongoClient.connect(uri, function(err, client) {
      if(err) {
           console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
      }
      console.log('Connected...');
      const collection = client.db("Pokecard").collection("Users");
      console.log(collection.find());

      client.close();
   });
 


    
    res.send("Project initialiser")
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



