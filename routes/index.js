var express = require('express');
var router = express.Router();

app.get('/', (req, res) => {

    mongoose.connect(uri).then(
      () => {
        console.log("Database connection established!");
      },
      err => {
        console.log("Error connecting Database instance due to: ", err);
      }
    );

    res.send("Project initialiser")
  
})