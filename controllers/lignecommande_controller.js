
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Lignecommande } = require('../models');
const lignecommandeController = {}

lignecommandeController.includeLignecommande = [

]


lignecommandeController.add = async (req, res) => {
    try {
        const response = await Lignecommande.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

lignecommandeController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Lignecommande.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: lignecommandeController.includeLignecommande,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

lignecommandeController.update = async (req, res) => {
    try {
        const response = await Lignecommande.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const lignecommande = Lignecommande.findOne({
            where: { id: req.params.id },
            include: lignecommandeController.includeLignecommande
        })
        res.status(200).send(lignecommande)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

lignecommandeController.delete = async (req, res) => {
    try {
        const response = await Lignecommande.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Lignecommande supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

lignecommandeController.getById = async (req, res) => {
    try {
        const response = await Lignecommande.findOne({
            where: { id: request.params.id },
            include: lignecommandeController.includeLignecommande
        })
        if (response == null) {
            res.status(404).send('Lignecommande non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


lignecommandeController.getBy = async (req, res) => {
    try {
      const  response = await Lignecommande.findAndCountAll({
            where: req.body,
            include:lignecommandeController.includeLignecommande
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = lignecommandeController

