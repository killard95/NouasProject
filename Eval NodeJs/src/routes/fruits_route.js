const express = require('express');
const router = express.Router();
const fruitsController = require('../controller/fruits_controller');

// route qui permet de récupérer l'intégralitée des fruits du menu
// GET '/fruits'
// Ex: http://localhost:3000/fruits
router.get('/fruits', fruitsController.getAllDataTab);

// Route qui permet d'afficher un fruit du menu par son id
// GET '/fruits/:id
// Ex: http://localhost:3000/fruits/1
router.get('/fruits/:id', fruitsController.getDataById);

// Route qui permet d'afficher un fruit du menu par son name
// GET '/fruits/search/:titre'
// Ex: http://localhost:3000/fruits/name/pomelo
router.get('/fruits/name/:name', fruitsController.getDataByName);

// Route qui permet de créer un nouveau fruit dans le menu
// POST '/fruits'
// Ex: http://localhost:3000/fruits
router.post('/fruits', fruitsController.createData);

// Route qui permet de mettre à jour un fruit dans le menu
// PUT: '/fruits/:id'
// Ex: http://localhost:3000/fruits/3
router.put('/fruits/:id', fruitsController.updateData);

// Route qui permet de supprimer un fruit du menu par son id
// DELETE '/fruits/:id'
// Ex: http://localhost:3000/fruits/2
router.delete('/fruits/:id', fruitsController.deleteDataById);


// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;