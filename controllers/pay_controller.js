
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Pay } = require('../models');

const payController = {}

payController.includePay = []

payController.add = async (req, res) => {
    try {
        const response = await Pay.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

payController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Pay.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                where: {
                    ...parametresRequete
                 //   ...parametres,
                    //    nom: {
                    //        [Op.like]: '%' + parametres.nom + '%'
                    //    }
                },
               // include: [Menu]
             //   include:[{all:true}]

            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

payController.update = async (req, res) => {
    try {
        const response = await Pay.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

payController.delete = async (req, res) => {
    try {
        const response = await Pay.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Item deleted successfully')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

payController.getById = async (req, res) => {
    try {
        const response = await Pay.findByPk(req.params.id)
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


payController.getBy = async (req, res) => {
    try {
        response = await Pay.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = payController

