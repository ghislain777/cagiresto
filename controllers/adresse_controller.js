
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Adresse, Quartier, Commande } = require('../models');
const quartierController = require('./quartier_controller');
const adresseController = {}

adresseController.includeAdresse = [
    { model: Quartier, include: quartierController.includeQuartier }
]


adresseController.add = async (req, res) => {
    try {
        const response = await Adresse.create(req.body)

        const retour = await Adresse.findOne({
            where: {
                id: response.id
            },
            include: adresseController.includeAdresse
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

adresseController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Adresse.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                order: [['id', 'desc']],
                where: {
                    ...parametresRequete

                },
                include: adresseController.includeAdresse,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

adresseController.update = async (req, res) => {
    try {
        const response = await Adresse.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const adresse = Adresse.findOne({
            where: { id: req.params.id },
            include: adresseController.includeAdresse
        })
        res.status(200).send(adresse)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

adresseController.delete = async (req, res) => {
    try {
        const adresses = await Commande.findAll({
            where: {
                adresse: req.params.id
            }
        })
        console.log(adresses.length )
        if (adresses.length != 0) {
            res.status(401).send(" impossible de supprimer l'adresse. elle a déjà été utilisée dans une commande")
        }
        else {
            const response = await Adresse.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Adresse supprimé avec succès')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

adresseController.getById = async (req, res) => {
    try {
        const response = await Adresse.findOne({
            where: { id: request.params.id },
            include: adresseController.includeAdresse
        })
        if (response == null) {
            res.status(404).send('Adresse non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


adresseController.getBy = async (req, res) => {
    try {
        const response = await Adresse.findAndCountAll({
            where: req.body,
            include: adresseController.includeAdresse
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = adresseController

