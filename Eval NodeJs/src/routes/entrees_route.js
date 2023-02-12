const express = require("express");
const router = express.Router();
const entreesController = require("../controller/entrees_controller");

// route qui permet de récupérer l'intégralitée des entrees du menu
// GET '/entrees'
// Ex: http://localhost:3000/entrees
router.get('/entrees', entreesController.getAllDataTab);

// Route qui permet d'afficher une entrée du menu par son id
// GET '/entrees/:id
// Ex: http://localhost:3000/entrees/1
router.get('/entrees/:id', entreesController.getDataById);

// Route qui permet d'afficher une entrée du menu par son name
// GET '/entrees/search/:titre'
// Ex: http://localhost:3000/entrees/name/soufflé_braisé
router.get('/entrees/name/:name', entreesController.getDataByName);

// Route qui permet de créer une nouvelle entrée dans le menu
// POST '/entrees'
// Ex: http://localhost:3000/entrees
router.post('/entrees', entreesController.createData);

// Route qui permet de mettre à jour une entrée dans le menu
// PUT: '/entrees/:id'
// Ex: http://localhost:3000/entrees/4
router.put('/entrees/:id', entreesController.updateData);

// Route qui permet de supprimer une entrée du menu par son id
// DELETE '/entrees/:id'
// Ex: http://localhost:3000/entrees/2
router.delete('/entrees/:id', entreesController.deleteDataById);


// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;
