var message = {

    error: {
        database: {
            code: 401,
            message: "Problème au niveau de la connexion à la BD"
        },
        authentication : {
            code: 402,
            message: "Erreur de connexion"
        }


    },
    success: {
        login : {
            code: 200,
            message: "Vous êtes connecté!"
        }

    }



}

module.exports = message