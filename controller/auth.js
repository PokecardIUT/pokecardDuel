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