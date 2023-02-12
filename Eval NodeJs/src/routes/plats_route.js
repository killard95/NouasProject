const express = require('express');
const router = express.Router();
const platsController = require('../controller/plats_controller');

// route qui permet de récupérer l'intégralitée des plats du menu
// GET '/plats'
// Ex: http://localhost:3000/plats
router.get('/plats', platsController.getAllDataTab);

// Route qui permet d'afficher un plat du menu par son id
// GET '/plats/:id
// Ex: http://localhost:3000/plats/1
router.get('/plats/:id', platsController.getDataById);

// Route qui permet d'afficher un plat du menu par son name
// GET '/plats/search/:titre'
// Ex: http://localhost:3000/plats/name/copeaux_de_safran_vanillés
router.get('/plats/name/:name', platsController.getDataByName);

// Route qui permet de créer un nouveau plat dans le menu
// POST '/plats'
// Ex: http://localhost:3000/plats
router.post('/plats', platsController.createData);

// Route qui permet de mettre à jour un plat dans le menu
// PUT: '/plats/:id'
// Ex: http://localhost:3000/plats/3
router.put('/plats/:id', platsController.updateData);

// Route qui permet de supprimer un plat du menu par son id
// DELETE '/plats/:id'
// Ex: http://localhost:3000/plats/2
router.delete('/plats/:id', platsController.deleteDataById);


// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;