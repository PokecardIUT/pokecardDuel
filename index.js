const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')

const uri = "mongodb+srv://loic:admin123@pokecardduel-f4df5.mongodb.net/Pokecard";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {

    mongoose.connect(uri);
    var db = mongoose.connection;

    db.on("success", () => {

      console.log("succes");

    });

    db.on("error", () => {

      console.log("error");

    });

    console.log("efmohezfpio");
    
    res.send("Project initialiser")
  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



