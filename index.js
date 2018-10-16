const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const uri = "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";

var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use( bodyParser.json() );
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use('/', require('./routes'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



