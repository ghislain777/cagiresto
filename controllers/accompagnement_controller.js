
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Accompagnement } = require('../models');
const accompagnementController = {}

accompagnementController.includeAccompagnement = []

accompagnementController.includeAccompagnement = [

]


accompagnementController.add = async (req, res) => {
    try {
        const response = await Accompagnement.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

accompagnementController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Accompagnement.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: accompagnementController.includeAccompagnement,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

accompagnementController.update = async (req, res) => {
    try {
        const response = await Accompagnement.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const accompagnement = Accompagnement.findOne({
            where: { id: req.params.id },
            include: accompagnementController.includeAccompagnement
        })
        res.status(200).send(accompagnement)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

accompagnementController.delete = async (req, res) => {
    try {
        const response = await Accompagnement.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Accompagnement supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

accompagnementController.getById = async (req, res) => {
    try {
        const response = await Accompagnement.findOne({
            where: { id: request.params.id },
            include: accompagnementController.includeAccompagnement
        })
        if (response == null) {
            res.status(404).send('Accompagnement non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


accompagnementController.getBy = async (req, res) => {
    try {
      const  response = await Accompagnement.findAndCountAll({
            where: req.body,
            include:accompagnementController.includeAccompagnement
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = accompagnementController

