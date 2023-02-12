const app = require('./app');
// J'enregistre le port sur lequel je v faire tourner l'appli
const port = 3000

// l'appli tourne sur le port enregistré dans la constante port et affiche un message si tout va bien
app.listen(port, () => {
    console.log("Je tourne sur le port " + port)
});