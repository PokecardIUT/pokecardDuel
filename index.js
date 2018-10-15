const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://loic:admin123@pokecardduel-f4df5.mongodb.net/test?retryWrites=true";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {

    console.log("efmohezfpio");
    var test = MongoClient.connect(uri, function(err, client) {
      const collection = client.db("test").collection("devices");
      console.log("test");
      res.send("Connecter")
      
      // perform actions on the collection object
      client.close();
     });     

    
    res.send("Project initialiser")
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



