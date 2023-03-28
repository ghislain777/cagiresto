
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Livreur, Quartier } = require('../models');
const livreurController = {}

livreurController.includeLivreur = [

    { model: Quartier }

]


livreurController.add = async (req, res) => {
    try {
        const response = await Livreur.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

livreurController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Livreur.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                order: [['id', 'desc']],
                where: {
                    ...parametresRequete

                },
                include: livreurController.includeLivreur,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

livreurController.update = async (req, res) => {
    try {
        const response = await Livreur.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const livreur = Livreur.findOne({
            where: { id: req.params.id },
            include: livreurController.includeLivreur
        })
        res.status(200).send(livreur)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

livreurController.delete = async (req, res) => {
    try {
        const response = await Livreur.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Livreur supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

livreurController.getById = async (req, res) => {
    try {
        const response = await Livreur.findOne({
            where: { id: request.params.id },
            include: livreurController.includeLivreur
        })
        if (response == null) {
            res.status(404).send('Livreur non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


livreurController.getBy = async (req, res) => {
    try {
        const response = await Livreur.findAndCountAll({
            where: req.body,
            include: livreurController.includeLivreur
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = livreurController

