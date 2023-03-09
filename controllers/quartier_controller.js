
const { response, request } = require('express');
const { where, Model } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Quartier, Commune } = require('../models');
const communeController = require('./commune_controller');

const quartierController = {}

quartierController.includeQuartier = [
{
    model: Commune,
    include: communeController.includeCommune

}
    
]


quartierController.add = async (req, res) => {
    try {
        const response = await Quartier.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

quartierController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Quartier.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 //   ...parametres,
                    //    nom: {
                    //        [Op.like]: '%' + parametres.nom + '%'
                    //    }
                },
               // include: [Menu]
                include:quartierController.includeQuartier

            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

quartierController.update = async (req, res) => {
    try {
        const response = await Quartier.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

quartierController.delete = async (req, res) => {
    try {
        const response = await Quartier.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Item deleted successfully')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

quartierController.getById = async (req, res) => {
    try {
        const response = await Quartier.findByPk(req.params.id)
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


quartierController.getBy = async (req, res) => {
    try {
      const  response = await Quartier.findAll({
            where: req.body,
            include:[{all:true}]
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = quartierController

