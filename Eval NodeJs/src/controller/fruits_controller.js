const fs = require("fs");

// Méthode pour récuperer tous les éléments fruits dans le menu
exports.getAllDataTab = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a ujne erreur lors de la lecture du menu on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon on affiche tous les fruits sous format json
    } else {
      response.status(200).json(JSON.parse(data).fruits);
    }
  });
};



// Méthode pour récupérer un fruit par son id
exports.getDataById = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
    // On enregistre les fruits dans cette constante
      const existingData = JSON.parse(data);
    //  On enregistre le fruit correspondant à l'id de la requete
      const dataById = existingData.fruits.find((obj) => obj.id === parseInt(request.params.id));
    //   Si un fruit correspond à l'id de la requete
      if (dataById) {
        // On affiche ce fruit sous la forme d'un json
        response.status(200).json(dataById);
        // Sinon on affiche un message d'erreur
      } else {
        response.status(404).json({
          message: "Nous n'avons trouvé aucun élément correspondant à cet id",
          error: err,
        });
      }
    }
  });
};



// Méthode pour récuperer un fruit par son name
exports.getDataByName = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
    // On enregistre les fruits dans cette constante
      const existingData = JSON.parse(data);
        // On enregistre le fruit correspondant à l'id de la requete
      const dataByName = existingData.fruits.find((obj) => obj.name === request.params.name);
        // Si un fruit correspons à l'id de la requete
      if (dataByName) {
        // On affiche ce fruit sous la forme d'un json
        response.status(200).json(dataByName);
        // Sinon on affiche un message d'erreur
      } else {
        response.status(404).json({
          message: "Aucun élément trouvé avec ce name",
          error: err,
        });
      }
    }
  });
};



// Méthode pour créer un nouveau fruit dans le menu
exports.createData = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a une erreur lors de la lecture du menu on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
        // On enregistre les fruits dans cette constante
      const existingData = JSON.parse(data);
        // On enregistre le nouveau fruit en incrémentant son id selon le nombre de fruits présent dans le menu
      existingData.fruits.push({ "id": existingData.fruits.length + 1, "name": request.body.name, "price": request.body.price,
      });
    //   On utilise writefile pour écrire dans le menu
      fs.writeFile("./src/model/menu.json", JSON.stringify(existingData), (writeErr) => {
            // S'il y a une erreur lors de l'écriture du menu
          if (writeErr) {
            // On affiche un message d'erreur
            response.status(500).json({
              message: "Il y a eu une erreur pendant l'écriture des données",
              error: err,
            });
            // Sinon on affiche que tout s'est bien passé
          } else {
            response.status(200).json({
              message: "Vos données viennent d'etre ajoutées. Félicitations!!!",
            });
          }
        }
      );
    }
  });
};



// Méthode pour modifier un fruit déjà présent dans le menu
exports.updateData = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a une erreur lors de la lecture du menu
    if (err) {
    // On affiche un message d'erreur
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    //   Sinon
    } else {
        // On enregistre les fruits dans cette constante
      const existingData = JSON.parse(data);
        // On enregistre le fruits correspondant à l'id de la requete
      const dataById = existingData.fruits.find((obj) => obj.id === parseInt(request.params.id));
        // Si aucun fruit ne correspond à l'id de la requete
      if (!dataById) {
        // On affiche un message d'erreur
        response.status(404).json({
          message: "Aucun élément trouvé avec cet id",
          error: err,
        });
        // Sinon 
      } else {
        // On enregistre ce que l'on veut modifié (ici il s'agit du name)
        dataById.name = request.body.name;
        // On utilise writefile pour écrire dans le menu
        fs.writeFile("./src/model/menu.json", JSON.stringify(existingData), (writeErr) => {
            // S'il y a une erreur lors de l'écriture du menu
            if (writeErr) {
                // On affiche un message d'erreur
              response.status(500).json({
                message:
                  "Il y a eu une erreur pendant l'écriture de vos données",
                error: err,
              });
            //   Sinon on affiche que tout s'est bien passé
            } else {
              response.status(200).json({
                message:
                  "Vos données viennent d'etre mises à jour. Félicitations!!!",
              });
            }
          }
        );
      }
    }
  });
};



// Méthode pour effacer un élément déja présent dans le menu
exports.deleteDataById = (request, response) => {
    // On utilise readfile pour lire le menu
  fs.readFile("./src/model/menu.json", (err, data) => {
    // S'il y a une erreur lors de la lecture du menu
    if (err) {
        // On affiche un message d'erreur
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    //   Sinon
    } else {
        // On enregistre les fruits dans cette constante
      const existingData = JSON.parse(data);
    //   On enregistre le fruit qui correspond à l'id de la requete
      const dataById = existingData.fruits.find((obj) => obj.id === parseInt(request.params.id));
        // Si aucun fruit ne correspond à l'id de la requete
      if (!dataById) {
        // On affiche un message d'erreur
        response.status(404).json({
          message: "Aucun élément trouvé avec cet id",
          error: err,
        });
    // Sinon
      } else {
        // on filtre les fruits pour ne garder que celui qui correspond à l'id de la requete
        existingData.fruits = existingData.fruits.filter((obj) => obj.id != parseInt(request.params.id));
        // On utilise writefile pour écrire dans le menu
        fs.writeFile("./src/model/menu.json", JSON.stringify(existingData), (writeErr) => {
            // S'il y a eu une erreur lors de l'écriture du menu
            if (writeErr) {
                // On affiche un message d'erreur
              response.status(500).json({
                message:
                  "Il y a eu une erreur pendant l'écriture de vos données",
                error: err,
              });
            //   Sinon on affiche que tout s'est bien passé
            } else {
              response.status(200).json({
                message:
                  "Vos données viennent d'etre suprimées. Félicitations!!!",
              });
            }
          }
        );
      }
    }
  });
};
