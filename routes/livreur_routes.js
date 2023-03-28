
const livreurRoutes = require('express').Router();
const Livreur = require('../models/livreur').Livreur
const livreurController = require('../controllers/livreur_controller');
livreurRoutes.get('/', async (req, res) =>  livreurController.getAll(req, res))
livreurRoutes.post('/', async (req, res) =>  livreurController.add(req, res))
livreurRoutes.put('/:id', async (req, res) =>  livreurController.update(req, res))
livreurRoutes.delete('/:id', async (req, res) =>  livreurController.delete(req, res))
livreurRoutes.get('/:id', async (req, res) =>  livreurController.getById(req, res))
livreurRoutes.post('/getby', async (req, res) =>  livreurController.getBy(req, res))
module.exports = livreurRoutes
