const express = require("express");
const router = express.Router();
const dessertsController = require("../controller/desserts_controller");

// route qui permet de récupérer l'intégralitée des desserts du menu
// GET '/desserts'
// Ex: http://localhost:3000/desserts
router.get('/desserts', dessertsController.getAllDataTab);

// Route qui permet d'afficher un dessert du menu par son id
// GET '/desserts/:id
// Ex: http://localhost:3000/desserts/1
router.get('/desserts/:id', dessertsController.getDataById);

// Route qui permet d'afficher un dessert du menu par son name
// GET '/desserts/search/:titre'
// Ex: http://localhost:3000/desserts/name/tiramisu
router.get('/desserts/name/:name', dessertsController.getDataByName);

// Route qui permet de créer un nouveau dessert dans le menu
// POST '/desserts'
// Ex: http://localhost:3000/desserts
router.post('/desserts', dessertsController.createData);

// Route qui permet de mettre à jour un dessert dans le menu
// PUT: '/desserts/:id'
// Ex: http://localhost:3000/desserts/3
router.put('/desserts/:id', dessertsController.updateData);

// Route qui permet de supprimer un dessert du menu par son id
// DELETE '/desserts/:id'
// Ex: http://localhost:3000/desserts/2
router.delete('/desserts/:id', dessertsController.deleteDataById);


// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;
