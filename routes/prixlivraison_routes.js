
const prixlivraisonRoutes = require('express').Router();
const Prixlivraison = require('../models/prixlivraison').Prixlivraison
const prixlivraisonController = require('../controllers/prixlivraison_controller');
prixlivraisonRoutes.get('/', async (req, res) =>  prixlivraisonController.getAll(req, res))
prixlivraisonRoutes.post('/', async (req, res) =>  prixlivraisonController.add(req, res))
prixlivraisonRoutes.put('/:id', async (req, res) =>  prixlivraisonController.update(req, res))
prixlivraisonRoutes.delete('/:id', async (req, res) =>  prixlivraisonController.delete(req, res))
prixlivraisonRoutes.get('/:id', async (req, res) =>  prixlivraisonController.getById(req, res))
prixlivraisonRoutes.post('/getby', async (req, res) =>  prixlivraisonController.getBy(req, res))
module.exports = prixlivraisonRoutes
