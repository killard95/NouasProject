const fs = require('fs');

// Méthode pour récupérer tous les élement boissons du menu
exports.getAllDataTab = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // Si il y a une erreur de lecture
        if (err) {
            // Le code 500 signifie qu'il y a une erreur et on affiche sous la forme d'un json le message suivant
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon on affiche toutes les boissons sous la forme d'un json
        } else {
            response.status(200).json(JSON.parse(data).boissons);
        }
    })
}


// Méthode pour récupérer une boissons par son id
exports.getDataById = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // Si il y a une erreur de lecture
        if (err) {
            // Le code 500 signifie qu'il y a une erreur et on affiche sous la forme d'un json le message suivant
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre toutes les boissons dans cette constante
            const existingData = JSON.parse(data);
            // Dans cette constante on enregistre la boissons dont l'id correspond a l'id demandé dans la requete
            const dataById = existingData.boissons.find((obj) => obj.id === parseInt(request.params.id));
            // Si on trouve une boissons correspondant à l'id dans la requete
            if (dataById) {
                // on affiche cette boisson sous la forme d'un json
                response.status(200).json(dataById)
                // Sinon
            } else {
                // Aucune boisson avec cet id n'as etait trouvé et on affiche un message 
                response.status(404).json({
                    message: "Nous n'avons trouvé aucun élément correspondant à cet id",
                    error: err
                })
            }
        }
    })
}


// Methode pour récupérer une boisson par son name
exports.getDataByName = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre les boissons dans cette constante
            const existingData = JSON.parse(data);
            // on enregistre la boisson correspondant au name demandé dans la requete
            const dataByName = existingData.boissons.find((obj) => obj.name === request.params.name)
            // Si On trouve une boissons correspondant au name de la requete
            if (dataByName) {
                // On affiche cette boisson sous la forme d'un json
                response.status(200).json(dataByName)
                // Sinon
            } else {
                // On affiche que l'élément n'as pas etait trouvé
                response.status(404).json({
                    message: 'Aucun élément trouvé avec ce name',
                    error: err
                })
            }
        }
    })
}


// Méthode pour créer une nouvelle boisson dans le menu
exports.createData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        //  S'il y a une erreur de lecture on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur pendant la lecture des données",
                error: err
            })
            // Sinon
        } else {
            // On enregistre les boissons dans cette constante
            const existingData = JSON.parse(data);
            // On ajoute la nouvelle boisson en incrémentant l'id selon le nombre de boissons deja présente
            existingData.boissons.push({ "id": existingData.boissons.length+1, "name": request.body.name, "price": request.body.price});
            // On utilise writefile pour écrire dans le menu
            fs.writeFile('./src/model/menubar.json', JSON.stringify(existingData), (writeErr) =>{
                // S'il y a une erreur d'écriture
                if (writeErr) {
                    // On affiche un message d'erreur
                    response.status(500).json({
                        message: "Il y a eu une erreur pendant l'écriture dees données",
                        error: err
                    })
                    // Sinon On affiche que tout c'est bien passé
                } else {
                    response.status(200).json({
                        message: "Vos données viennent d'etre ajoutées. Félicitations!!!"
                    })
                }
            })
        }
    })
}


// Méthode pour modifier une boisson deja présente dans le menu
exports.updateData = (request, response) =>{
    // On utilise readfile pour lire le menu
    fs.readFile('./src/model/menu.json', (err, data) =>{
        // S'il y a une erreur de lecture on affiche le message suivant
        if (err) {
            response.status(500).json({
                message: 'Il y a eu une erreur pendant la lecture des données',
                error: err
            })
            // Sinon
        } else {
            // On enregistre les boissons dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre la boisson correspondant à l'id dans la requete
            const dataById = existingData.boissons.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucun élément correspondant à l'id dans la requete n'a etait trouvé on affiche le message suivant
            if (!dataById) {
                response.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
                // Sinon
            } else {
                // on enregistre ce que l'on veut modifié (ici il s'agit du name)
                dataById.name = request.body.name;
                // On utilise writefile pour écrire dans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur lors de l'écriture
                    if (writeErr) {
                        // On affiche le message suivant
                        response.status(500).json({
                            message: "Il y a eu une erreur pendant l'écriture des données",
                            error: err
                        })
                        // Sinon on affiche que tout s'est bien passé
                    } else {
                        response.status(200).json({
                            message: "Vos données viennent d'etre mises à jour. Félicitation!!!"
                        })
                    }
                })
            }
        }
    })
}


// Méthode pour effacer une boisson du menu
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
            // On enregistre toutes les boissons dans cette constante
            const existingData = JSON.parse(data);
            // On enregistre la boisson correspondant a l'id dans la requete
            const dataById = existingData.boissons.find((obj) => obj.id === parseInt(request.params.id));
            // Si aucune boisson ne correspond à l'id de la requete
            if (!dataById) {
                // On affiche un message d'erreur
                response.status(404).json({
                    message: "Aucun élément trouvé avec cet id",
                    error: err
                })
                // Sinon
            } else {
                // On filtre les boissons afin de ne garder que celle qui correspond à l'id dans la requete
                existingData.boissons = existingData.boissons.filter((obj) => obj.id != parseInt(request.params.id));
                // On utilise writefile pour écrire dans le menu
                fs.writeFile('./src/model/menu.json', JSON.stringify(existingData), (writeErr) =>{
                    // S'il y a une erreur d'écriture on affiche un message d'erreur
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