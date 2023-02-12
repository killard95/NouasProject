const express = require("express");
const router = express.Router();
const boissonsController = require("../controller/boissons_controller");

// route qui permet de récupérer l'intégralitée des boissons du menu
// GET '/boissons'
// Ex: http://localhost:3000/boissons
router.get('/boissons', boissonsController.getAllDataTab);

// Route qui permet d'afficher une boisson du menu par son id
// GET '/boissons/:id
// Ex: http://localhost:3000/boissons/1
router.get('/boissons/:id', boissonsController.getDataById);

// Route qui permet d'afficher une boisson du menu par son name
// GET '/boissons/search/:titre'
// Ex: http://localhost:3000/boissons/name/heineken
router.get('/boissons/name/:name', boissonsController.getDataByName);

// Route qui permet de créer une nouvelle boisson dans le menu
// POST '/boissons'
// Ex: http://localhost:3000/boissons
router.post('/boissons', boissonsController.createData);

// Route qui permet de mettre à jour une boisson dans le menu
// PUT: '/boissons/:id'
// Ex: http://localhost:3000/boissons/3
router.put('/boissons/:id', boissonsController.updateData);

// Route qui permet de supprimer une boisson du menu par son id
// DELETE '/boissons/:id'
// Ex: http://localhost:3000/boissons/2
router.delete('/boissons/:id', boissonsController.deleteDataById);


// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;
