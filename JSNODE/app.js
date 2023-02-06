// Creation des constantes pour express et fs
const express = require('express');
const fs = require('fs');
const app = express();

// Route à suivre pour l'envoie des requete et la réception des reponses
app.get('/', (requete, response) =>{
    response.send("salut ca fart !");
})

// Route à suivre pour la récupération des données (data)
app.get('/data', (request, response) =>{
    // on utilise fs pour lire les données
    fs.readFile('data.json', (err, data) =>{
        // Ajout d'une condition au cas ou il y ai une erreur
        if (err) {
            response.status(500).json({
                message:"Erreur lors de la lecture des données",
            });
        // S'il n'y a pas d'erreur on retourne les données sous la forme d'un JSON
        } else {
            response.status(200).json(JSON.parse(data));
        }
    });
});
// l'app tourne sur le port 3000
app.listen(3000, () =>{
    console.log("Je tourne sur le port 3000");
})