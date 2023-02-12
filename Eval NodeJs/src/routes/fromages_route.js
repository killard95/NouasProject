const express = require("express");
const router = express.Router();
const fromagesController = require("../controller/fromages_controller");

// route qui permet de récupérer l'intégralitée des fromages du menu
// GET '/fromages'
// Ex: http://localhost:3000/fromages
router.get("/fromages", fromagesController.getAllDataTab);

// Route qui permet d'afficher un fromage du menu par son id
// GET '/fromages/:id
// Ex: http://localhost:3000/fromages/1
router.get("/fromages/:id", fromagesController.getDataById);

// Route qui permet d'afficher un fromage du menu par son name
// GET '/fromages/search/:titre'
// Ex: http://localhost:3000/fromages/name/brie
router.get("/fromages/name/:name", fromagesController.getDataByName);

// Route qui permet de créer un nouveau fromage dans le menu
// POST '/fromages'
// Ex: http://localhost:3000/fromages
router.post("/fromages", fromagesController.createData);

// Route qui permet de mettre à jour un fromage dans le menu
// PUT: '/fromages/:id'
// Ex: http://localhost:3000/fromages/3
router.put("/fromages/:id", fromagesController.updateData);

// Route qui permet de supprimer un fromage du menu par son id
// DELETE '/fromages/:id'
// Ex: http://localhost:3000/fromages/2
router.delete("/fromages/:id", fromagesController.deleteDataById);

// Export du module router pour utiliser les routes dans les autres fichier
module.exports = router;
