
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Ligneaccompagnement } = require('../models');
const ligneaccompagnementController = {}

ligneaccompagnementController.includeLigneaccompagnement = [

]


ligneaccompagnementController.add = async (req, res) => {
    try {
        const response = await Ligneaccompagnement.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

ligneaccompagnementController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Ligneaccompagnement.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: ligneaccompagnementController.includeLigneaccompagnement,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

ligneaccompagnementController.update = async (req, res) => {
    try {
        const response = await Ligneaccompagnement.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const ligneaccompagnement = Ligneaccompagnement.findOne({
            where: { id: req.params.id },
            include: ligneaccompagnementController.includeLigneaccompagnement
        })
        res.status(200).send(ligneaccompagnement)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

ligneaccompagnementController.delete = async (req, res) => {
    try {
        const response = await Ligneaccompagnement.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Ligneaccompagnement supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

ligneaccompagnementController.getById = async (req, res) => {
    try {
        const response = await Ligneaccompagnement.findOne({
            where: { id: request.params.id },
            include: ligneaccompagnementController.includeLigneaccompagnement
        })
        if (response == null) {
            res.status(404).send('Ligneaccompagnement non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


ligneaccompagnementController.getBy = async (req, res) => {
    try {
      const  response = await Ligneaccompagnement.findAndCountAll({
            where: req.body,
            include:ligneaccompagnementController.includeLigneaccompagnement
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = ligneaccompagnementController

