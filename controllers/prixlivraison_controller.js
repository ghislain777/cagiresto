
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Prixlivraison, Commune } = require('../models');
const prixlivraisonController = {}

prixlivraisonController.includePrixlivraison = [
Commune
]


prixlivraisonController.add = async (req, res) => {
    try {
        const response = await Prixlivraison.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

prixlivraisonController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Prixlivraison.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: prixlivraisonController.includePrixlivraison,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

prixlivraisonController.update = async (req, res) => {
    try {
        const response = await Prixlivraison.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const prixlivraison = Prixlivraison.findOne({
            where: { id: req.params.id },
            include: prixlivraisonController.includePrixlivraison
        })
        res.status(200).send(prixlivraison)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

prixlivraisonController.delete = async (req, res) => {
    try {
        const response = await Prixlivraison.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Prixlivraison supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

prixlivraisonController.getById = async (req, res) => {
    try {
        const response = await Prixlivraison.findOne({
            where: { id: request.params.id },
            include: prixlivraisonController.includePrixlivraison
        })
        if (response == null) {
            res.status(404).send('Prixlivraison non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


prixlivraisonController.getBy = async (req, res) => {
    try {
      const  response = await Prixlivraison.findAndCountAll({
            where: req.body,
            include:prixlivraisonController.includePrixlivraison
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = prixlivraisonController

