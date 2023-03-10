
const accompagnementRoutes = require('express').Router();
const Accompagnement = require('../models/accompagnement').Accompagnement
const accompagnementController = require('../controllers/accompagnement_controller');
accompagnementRoutes.get('/', async (req, res) =>  accompagnementController.getAll(req, res))
accompagnementRoutes.post('/', async (req, res) =>  accompagnementController.add(req, res))
accompagnementRoutes.put('/:id', async (req, res) =>  accompagnementController.update(req, res))
accompagnementRoutes.delete('/:id', async (req, res) =>  accompagnementController.delete(req, res))
accompagnementRoutes.get('/:id', async (req, res) =>  accompagnementController.getById(req, res))
accompagnementRoutes.post('/getby', async (req, res) =>  accompagnementController.getBy(req, res))
module.exports = accompagnementRoutes
