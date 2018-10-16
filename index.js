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


    var conn = require('mongoskin').db('mongodb+srv://loic:admin123@pokecardduel-f4df5.mongodb.net/pokecard?retryWrites=true').db
    console.log(conn);

    /*console.log("efmohezfpio");
    var test = MongoClient.connect(uri, function(err, client) {
      const collection = client.db("Pokecard").collection("User");
      console.log(err);
      console.log(client);

      // perform actions on the collection object
      client.close();
     });     

 

*/
    
    res.send("Project initialiser")
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



