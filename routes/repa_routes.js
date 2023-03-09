
const repaRoutes = require('express').Router();
const Repa = require('../models/repa').Repa
const repaController = require('../controllers/repa_controller');
repaRoutes.get('/', async (req, res) =>  repaController.getAll(req, res))
repaRoutes.post('/', async (req, res) =>  repaController.add(req, res))
repaRoutes.put('/:id', async (req, res) =>  repaController.update(req, res))
repaRoutes.delete('/:id', async (req, res) =>  repaController.delete(req, res))
repaRoutes.get('/:id', async (req, res) =>  repaController.getById(req, res))
repaRoutes.post('/getby', async (req, res) =>  repaController.getBy(req, res))
module.exports = repaRoutes
