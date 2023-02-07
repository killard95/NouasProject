// Déclaration d'une constante qui contiendra l'export du module express
const express = require('express');
// Déclaration d'une constante qui contiendra l'export du module fs
const fs = require('fs');
// Déclaration d'une constante qui lance une fonction express() qui lance une app express
const app = express();
// On déclare une constante qui contiendra l'export du module body-parser
const bodyParser = require('body-parser');
// Je vais dire à express d'utiliser bodyParser pour lire le contenue du body json
app.use(bodyParser.json());

// Route par défaut qui renvois une chaine de caracteres
// GET "/"
// Ex : http://localhost:3000/
app.get('/', (request, response) =>{
    // on utilise la reponse du middleware d'express pour envoyez un e chaine de caractere quand cette route est trigger
    response.send("salut ca fart !");
})

// Route qui permet d'aficher les données contenu dans le fichier data.json en JSON dans la requetes
// GET "/"
// Ex : http://localhost:3000/data
app.get('/data', (request, response) =>{
    // on utilise la méthode qui vient du module "fs" pour lire et retourner le contenu du fichier en chaine de caractères
    fs.readFile('data.json', (err, data) =>{
        // Si dans le callback l'erreur n'est pas null
        if (err) {
            // Je renvoie une réponse avec un status 500 (erreur server) et un corps de requetes contenant un message et l'erreur
            response.status(500).json({
                message:"Erreur lors de la lecture des données",
            });
        // S'il n'y a pas d'erreur on retourne les données sous la forme d'un JSON
        } else {
            // Je renvoie une réponse au statut 200 et je renvoie en json la chaine de caracteres transformée en JSON
            response.status(200).json(JSON.parse(data));
        }
    });
});

// C'est une route qui me permet de récuperer une data par son id
// GET "/data/:id"
// Ex : http://localhost:3000/data/:id
app.get('/data/:id', (request, response) =>{
    // Je vais utiliser la méthode readFile du module fs pour pouvoir récuperer la totalité du fichier
fs.readFile("data.json", (err, data) => {
// Je met une condition si il y a une erreur dans le callback
if ( err ) {
    // Je renvoie une réponse status 500 avec un message et l'erreur
    // réponse 500 + erreur + "problémes"
    response.status(500).json({
        message: "Erreur lors de la lecture des données",
        error: err,
        });
        }else{
        // Je parse la chaine de caracteres en Json pour le transformer en JSON manipulable
            const jsonData = JSON.parse(data);
            // Je vais cherchez dans ce fichier si l'id correspondants en parametres existe dans le contenue
            const dataById = jsonData.data.find((obj) => 
              obj.id === parseInt(request.params.id)
            )
            // Si on trouve un objet avec cet id
            if(dataById) {
                // On renvoie une reponse avec un statut 200 et l'objet
                response.status(200).json(dataById);
            } else {
                // On renvoie une reponse avec un statut 404 avec un message d'erreur
                response.status(404).json({
                    message:"Aucun objet trouvé avec cet id"
                })
            }
        }
    });
});


// C'est une route qui me permet d'insérer de la donnée dans le fichier data.json
// POST "/data"
// Ex : http://localhost:3000/data
app.post("/data", (request, response) =>{
    // Lire le contenu du fichier
    fs.readFile("data.json", (err, data) =>{
        // Si une erreur sur la lecture du fichier
        if (err) {
            response.status(500).json({
                message: "Erreur lors de la lecture des données",
            });
        } else {
        // Stocker les données existante
            const existingData = JSON.parse(data);
            // rajouter ma donnée
            existingData.data.push(request.body)
            // Je vais écrire le fichier avec les nouvelles données
            fs.writeFile('data.json', JSON.stringify(existingData), (writeErr) =>{
                // Si il y a une erreur renvoi l'erreur 500  + message + error
                if (err) {
                    response.status(500).json({
                        message: "Erreur lors de l'ecriture des données",
                    });
                    // renvoie d'une réponse status 200 + message
                } else {
                    response.status(200).json({
                        message: "les données ont été ajouter avec succés",
                    });
                }
            });
        }
    });
});


// On demande a express d'exposer tout son contenu enregistré sur le port 3000 du serveur qui acceuil l'application
app.listen(3000, () =>{
    // on lancera une chaine de caracteres en terminal pour avoir un retour pour etre sure que tout fonctionne
    console.log("Je tourne sur le port 3000");
})