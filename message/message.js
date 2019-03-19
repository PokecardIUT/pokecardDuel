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
    },
    noUser: {
      code: 403,
      message: "Cet utilisateur n'existe pas"
    },
    existantCard: {
      code: 403,
      message: "Cette carte a déjà été ajoutée"
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
    },

    updateCard: {
      code: 200,
      message: "Cartes mises à jour"
    },

    userFind: {
      code: 200,
      message: "Utilisateur trouvé"
    }
  }
};

module.exports = message;
