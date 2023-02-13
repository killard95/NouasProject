const fs = require('fs');
// On enregistre la route pour accéder au menu dans cette constante
const pathToData = './src/model/menu.json';

// Méthode pour récupérer tous les éléments fromages du menu
exports.getAllDataTab = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
        // Sinon on affiche tous les fromages sous la forme d'un json
        } else {
            response.status(200).json(JSON.parse(data).fromages);
        }
    })
}


// Méthode pour récupérer un fromage par son id
exports.getDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
        // Sinon
        } else {
            // On enregistre les fromages dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre dans cette constante le fromage correspondant à l'id de la requete
            const dataById = existingData.fromages.find((obj) => obj.id === parseInt(request.params.id));
            // Si on trouve un fromage correspondant à l'id de la requete
            if (dataById) {
                // On affiche ce fromage sous la forme json
                response.status(200).json(dataById)
            // Sinon on affiche un message d'erreur
            } else {
                response.status(404).json({
                    message: "Nous n'avons trouvé aucun élément correspondant à cet id",
                    error: err
                })
            }
        }
    })
}


// Méthode pour récuperer un fromage par son name
exports.getDataByName = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant l'ecriture des données",
                error: err
            })
        // Sinon
        } else {
            // On enregistre les fromages dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le fromage correspondant au name dans la requete
            const dataByName = existingData.fromages.find((obj) => obj.name === request.params.name)
            // Si un fromage correspond au name de la requete on l'affiche sous format json
            if (dataByName) {
                response.status(200).json(dataByName)
            // Sinon on affiche un message d'erreur
            } else {
                response.status(404).json({
                    message: 'Aucun élément trouvé avec ce name',
                    error: err
                })
            }
        }
    })
}


// Méthode pour créer un nouveau fromage dans le menu
exports.createData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
        // Sinon
        } else {
            // On enregistre les fromages dans cette constante
            const existingData = JSON.parse(data);
             // On enregistre le dernier élément pour récupérer son id
             const lastData = existingData.fromages[existingData.length-1];
            // On ajoute le nouveau fromage en incrémentant son id selon le nombre de fromages présent dans le menu
            existingData.fromages.push({ "id": lastData.id + 1, "name": request.body.name, "price": request.body.price });
            // On utilise writefile pour écrire dans le menu
            fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) =>{
                // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
                if (writeErr) {
                    response.status(500).json({
                        message: "Il y a eu une erreur pendant l'écriture des données",
                        error: err
                    })
                // Sinon on affiche que tout s'estbien passé
                } else {
                    response.status(200).json({
                        message: "Vos données viennent d'etre ajoutées. Félicitations!!!"
                    })
                }
            })
        }
    })
}


// Méthode pour modifier un fromage déjà présent dans le menu
exports.updateData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
        // Sinon
        } else {
            // On enregistre les fromages dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le fromage correspondant à l'id de la requete
            const dataById = existingData.fromages.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun fromage ne correspond à l'id de la requete on affiche un message d'erreur
            if (!dataById) {
                response.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
            // Sinon
            } else {
                // On enregistre ce que l'on veut modifier (ici il s'agit du name)
                dataById.name = request.body.name;
                // On utilise writefile pour écrire dans le menu
                fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
                    if (writeErr) {
                        response.status(500).json({
                            message: "Il y a eu une erreur pendant l'écriture de vos données",
                            error: err
                        })
                    // Sinon on affiche que tout s'est bien passé
                    } else {
                        response.status(200).json({
                            message: "Vos données viennent d'etre mises à jour. Félicitations!!!"
                        })
                    }
                })
            }
        }
    })
}


// Méthode pour supprimer un fromage déjà présent dans le menu
exports.deleteDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile(pathToData, (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
        // Sinon
        } else {
            // On enregistre tous les fromages dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le fromage correspondant à l'id de la requete
            const dataById = existingData.fromages.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun fromage ne correspond à l'id de la requete on affiche un message d'erreur
            if (!dataById) {
                response.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
            // Sinon
            } else {
                // On filtre les fromages afin de ne garder que celui qui correspond à l''id de la requete
                existingData.fromages = existingData.fromages.filter((obj) => obj.id != parseInt(request.params.id));
                // On utilise writefile pour écrire dans le menu
                fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
                    if (writeErr) {
                        response.status(500).json({
                            message: "Il y a eu une erreur pendant l'écriture de vos données",
                            error: err
                        })
                    // Sinon on affiche que tout s'est bien passé
                    } else {
                        response.status(200).json({
                            message: "Vos données viennent d'etre supprimées. Félicitation!!!"
                        })
                    }
                })
            }
        }
    })
}