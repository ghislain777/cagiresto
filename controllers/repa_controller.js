
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Repa, Categorie } = require('../models');
const repaController = {}

repaController.includeRepa = [
{model:Categorie}
]


repaController.add = async (req, res) => {
    try {
        const response = await Repa.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

repaController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Repa.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: repaController.includeRepa,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

repaController.update = async (req, res) => {
    try {
        const response = await Repa.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const repa = Repa.findOne({
            where: { id: req.params.id },
            include: repaController.includeRepa
        })
        res.status(200).send(repa)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

repaController.delete = async (req, res) => {
    try {
        const response = await Repa.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Repa supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

repaController.getById = async (req, res) => {
    try {
        const response = await Repa.findOne({
            where: { id: request.params.id },
            include: repaController.includeRepa
        })
        if (response == null) {
            res.status(404).send('Repa non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


repaController.getBy = async (req, res) => {
    try {
      const  response = await Repa.findAndCountAll({
            where: req.body,
            include:repaController.includeRepa
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = repaController

