
const ligneaccompagnementRoutes = require('express').Router();
const Ligneaccompagnement = require('../models/ligneaccompagnement').Ligneaccompagnement
const ligneaccompagnementController = require('../controllers/ligneaccompagnement_controller');
ligneaccompagnementRoutes.get('/', async (req, res) =>  ligneaccompagnementController.getAll(req, res))
ligneaccompagnementRoutes.post('/', async (req, res) =>  ligneaccompagnementController.add(req, res))
ligneaccompagnementRoutes.put('/:id', async (req, res) =>  ligneaccompagnementController.update(req, res))
ligneaccompagnementRoutes.delete('/:id', async (req, res) =>  ligneaccompagnementController.delete(req, res))
ligneaccompagnementRoutes.get('/:id', async (req, res) =>  ligneaccompagnementController.getById(req, res))
ligneaccompagnementRoutes.post('/getby', async (req, res) =>  ligneaccompagnementController.getBy(req, res))
module.exports = ligneaccompagnementRoutes
