const fs = require('fs');

// Méthode pour récupérer tous les plats du menu
exports.getAllDataTab = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu
        if (err) {
            // On affiche un message d'erreur
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
            // Sinon on affichee tous les plats du menu au format json
        } else {
            response.status(200).json(JSON.parse(data).plats);
        }
    })
}


// Méthode pour récupérer un élément plat par son id
exports.getDataById = (request, response) =>{
    // On utilise readfilee pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
            // Sinon
        } else {
            // On enregistre les plats dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le plat correspondant à l'id de la requete
            const dataById = existingData.plats.find((obj) => obj.id === parseInt(request.params.id));
            // Si un plat correspond à l'id de la requete
            if (dataById) {
                // On affiche ce plat sous format json
                response.status(200).json(dataById)
                // Sinon
            } else {
                // On affiche un message d'erreur
                response.status(404).json({
                    message: "Nous n'avons trouvé aucun élément correspondant à cet id",
                    error: err
                })
            }
        }
    })
}


// Méthode pour récupérer un plat par son name
exports.getDataByName = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu
        if (err) {
            // On affiche un message d'erreur
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
            // Sinon
        } else {
            // On enregistre les plats dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le plat correspondant au name de la requete
            const dataByName = existingData.plats.find((obj) => obj.name === request.params.name)
            // Si un plat correspond au name de la requete
            if (dataByName) {
                // On affiche ce plat sous la forme d'un json
                response.status(200).json(dataByName)
                // Sinon
            } else {
                // On affiche un message d'erreur
                response.status(404).json({
                    message: "Aucun plat trouvé avec ce name",
                    error: err
                })
            }
        }
    })
}


// Méthode pour créer un nouveau plat dans le menu
exports.createData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu
        if (err) {
            // On affiche un message d'erreur
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
            // Sinon
        } else {
            // On enregistre rles plats dans cette constante
            const existingData = JSON.parse(data)
            // On ajoute le nouveau plat en incrémentant son id selon le nombre de plats présent dans le menu
            existingData.plats.push({ 'id': existingData.plats.length+1, 'name': request.body.name, 'price': request.body.price });
            // On utilise writefile pour écrire dans le menu
            fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                // S'il y a eu une erreur lors de l'écriture du menu
                if (writeErr) {
                    // On affiche un message d'erreur
                    response.status(500).json({
                        message: "Il y a eu une erreur pendant l'écriture des données",
                        error: err
                    })
                // sinon
                } else {
                    // On affiche que tout s'est bien passé
                    response.status(200).json({
                        message: "Vos données viennent d'etre ajoutées. Félicitations!!!"
                    })
                }
            })
        }
    })
}


// Méthode pourmodifier un plat déjà présent dans le menu
exports.updateData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a eu une erreur lors de la lecture du menu
        if (err) {
            // On affiche un message d'erreur
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
        // Sinon
        } else {
            // On enregistre les plats dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le plat correspondant à l'id dde la requete
            const dataById = existingData.plats.find((obj) => obj.id === parseInt(request.body.id));
            // Si aucun plat ne correspond à l'id de la requete
            if (!dataById) {
                // On affiche un message d'erreur
                response.status(404).json({
                    message: 'Aucun élément trouvés avec cet id',
                    error: err
                })
                // Sinon
            } else {
                // On utilise writefile pour écrire dans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a eu une erreur lors de l'écriture du menu
                    if (writeErr) {
                        // On affiche un message d'erreur
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


// Méthode pour effacer un plat déjà présent dans le menu
exports.deleteDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a eu une erreur lors de la lecture du menu
        if (err) {
            // On affiche un message d'erreur
            response.status(500).json({
                message: 'Il y eu une erreur pendant la lecture de vos données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre les plats dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le plat correspondant à l'id de la requete
            const dataById = existingData.plats.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun plat ne correspond à l'id de la requete
            if (!dataById) {
                // On affiche un message d'erreur
                request.status(404).json({
                    message: 'Aucun élément trouvé avec cet id',
                    error: err
                })
                // Sinon
            } else {
                // On filtre les plats pour ne garder que celui qui correspond à l'id de la requete
                existingData.plats = existingData.plats.filter((obj) => obj.id != parseInt(request.params.id));
                // On utilise writefile pour écrire ddans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a eu un probleme lors de l'écriture du menu
                    if (writeErr) {
                        // On affiche un message d'erreur 
                        response.status(500).json({
                            message: "Il y a eu une erreur pendant l'écriture de vos données",
                            error: err
                        })
                        // Sinon
                    } else {
                        // On affiche que tout s'est bien passé
                        response.status(200).json({
                            message: "Vos données viennent d'etre supprimées. Félicitations!!!"
                        })
                    }
                })
            }
        }
    })
}