var message = {
  error: {
    database: {
      code: 401,
      message: "Problème au niveau de la connexion à la BD"
    },
    authentication: {
      code: 402,
      message: "Erreur de connexion"
    },
    emailUse: {
      code: 403,
      message: "Email déjà utilisé"
    }
  },
  token: {
    invalid: {
      code: 401,
      message: "Invalid Token or Key"
    },
    wrong: {
      code: 500,
      message: "Oops something went wrong"
    },
    expired: {
      code: 400,
      message: "Token Expired"
    }
  },
  success: {
    login: {
      code: 200,
      message: "Vous êtes connecté!"
    },

    ajout: {
      code: 200,
      message: "Vous êtes inscrit"
    }
  }
};

module.exports = message;
