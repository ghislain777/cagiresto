
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Region } = require('../models');
const regionController = {}

regionController.includeRegion = [

]


regionController.add = async (req, res) => {
    try {
        const response = await Region.create(req.body)

const retour = await Region.findOne({
    where:{
        id:retour.id
    },
    include:regionController.includeRegion
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

regionController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Region.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: regionController.includeRegion,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

regionController.update = async (req, res) => {
    try {
        const response = await Region.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const region = Region.findOne({
            where: { id: req.params.id },
            include: regionController.includeRegion
        })
        res.status(200).send(region)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

regionController.delete = async (req, res) => {
    try {
        const response = await Region.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Region supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

regionController.getById = async (req, res) => {
    try {
        const response = await Region.findOne({
            where: { id: request.params.id },
            include: regionController.includeRegion
        })
        if (response == null) {
            res.status(404).send('Region non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


regionController.getBy = async (req, res) => {
    try {
      const  response = await Region.findAndCountAll({
            where: req.body,
            include:regionController.includeRegion
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = regionController

