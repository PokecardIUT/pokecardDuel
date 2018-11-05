var about = {
  aboutApi: function(req, res) {
    var information = {
      name: "PokecardDuel_Api",
      version: "v0.1",
      by: "Loic and Théo"
    };

    res.send(information);
  }
};

module.exports = about;
