
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Categorie } = require('../models');
const categorieController = {}

categorieController.includeCategorie = [

]


categorieController.add = async (req, res) => {
    try {
        const response = await Categorie.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

categorieController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Categorie.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: categorieController.includeCategorie,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

categorieController.update = async (req, res) => {
    try {
        const response = await Categorie.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const categorie = Categorie.findOne({
            where: { id: req.params.id },
            include: categorieController.includeCategorie
        })
        res.status(200).send(categorie)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

categorieController.delete = async (req, res) => {
    try {
        const response = await Categorie.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Categorie supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

categorieController.getById = async (req, res) => {
    try {
        const response = await Categorie.findOne({
            where: { id: request.params.id },
            include: categorieController.includeCategorie
        })
        if (response == null) {
            res.status(404).send('Categorie non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


categorieController.getBy = async (req, res) => {
    try {
      const  response = await Categorie.findAndCountAll({
            where: req.body,
            include:categorieController.includeCategorie
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = categorieController

