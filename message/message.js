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

    trade: data => {
      return {
        code: 200,
        message: "L'échange a bien été effectué",
        data: data
      };
    },

    randomCard: data => {
      return {
        code: 200,
        message: "Les cartes ont bien été distribuées",
        data: data
      };
    },

    users: data => {
      return {
        code: 200,
        message: "Voici tout les utilisateurs de la base de données",
        data: data
      };
    }
  }
};

module.exports = message;
