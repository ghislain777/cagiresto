
const regionRoutes = require('express').Router();
const Region = require('../models/region').Region
const regionController = require('../controllers/region_controller');
regionRoutes.get('/', async (req, res) =>  regionController.getAll(req, res))
regionRoutes.post('/', async (req, res) =>  regionController.add(req, res))
regionRoutes.put('/:id', async (req, res) =>  regionController.update(req, res))
regionRoutes.delete('/:id', async (req, res) =>  regionController.delete(req, res))
regionRoutes.get('/:id', async (req, res) =>  regionController.getById(req, res))
regionRoutes.post('/getby', async (req, res) =>  regionController.getBy(req, res))
module.exports = regionRoutes
