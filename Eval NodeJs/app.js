// Je déclare une constante pour exporter le module express
const express = require("express");
// Je déclare une constante qui créer une application en utilisant la fonction express
const app = express();
// Je déclare une constante pour exporter le module body-parser
const bodyParser = require("body-parser");
// Le contenue du body sera lu en json grace a body-parser
app.use(bodyParser.json());
// J'importe les routes de l'application
const entreesRoute = require("./src/routes/entrees_route");
const platsRoute = require("./src/routes/plats_route");
const dessertsRoute = require("./src/routes/desserts_route");
const boissonsRoute = require("./src/routes/boissons_route");
const fromagesRoute = require("./src/routes/fromages_route");
const fruitsRoute = require("./src/routes/fruits_route");

// Route par défaut qui renvoi une string
// GET "/"
// Ex: http://localhost:3000/
app.get("/", (request, response) => {
  // J'utilise la response d'express pour envoyer la string sur le port
  response.send("Ola come estas ?");
});

// J'enregistre les routes de l'application
app.use(entreesRoute);
app.use(platsRoute);
app.use(dessertsRoute);
app.use(boissonsRoute);
app.use(fromagesRoute);
app.use(fruitsRoute);

// J'exporte la constante app pour la rendre utilisable dans d'autres fichiers
module.exports = app;
