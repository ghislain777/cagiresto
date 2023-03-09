
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Commune, Ville } = require('../models');
const villeController = require('./ville_controller');

const communeController = {}

communeController.includeCommune = [
    {
        model: Ville,
        include: villeController.includeVille

    }
]


communeController.add = async (req, res) => {
    try {
        const response = await Commune.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

communeController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Commune.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                where: {
                    ...parametresRequete
                    //   ...parametres,
                    //    nom: {
                    //        [Op.like]: '%' + parametres.nom + '%'
                    //    }
                },
                // include: [Menu]
                include: [{ all: true }]

            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

communeController.update = async (req, res) => {
    try {
        const response = await Commune.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const response2 = await Commune.findOne({
            where: {
                id: req.params.id
            },
            include: communeController.includeCommune

        })

        res.status(200).send(response2)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

communeController.delete = async (req, res) => {
    try {
        const response = await Commune.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Item deleted successfully')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

communeController.getById = async (req, res) => {
    try {

        const response = await Commune.findOne({
            where: {
                id: req.params.id
            },
            include: communeController.includeCommune

        })
        if (response == null) {
            res.status(402).send('Item not found')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


communeController.getBy = async (req, res) => {
    try {
        response = await Commune.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = communeController

