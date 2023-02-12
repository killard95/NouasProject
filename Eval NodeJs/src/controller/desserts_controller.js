const fs = require('fs');

// Méthode pour récupérer tous les élement desserts du menu
exports.getAllDataTab = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data)=>{
        // Si il y a une erreur de lecture
        if (err) {
            // Le code 500 signifie qu'il y a une erreur et on affiche sous la forme d'un json le message suivant
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
         // Sinon on affiche tous les desserts sous la forme d'un json
        } else {
            response.status(200).json(JSON.parse(data).desserts);
        }
    })
}


// Méthode pour récupérer un dessert par son id
exports.getDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre les dessert dans cette constante
            const existingData = JSON.parse(data);
            // on enregistre la boisson correspondant à l'id dans la requete
            const dataById = existingData.desserts.find((obj) => obj.id === parseInt(request.params.id));
            // Si on trouve un dessert correspondant à l'id dans la requete
            if (dataById) {
                // On affiche ce dessert sous la forme json
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


// Méthode pour récupérer un dessert par son name
exports.getDataByName = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre les desserts dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le dessert correspondant au name demandé dans la requete
            const dataByName = existingData.desserts.find((obj) => obj.name === request.params.name)
            // Si on trouve un dessert avec le name dans la requete
            if (dataByName) {
                // On affiche le dessert sous la forme d'un json
                response.status(200).json(dataByName)
                // Sinon on affiche un message d'erreur
            } else {
                response.status(404).json({
                    message: 'Aucun élément trouvé avec ce name',
                    errot: err
                })
            }
        }
    })
}


// Methode pour créer un nouveau dessert dans le menu
exports.createData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
        // Sinon
        } else {
            // On enregistre les desserts dans cette constante
            const existingData = JSON.parse(data);
            // On ajoute le nouveau dessert en incrémentant l'id selon le nombre de desserts déjà présent
            existingData.desserts.push({ "id": existingData.desserts.length+1, "name": request.body.name, "price": request.body.price });
            // On utilise writefile pour écrire dans le menu
            fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                // S'il y a une erreur lors de l'écriture on affiche le message d'erreur
                if (writeErr) {
                    response.status(500).json({
                        message:"Il y a eu une erreur pendant l'écriture des données",
                        error: err
                    })
                // Sinon on affiche que tout s'est bien passé
                } else {
                    response.status(200).json({
                        message: "Vos données viennent d'etre ajoutées. Félicitations!!!"
                    })
                }
            })
        }
    })
}


// Méthode pour modifier un dessert déjà présent dans le menu
exports.updateData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de l'écriture on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
        // Sinon
        } else {
            // On enregistre les desserts dans la constante
            const existingData = JSON.parse(data);
            // On enregistre le dessert correspondant à l'id dans la requete
            const dataById = existingData.desserts.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun élément correspondant à l'id dans la requete n'a etait trouvé on affiche le message suivant
            if (!dataById) {
                response.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
            // Sinon
            } else {
                // On enregistre ce que l'on veux modifié (ici il s'agit du name)
                dataById.name = request.body.name;
                // On utilise writefile pour écrire dans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur lors de l'écriture on affiche le message suivant
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


// Méthode pour effacer un dessert du menu
exports.deleteDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture de vos données",
                error: err
            })
        // Sinon
        } else {
            // On enregistre les desserts dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre le dessert correspondant à l'id dans kla requete
            const dataById = existingData.desserts.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun dessert ne correspond à l'id de la requete
            if (!dataById) {
                // On affiche un message d'erreur
                request.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
            // Sinon
            } else {
                // On filtre les desserts afin de ne garder que celle qui correspond à l'id dans la requete
                existingData.desserts = existingData.desserts.filter((obj) => obj.id != parseInt(request.params.id));
                // On utilise writefile pour écrire dans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
                    if (writeErr) {
                        response.status(500).json({
                            message: "Il y a eu une erreur pendant l'écriture de vos données",
                            error: err
                        })
                    // Sinon on affiche que tout s'est bien passé
                    } else {
                        response.status(200).json({
                            message: "Vos données viennent d'etre supprimées. Félicitations!!!"
                        })
                    }
                })
            }
        }
    })
}