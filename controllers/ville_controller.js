
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Ville, Pay } = require('../models');
const payController = require('./pay_controller');

const villeController = {}
villeController.includeVille = [
    {
        model: Pay,
        include: payController.includePay
    }
]
villeController.add = async (req, res) => {
    try {
        const response = await Ville.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

villeController.getAll = async (req, res) => {
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Ville.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                where: {
                    ...parametresRequete
                },
                include: villeController.includeVille,
                order: [["id", "desc"]]
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

villeController.update = async (req, res) => {
    try {
        await Ville.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const ville = Ville.findOne({
            where: { id: req.params.id },
            include: villeController.includeVille
        })
        res.status(200).send(ville)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

villeController.delete = async (req, res) => {
    try {
        const response = await Ville.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Ville supprimée avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

villeController.getById = async (req, res) => {
    try {
        const response = await Ville.findOne({
            where: { id: request.params.id },
            include: villeController.includeVille
        })
        if (response == null) {
            res.status(404).send('Ville non trouvée')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


villeController.getBy = async (req, res) => {
    try {
        response = await Ville.findAndCountAll({
            where: req.body,
            include: villeController.includeVille
        })
        res.status(200).send(response)

    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = villeController

