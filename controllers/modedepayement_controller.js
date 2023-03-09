
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Modedepayement } = require('../models');
const modedepayementController = {}

modedepayementController.includeModedepayement = [

]


modedepayementController.add = async (req, res) => {
    try {
        const response = await Modedepayement.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

modedepayementController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Modedepayement.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: modedepayementController.includeModedepayement,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

modedepayementController.update = async (req, res) => {
    try {
        const response = await Modedepayement.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const modedepayement = Modedepayement.findOne({
            where: { id: req.params.id },
            include: modedepayementController.includeModedepayement
        })
        res.status(200).send(modedepayement)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

modedepayementController.delete = async (req, res) => {
    try {
        const response = await Modedepayement.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Modedepayement supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

modedepayementController.getById = async (req, res) => {
    try {
        const response = await Modedepayement.findOne({
            where: { id: request.params.id },
            include: modedepayementController.includeModedepayement
        })
        if (response == null) {
            res.status(404).send('Modedepayement non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


modedepayementController.getBy = async (req, res) => {
    try {
      const  response = await Modedepayement.findAndCountAll({
            where: req.body,
            include:modedepayementController.includeModedepayement
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = modedepayementController

