const fs = require("fs");
// On enregistre la route pour accéder au menu dans cette constante
const pathToData = './src/model/menu.json';

// Méthode pour récupérer toutes les entrées du menu
exports.getAllDataTab = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur on affiche le message suivant
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant de la lecture des données",
        error: err,
      });
    // Sinon on affiche toutes les entrées sous la forme d'un json
    } else {
      response.status(200).json(JSON.parse(data).entrees);
    }
  });
};



// Méthode pour récupérer une entrée par son id
exports.getDataById = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur lors de la lecture on affiche le message suivant
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
      // On enregistre les entrées dans cette constante
      const existingData = JSON.parse(data);
      // On enregistre l'entrée correspondant à l'id dans la requete
      const dataById = existingData.entrees.find((obj) => obj.id === parseInt(request.params.id));
      // Si on trouve une entrée correspondant à l'id dans la requete
      if (dataById) {
        // On affiche cette entrée sous la forme du'un json
        response.status(200).json(dataById);
      // Sinon
      } else {
        // Aucune boisson n'as etait trouvé avec cet id on affiche un message d'erreur
        response.status(404).json({
          message: "Nous n'avons trouvé aucun élément correspondant à cet id",
          error: err,
        });
      }
    }
  });
};



// Méthode pour récupérer une entrée par son name
exports.getDataByName = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur lors de la lecture on affiche le message suivant
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
      // On enregistre les entrées dans cette constante
      const existingData = JSON.parse(data);
      // On enregistre l'entrée correspondant au name de la requete
      const dataByName = existingData.entrees.find((obj) => obj.name === request.params.name);
      // Si on trouve une entrée correspondant au name de la requete
      if (dataByName) {
        // On affiche cette entrée sous la forme d'un json
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



// Méthode pour créer une nouvelle entrée dans le menu
exports.createData = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur lors de la lecture on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
      // On enregistre dans cette constante toutes les entrées du menu
      const existingData = JSON.parse(data);
       // On enregistre le dernier élément pour récupérer son id
       const lastData = existingData.entrees[existingData.length-1];
      // On ajoute une nouvelle boisson en incrémettant son id selon le nombre d'entrées déjà présente
      existingData.entrees.push({ "id": lastData.id + 1, "name": request.body.name, "price": request.body.price });
      // On utilise writefile pour écrire dans le menu
      fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) => {
          // S'il y a une erreur lors de l'écriture
          if (writeErr) {
            // On affiche un message d'erreur
            response.status(500).json({
              message: "Il y a eu une erreur pendant l'ecriture des données",
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



// Méthode pour modifier une entrée déjà présente dans le menu
exports.updateData = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur lors de la lecture on affiche le message suivant
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture des données",
        error: err,
      });
    // Sinon
    } else {
      // On enregistre les entrées dans cette constante
      const existingData = JSON.parse(data);
      // On enregistre l'entrée correspondant à l'id dans la requete
      const dataById = existingData.entrees.find((obj) => obj.id === parseInt(request.params.id));
      // Si aucune entrée ne correspond à l'id de la requete
      if (!dataById) {
        // On affiche un message d'erreur
        response.status(404).json({
          message: "Aucun élément trouvés avec cet id",
          error: err,
        });
      // Sinon
      } else {
        // On enregistre ce que l'on veut modifier (ici il s'agit du name)
        dataById.name = request.body.name;
        // On utilise writefile pour écrire dans le menu
        fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) => {
            // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
            if (writeErr) {
              response.status(500).json({
                message: "Il y a eu une erreur pendant l'écriture de vos données",
                error: err,
              });
            // Sinon on affiche que tout s'est bien passé
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



// Méthode pour effacer une entrée du menu
exports.deleteDataById = (request, response) => {
  // On utilise readfile pour lire le menu
  fs.readFile(pathToData, (err, data) => {
    // S'il y a une erreur lors de la lecture on affiche un message d'erreur
    if (err) {
      response.status(500).json({
        message: "Il y a eu une erreur pendant la lecture de vos données",
        error: err,
      });
    // Sinon
    } else {
      // On enregistre les entrées dans cette constante
      const existingData = JSON.parse(data);
      // On enregistre l'entrée correspondant à l'id de la requete
      const dataById = existingData.entrees.find((obj) => obj.id === parseInt(request.params.id));
      // Si aucune entrée ne correspond à l'id de la requete
      if (!dataById) {
        // On affiche un message d'erreur
        response.status(404).json({
          message: "Aucun élément trouvé avec cet id",
          error: err,
        });
      // Sinon
      } else {
        // On filtre les entrées pour ne garder que celle qui correspond à l'id de la requete
        existingData.entrees = existingData.entrees.filter((obj) => obj.id != parseInt(request.params.id));
        // On utilise writefile pour écrire dans le menu
        fs.writeFile(pathToData, JSON.stringify(existingData), (writeErr) => {
            // S'il y a une erreur lors de l'écriture on affiche un message d'erreur
            if (writeErr) {
              response.status(500).json({
                message: "Il y a eu une erreur pendant l'écriture de vos données",
                error: err,
              });
            // Sinon on affiche que tout s'est bien passé
            } else {
              response.status(200).json({
                message: "Vos données viennent d'etre supprimées. Félicitations!!!",
              });
            }
          }
        );
      }
    }
  });
};
