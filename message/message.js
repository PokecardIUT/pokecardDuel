var message = {

    error: {
        database: {
            code: 401,
            message: "Problème au niveau de la connexion à la BD"
        },
        authentication : {
            code: 402,
            message: "Erreur de connexion"
        },
        emailUse : {
            code: 403,
            message: "Email déjà utilisé"
        }


    },
    success: {
        login : {
            code: 200,
            message: "Vous êtes connecté!"
        },

        ajout:{
            code: 200,
            message: "Vous êtes inscrit"
        }

    }



}

module.exports = message