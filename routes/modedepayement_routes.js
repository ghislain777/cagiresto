
const modedepayementRoutes = require('express').Router();
const Modedepayement = require('../models/modedepayement').Modedepayement
const modedepayementController = require('../controllers/modedepayement_controller');
modedepayementRoutes.get('/', async (req, res) =>  modedepayementController.getAll(req, res))
modedepayementRoutes.post('/', async (req, res) =>  modedepayementController.add(req, res))
modedepayementRoutes.put('/:id', async (req, res) =>  modedepayementController.update(req, res))
modedepayementRoutes.delete('/:id', async (req, res) =>  modedepayementController.delete(req, res))
modedepayementRoutes.get('/:id', async (req, res) =>  modedepayementController.getById(req, res))
modedepayementRoutes.post('/getby', async (req, res) =>  modedepayementController.getBy(req, res))
module.exports = modedepayementRoutes
